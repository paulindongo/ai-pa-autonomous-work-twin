from backend.meetings.session import MeetingSession


class MeetingRoomAgent:
    """
    AI-PA internal meeting coordinator.
    Creates meetings between AI agents.
    """

    def __init__(self):
        self.name = "AI-PA Meeting Room"


    def create_meeting(self, topic):

        meeting = MeetingSession(topic)

        meeting.add_participant("Personal Agent")
        meeting.add_participant("Meeting Agent")
        meeting.add_participant("Negotiation Agent")

        meeting.start()

        meeting.add_message(
            "Meeting Agent",
            "Meeting started. Analysing the topic."
        )

        meeting.add_message(
            "Negotiation Agent",
            "Reviewing options and possible agreements."
        )

        meeting.add_message(
            "Personal Agent",
            "Recording decisions and preparing user summary."
        )

        meeting.end()

        return meeting.summary()
