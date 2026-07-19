from backend.agents.personal_agent import PersonalAgent
from backend.agents.meeting_agent import MeetingAgent
from backend.agents.negotiation_agent import NegotiationAgent


class AgentOrchestrator:

    def __init__(self):
        self.agents = {
            "personal": PersonalAgent(),
            "meeting": MeetingAgent(),
            "negotiation": NegotiationAgent()
        }

    def route_task(self, agent_name, request):

        if agent_name not in self.agents:
            return {
                "error": f"Agent {agent_name} not found"
            }

        agent = self.agents[agent_name]

        if hasattr(agent, "execute"):
            return agent.execute(request)

        if hasattr(agent, "process_request"):
            return agent.process_request(request)

        return {
            "error": "Agent has no execution method"
        }
