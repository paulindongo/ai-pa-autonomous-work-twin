class MeetingSession:
    """
    Represents an AI-PA internal meeting session.
    """

    def __init__(self, topic):
        self.topic = topic
        self.participants = []
        self.messages = []
        self.status = "created"


    def add_participant(self, agent):
        self.participants.append(agent)


    def add_message(self, sender, message):
        self.messages.append({
            "sender": sender,
            "message": message
        })


    def start(self):
        self.status = "running"


    def end(self):
        self.status = "completed"


    def summary(self):
        return {
            "topic": self.topic,
            "participants": self.participants,
            "messages": self.messages,
            "status": self.status
        }
