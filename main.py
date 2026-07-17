from fastapi import FastAPI

app = FastAPI(
    title="AI-PA Autonomous Work Twin",
    description="AI agent that coordinates tasks, meetings, and AI-to-AI collaboration",
    version="0.1.0"
)


@app.get("/")
def home():
    return {
        "message": "AI-PA is online",
        "status": "operational",
        "version": "0.1.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


