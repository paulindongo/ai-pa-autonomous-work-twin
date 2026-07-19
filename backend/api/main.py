from fastapi import FastAPI
from backend.agents.orchestrator import AgentOrchestrator

app = FastAPI(
    title="AI-PA Autonomous Work Twin"
)

orchestrator = AgentOrchestrator()


@app.get("/")
def home():
    return {
        "name": "AI-PA",
        "status": "online"
    }


@app.post("/task")
def create_task(request: str):

    response = orchestrator.auto_route(
        request
    )

    return response
