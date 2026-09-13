from fastapi import FastAPI, HTTPException, Request, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
import os
import uvicorn

from database import (
    init_db,
    save_contact_message,
    log_analytics_event,
    get_analytics_summary,
    get_all_messages,
    mark_message_read,
    delete_message,
    verify_admin
)

# Initialize database
init_db()

app = FastAPI(
    title="Surendra Batikiri — Enterprise Portfolio API",
    description="High-performance backend providing analytics, contact handling, and live project orchestration.",
    version="1.0.0"
)

# Enable CORS for all frontend clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= PYDANTIC SCHEMAS =================
class ContactRequest(BaseModel):
    name: str
    email: str
    subject: Optional[str] = "Portfolio Inquiry"
    message: str

class TrackEventRequest(BaseModel):
    event_type: str
    path: str
    meta: Optional[str] = None
    session_id: Optional[str] = None

class AdminLoginRequest(BaseModel):
    email: str
    password: str

# ================= DATA GROUNDED IN RESUME =================
PROFILE_DATA = {
    "name": "Surendra Batikiri",
    "editorial_name": "Marcus — Bennet",
    "title": "Full Stack Developer & AI/ML Engineer",
    "location": "Hyderabad, India",
    "email": "batikirisurendra1211@gmail.com",
    "phone": "+91 8074053175",
    "github": "https://github.com/batikirisurendra",
    "linkedin": "https://linkedin.com/in/surendra-batikiri",
    "live_store": "https://sssilksarees.vercel.app",
    "summary": "Motivated Computer Science graduate and aspiring Full Stack Developer with hands-on Python programming, SQL database design, and backend development fundamentals. Demonstrated ability to build end-to-end systems through academic projects and a self-built, deployed e-commerce web application spanning machine learning, AI integration, and data-driven application design.",
    "stats": {
        "projects_built": "3+",
        "technologies": "20+",
        "live_deployments": "1 Production",
        "certifications": "Java Full Stack (6 Months)"
    },
    "skills": [
        {"name": "Python", "category": "Languages", "level": 95, "desc": "Primary language — backend logic, data transformation, ML pipelines"},
        {"name": "FastAPI", "category": "Backend", "level": 92, "desc": "High-performance async REST API design, validation & OpenAPI"},
        {"name": "PostgreSQL", "category": "Databases", "level": 88, "desc": "Relational schema modeling, index optimization, production DB"},
        {"name": "Machine Learning", "category": "AI / ML", "level": 85, "desc": "Supervised learning, predictive modeling, regression evaluation"},
        {"name": "Deep Learning", "category": "AI / ML", "level": 82, "desc": "Adaptive Feature Fusion Networks, neural sequence modeling"},
        {"name": "NLP", "category": "AI / ML", "level": 80, "desc": "Text classification, emotion extraction, lexical parsing"},
        {"name": "Core Java", "category": "Languages", "level": 84, "desc": "Strong OOP fundamentals, collections, enterprise principles"},
        {"name": "REST APIs", "category": "Backend", "level": 90, "desc": "Resource-oriented endpoints, HTTP status codes, error handling"},
        {"name": "SQL", "category": "Databases", "level": 88, "desc": "Complex queries, joins, aggregates, normalization"},
        {"name": "Vercel", "category": "Cloud / DevOps", "level": 86, "desc": "Serverless frontend & backend edge deployment"},
        {"name": "Docker", "category": "Cloud / DevOps", "level": 75, "desc": "Containerization fundamentals & image configuration"},
        {"name": "Git & GitHub", "category": "Tools", "level": 90, "desc": "Branching workflows, version control, CI integration"},
        {"name": "Postman", "category": "Tools", "level": 88, "desc": "API mocking, automated testing, request collections"}
    ],
    "projects": [
        {
            "id": "silk-sarees",
            "title": "Sri Someshwara Silk Sarees",
            "tagline": "Full-Stack Production E-Commerce Platform",
            "stack": ["Python", "FastAPI", "PostgreSQL", "Vercel", "HTML5", "CSS3"],
            "live_url": "https://sssilksarees.vercel.app",
            "description": "Independently designed, built, and deployed a full-stack e-commerce web application for a silk sarees retail business, taking it from concept to a live, publicly accessible product.",
            "highlights": [
                "Built a RESTful backend using Python and FastAPI to serve product catalog data, handling routing and validation.",
                "Designed and managed PostgreSQL database schema to model products, categories, and inventory details.",
                "Deployed and hosted end-to-end on Vercel, managing solo lifecycle from schema design to production release."
            ],
            "metrics": {
                "uptime": "99.9%",
                "catalog_speed": "< 120ms",
                "database": "PostgreSQL Normalized"
            }
        },
        {
            "id": "passenger-flow",
            "title": "Adaptive Feature Fusion Network (AFFN)",
            "tagline": "Deep Learning Passenger Flow Forecasting",
            "stack": ["Python", "PyTorch / TensorFlow", "Deep Learning", "Feature Fusion"],
            "live_url": None,
            "description": "Designed and implemented an end-to-end deep learning pipeline to predict metro passenger flow using an Adaptive Feature Fusion Network (AFFN) for origin-destination analysis.",
            "highlights": [
                "Engineered multi-source feature fusion architecture integrating spatial and temporal transit streams.",
                "Achieved superior prediction accuracy over baseline regression models.",
                "Developed data preprocessing and transformation modules in Python for large-scale data cleaning."
            ],
            "metrics": {
                "accuracy_gain": "+14.2%",
                "parameters_tuned": "50k+",
                "latency": "Real-time"
            }
        },
        {
            "id": "emotion-music",
            "title": "Emotion-Based Music Recommendation",
            "tagline": "Intelligent Mood Classification & Playlist Engine",
            "stack": ["Python", "Machine Learning", "NLP", "API Integration"],
            "live_url": None,
            "description": "Built an intelligent music recommendation system that detects user emotions from input signals and maps them dynamically to curated playlists and musical genres.",
            "highlights": [
                "Implemented NLP emotion detection module classifying user text into discrete emotional states.",
                "Engineered a recommendation engine dynamically mapping emotion labels to tempo, valence, and genres.",
                "Designed a clean modular pipeline from input ingestion to playlist generation."
            ],
            "metrics": {
                "emotions_supported": "5 Core Moods",
                "classification_speed": "< 80ms",
                "recommendation_match": "High Precision"
            }
        }
    ],
    "education": [
        {
            "degree": "B.Tech — Computer Science & Engineering",
            "institution": "Siddhartha Institute of Engineering and Technology, Hyderabad",
            "period": "2022 – 2025",
            "grade": "65.45%"
        },
        {
            "degree": "Diploma — Mechanical Engineering",
            "institution": "Government Polytechnic College, Vaddepally",
            "period": "2022",
            "grade": "60%"
        },
        {
            "degree": "SSC (10th Grade)",
            "institution": "Zilla Parishad High School, Rajoli",
            "period": "2019",
            "grade": "73%"
        }
    ],
    "certifications": [
        {
            "title": "Java Full Stack Development",
            "issuer": "Pentagon Coaching Center, Bangalore",
            "duration": "6 Months Intensive Classroom Bootcamp",
            "topics": "Core Java, SQL, HTML5, CSS3, REST API Fundamentals, OOP Architecture"
        }
    ]
}

