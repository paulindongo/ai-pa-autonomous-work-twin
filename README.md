# AI-PA: Autonomous Work Twin

AI-PA is a Digital Work Twin that enables AI-to-AI collaboration by allowing autonomous AI agents to coordinate, negotiate, and complete workflows on behalf of humans.

## Inspiration

AI-PA was inspired by a common challenge faced by founders, professionals, and teams: spending too much time coordinating work instead of focusing on meaningful tasks.

The idea was to create an AI assistant that goes beyond reminders and task management by allowing AI agents to collaborate with other AI agents on behalf of their users.

OpenAI Build Week provided the opportunity to explore this vision and build a working prototype.

## What It Does

AI-PA is an autonomous AI work assistant that coordinates collaboration between multiple AI agents.

The current MVP demonstrates an AI Meeting Room where different AI agents work together:

- Personal Agent: Represents the user's interests and records decisions.
- Meeting Agent: Coordinates the discussion workflow.
- Negotiation Agent: Evaluates options and possible agreements.

The system generates structured meeting outcomes including discussions, participants, and completion status.

## How We Built It

AI-PA was built during OpenAI Build Week using GPT-5.6 and Codex.

Technology used:

- GPT-5.6 for AI reasoning and agent workflows
- Codex for development assistance, debugging, and implementation
- React + Vite for the frontend
- FastAPI + Python for backend services

The application architecture consists of:

Frontend → Backend API → AI Agent Collaboration Workflow

## Codex Usage

Codex was used throughout development to:

- Accelerate coding
- Debug implementation issues
- Improve frontend and backend integration
- Support rapid prototyping

## GPT-5.6 Usage

GPT-5.6 powers the AI collaboration layer by enabling:

- Agent reasoning
- Multi-agent workflows
- Structured responses
- Meeting summaries

## Challenges We Faced

During development, we encountered challenges including:

- Connecting frontend and backend services in GitHub Codespaces.
- Configuring CORS communication between React and FastAPI.
- Designing reliable communication between AI agents.
- Balancing autonomous behaviour with human oversight.
- Delivering a focused MVP within the Build Week timeframe.

## Accomplishments

We successfully built a working AI-to-AI collaboration prototype with:

- Functional AI Meeting Room
- Multiple AI agent roles
- Dashboard interface
- Backend API integration
- Agent-generated meeting outcomes

## What We Learned

Build Week highlighted the importance of:

- Clear responsibilities between AI agents.
- Structured communication.
- Human approval boundaries.
- Building focused solutions before expanding.

## What's Next

Our vision is to expand AI-PA beyond meeting coordination into broader workplace workflows.

Future possibilities include:

- AI-powered service discovery
- Workflow automation
- Advanced negotiation systems
- Human-approved autonomous decision making

AI-PA aims to become a trusted digital work twin that helps people spend less time coordinating work and more time creating value.

## Demo

The AI-PA MVP demonstrates AI-to-AI collaboration through an AI Meeting Room.

Demo workflow:

1. User enters a meeting topic.
2. AI-PA creates a collaboration session.
3. Multiple AI agents participate:
   - Personal Agent
   - Meeting Agent
   - Negotiation Agent
4. The system generates structured meeting outcomes and decisions.

The current prototype runs locally using:

- React + Vite frontend
- FastAPI backend
- GitHub Codespaces development environment
