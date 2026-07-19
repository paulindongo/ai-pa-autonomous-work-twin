from backend.agents.orchestrator import AgentOrchestrator


def test_personal_agent():

    orchestrator = AgentOrchestrator()

    response = orchestrator.route_task(
        "personal",
        "Prepare my daily work summary"
    )

    print(response)


if __name__ == "__main__":
    test_personal_agent()
