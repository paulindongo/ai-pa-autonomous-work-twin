from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="AI-PA Autonomous Work Twin"
)


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "*"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)



@app.post("/meeting/create")
def create_meeting(topic: str):

    return {

        "topic": topic,

        "participants": [
            "Personal Agent",
            "Meeting Agent",
            "Negotiation Agent"
        ],

        "messages": [

            {
                "sender": "Meeting Agent",
                "message": "Meeting started. Analysing the topic."
            },

            {
                "sender": "Negotiation Agent",
                "message": "Reviewing options and possible agreements."
            },

            {
                "sender": "Personal Agent",
                "message": "Recording decisions and preparing user summary."
            }

        ],

        "status": "completed"

    }



@app.get("/")
def home():

    return {
        "message": "AI-PA Backend Online"
    }
