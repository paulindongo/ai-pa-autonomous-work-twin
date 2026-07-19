class MeetingAgent:
    def __init__(self):
        self.name = "Meeting Agent"

    def process(self, request):
        return {
            "agent": self.name,
            "request": request,
            "response": "Meeting analysis completed",
            "status": "processed"
        }
