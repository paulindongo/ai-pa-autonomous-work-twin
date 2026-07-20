import { Link } from "react-router-dom";
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
              Your AI team is ready to work autonomously.
            </p>


          </div>


        </header>




        <section className="hero-card">


          <h2>
            Welcome to AI-PA
          </h2>


          <p>
            Your autonomous work twin that coordinates
            tasks, meetings, decisions, and AI collaboration
            on your behalf.
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
              Today's Tasks
            </h3>


            <strong>
              12
            </strong>


            <p>
              3 high priority
            </p>


          </div>





          <div className="stat-card">


            <h3>
              AI Meetings
            </h3>


            <strong>
              5
            </strong>


            <p>
              2 AI-to-AI meetings
            </p>


          </div>





          <div className="stat-card">


            <h3>
              AI Connections
            </h3>


            <strong>
              18
            </strong>


            <p>
              Agents connected
            </p>


          </div>



        </section>






        <section className="meeting-card">


          <h2>
            🧠 AI Meeting Room
          </h2>


          <p>

            Personal Agent, Meeting Agent and Negotiation
            Agent collaborate to make decisions for you.

          </p>



          <Link to="/meetings">

            <button>

              Start AI Meeting

            </button>

          </Link>



        </section>





        <section className="hero-card">


          <h2>
            🤖 AI Agent Activity
          </h2>



          <p>
            🟢 Personal Agent is online and monitoring tasks.
          </p>


          <p>
            🔵 Meeting Agent is ready for collaboration.
          </p>


          <p>
            🟣 Negotiation Agent is ready to evaluate options.
          </p>



        </section>



      </main>


    </div>


  );


}


export default Dashboard;
