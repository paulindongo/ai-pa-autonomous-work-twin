import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


function Dashboard() {


  const activities = [
    {
      time: "10:42",
      text: "AI Meeting completed successfully",
      color: "🟢"
    },
    {
      time: "10:30",
      text: "Connected with Nova AI",
      color: "🔵"
    },
    {
      time: "09:55",
      text: "Atlas AI analysed today's priorities",
      color: "🟣"
    }
  ];


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
              Your autonomous AI team is ready to work.
            </p>

          </div>

        </header>



        <section className="hero-card">

          <h2>
            🧠 AI-PA Command Center
          </h2>

          <p>
            Your autonomous work twin coordinates meetings,
            decisions, tasks, and AI collaboration on your behalf.
          </p>

        </section>




        <section className="hero-card">

          <h2>
            AI-PA Status
          </h2>

          <h3>
            🤖 Atlas AI
          </h3>

          <p>
            🟢 Online
          </p>

          <p>
            Monitoring tasks and ready for autonomous collaboration.
          </p>

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
              AI-to-AI collaboration
            </p>

          </div>



          <div className="stat-card">

            <h3>
              Connections
            </h3>

            <strong>
              18
            </strong>

            <p>
              AI agents connected
            </p>

          </div>


        </section>





        <section className="hero-card">


          <h2>
            ⚡ Quick Actions
          </h2>



          <Link to="/meetings">

            <button className="save-button">
              🚀 Start AI Meeting
            </button>

          </Link>



          <Link to="/connect">

            <button className="save-button">
              🤖 Connect AI Agent
            </button>

          </Link>



          <Link to="/settings">

            <button className="save-button">
              ⚙ Manage Profile
            </button>

          </Link>


        </section>





        <section className="hero-card">


          <h2>
            📡 Recent AI Activity
          </h2>



          {
            activities.map((activity,index)=>(

              <p key={index}>

                {activity.color}

                {" "}

                {activity.time}

                {" - "}

                {activity.text}

              </p>

            ))
          }


        </section>



      </main>


    </div>

  );

}


export default Dashboard;
