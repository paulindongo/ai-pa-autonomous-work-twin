import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="main-content">

        <header className="top-header">

          <div>
            <h1>
              Good Morning 👋
            </h1>

            <p>
              Your AI team is ready to work.
            </p>
          </div>

        </header>


        <section className="hero-card">

          <h2>
            Welcome to AI-PA
          </h2>

          <p>
            Your autonomous work twin that coordinates tasks,
            meetings, and AI collaboration.
          </p>


          <div className="command-box">

            <input
              placeholder="Ask AI-PA anything..."
            />

            <button>
              Send
            </button>

          </div>

        </section>



        <section className="stats-grid">

          <div className="stat-card">
            <h3>
              Tasks Completed
            </h3>

            <strong>
              12
            </strong>
          </div>


          <div className="stat-card">

            <h3>
              AI Meetings
            </h3>

            <strong>
              5
            </strong>

          </div>


          <div className="stat-card">

            <h3>
              Connections
            </h3>

            <strong>
              18
            </strong>

          </div>


        </section>


        <section className="meeting-card">

          <h2>
            🧠 AI Meeting Room
          </h2>

          <p>
            Personal Agent, Meeting Agent and Negotiation Agent
            can collaborate on your behalf.
          </p>


          <button>
            Start Meeting
          </button>

        </section>


      </main>

    </div>
  );
}


export default Dashboard;

