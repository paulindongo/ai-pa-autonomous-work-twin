import { Link } from "react-router-dom";


function AIConnect() {


  const agents = [

    {
      name: "Atlas AI",
      role: "Personal Work Twin",
      status: "Connected",
      icon: "🟢"
    },

    {
      name: "Nova AI",
      role: "Product Strategy Agent",
      status: "Connected",
      icon: "🟢"
    },

    {
      name: "Enterprise AI",
      role: "Business Agent",
      status: "Available",
      icon: "🟡"
    }

  ];



  return (

    <div className="main-content">



      <div className="page-navigation">

        <Link 
          to="/"
          className="back-button"
        >

          ← Back to Dashboard

        </Link>

      </div>





      <div className="hero-card">


        <h1>
          🌐 AI Connect Network
        </h1>


        <p>
          Connect and collaborate with other autonomous AI agents.
        </p>


      </div>







      <div className="stat-card">


        <h2>
          🤖 Connected AI Agents
        </h2>


        <p>
          Your AI-PA can communicate, collaborate and exchange information with other AI systems.
        </p>


      </div>







      {agents.map((agent)=>(


        <div

          className="stat-card"

          key={agent.name}

        >


          <h2>

            {agent.icon} {agent.name}

          </h2>



          <p>

            Role: {agent.role}

          </p>



          <p>

            Status: {agent.status}

          </p>



        </div>


      ))}







      <div className="hero-card">


        <h2>
          🔗 AI-to-AI Collaboration
        </h2>



        <p>
          Atlas AI can coordinate with Nova AI and Enterprise AI to complete complex tasks.
        </p>



        <button className="save-button">

          + Connect New AI Agent

        </button>



      </div>





    </div>

  );

}


export default AIConnect;
