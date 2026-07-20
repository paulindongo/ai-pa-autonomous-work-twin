function AIConnect() {


  const connections = [

    {
      name: "Atlas AI",
      status: "Online",
      role: "Personal Work Twin",
      icon: "🤖"
    },

    {
      name: "Meeting Agent",
      status: "Online",
      role: "Autonomous Meeting Coordinator",
      icon: "🧠"
    },

    {
      name: "Negotiation Agent",
      status: "Ready",
      role: "Decision & Agreement Assistant",
      icon: "🤝"
    }

  ];



  return (

    <div className="main-content">


      <section className="hero-card">


        <h1>
          🤖 AI Connect
        </h1>


        <p>
          AI-PA agents collaborating with other AI agents
          to complete work autonomously.
        </p>


      </section>





      <section className="meeting-card">


        <h2>
          AI-to-AI Collaboration Network
        </h2>


        <p>
          Your AI agents can communicate, coordinate,
          and exchange information on your behalf.
        </p>


        <div className="agent-grid">


          {connections.map((ai) => (


            <div
              className="agent-card"
              key={ai.name}
            >


              <h3>

                {ai.icon} {ai.name}

              </h3>



              <p>
                {ai.role}
              </p>



              <span>

                ● {ai.status}

              </span>


            </div>


          ))}


        </div>


      </section>





      <section className="hero-card">


        <h2>
          Autonomous Communication Flow
        </h2>


        <p>
          🤖 Atlas AI → 🧠 Meeting Agent → 🤝 Negotiation Agent
        </p>


        <p>
          Agents exchange context and return decisions
          back to your AI Personal Assistant.
        </p>


      </section>





      <button className="save-button">

        + Invite AI-PA User

      </button>



    </div>

  );


}


export default AIConnect;
