from fastapi import FastAPI

from backend.agents.orchestrator import AgentOrchestrator
from backend.agents.meeting_room_agent import MeetingRoomAgent


app = FastAPI(
    title="AI-PA Autonomous Work Twin"
)


orchestrator = AgentOrchestrator()

meeting_room = MeetingRoomAgent()


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


@app.post("/meeting/create")
def create_meeting(topic: str):

    response = meeting_room.create_meeting(
        topic
    )

    return response
