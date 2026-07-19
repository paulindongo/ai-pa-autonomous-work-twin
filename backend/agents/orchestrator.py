from backend.agents.personal_agent import PersonalAgent
from backend.agents.meeting_agent import MeetingAgent
from backend.agents.negotiation_agent import NegotiationAgent


class AgentOrchestrator:
    """
    Coordinates AI-PA agents and routes tasks.
    """

    def __init__(self):
        self.agents = {
            "personal": PersonalAgent(),
            "meeting": MeetingAgent(),
            "negotiation": NegotiationAgent()
        }

    def route_task(self, agent_name: str, request: str):

        if agent_name not in self.agents:
            return {
                "error": f"Agent {agent_name} not found"
            }

        agent = self.agents[agent_name]

        if hasattr(agent, "execute"):
            return agent.execute(request)

        return {
            "error": "Agent has no execution method"
        }

    def auto_route(self, request: str):
        """
        Automatically selects the correct agent
        based on the user's request.
        """

        request_lower = request.lower()

        if "meeting" in request_lower or "schedule" in request_lower:
            agent_name = "meeting"

        elif (
            "negotiate" in request_lower
            or "agree" in request_lower
            or "time" in request_lower
        ):
            agent_name = "negotiation"

        else:
            agent_name = "personal"

        return self.route_task(
            agent_name,
            request
        )