# ================= API ROUTES =================
@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Surendra Batikiri Enterprise API",
        "version": "1.0.0",
        "database": "SQLite / PostgreSQL Ready"
    }

@app.get("/api/profile")
def get_profile():
    return PROFILE_DATA

@app.post("/api/contact")
def submit_contact(req: ContactRequest):
    try:
        msg_id = save_contact_message(req.name, req.email, req.subject, req.message)
        log_analytics_event("contact_submission", "/#contact", f"From {req.name} ({req.email})")
        return {
            "success": True,
            "message": "Thank you! Your message has been received. Surendra will respond promptly.",
            "inquiry_id": msg_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/analytics/track")
def track_event(req: TrackEventRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    log_analytics_event(req.event_type, req.path, req.meta, req.session_id, client_ip)
    return {"status": "recorded"}

@app.get("/api/analytics/live")
def get_live_analytics():
    return get_analytics_summary()

@app.post("/api/admin/login")
def admin_login(req: AdminLoginRequest):
    user = verify_admin(req.email, req.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid admin credentials")
    # Return simple session token
    return {
        "success": True,
        "token": f"admin_token_{user['id']}_auth_ok",
        "user": user
    }

@app.get("/api/admin/dashboard")
def admin_dashboard(authorization: Optional[str] = Header(None)):
    if not authorization or "admin_token" not in authorization:
        raise HTTPException(status_code=401, detail="Unauthorized admin access")
    
    analytics = get_analytics_summary()
    messages = get_all_messages()
    
    return {
        "analytics": analytics,
        "messages": messages,
        "system_status": {
            "api_version": "1.0.0",
            "framework": "FastAPI (Python 3.14)",
            "database": "Connected",
            "status": "Production Ready"
        }
    }

@app.patch("/api/admin/messages/{msg_id}/read")
def read_message(msg_id: int, authorization: Optional[str] = Header(None)):
    if not authorization or "admin_token" not in authorization:
        raise HTTPException(status_code=401, detail="Unauthorized admin access")
    mark_message_read(msg_id)
    return {"success": True}

@app.delete("/api/admin/messages/{msg_id}")
def remove_message(msg_id: int, authorization: Optional[str] = Header(None)):
    if not authorization or "admin_token" not in authorization:
        raise HTTPException(status_code=401, detail="Unauthorized admin access")
    delete_message(msg_id)
    return {"success": True}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
