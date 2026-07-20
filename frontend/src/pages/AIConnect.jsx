import { Link } from "react-router-dom";


function AIConnect() {


  const connections = [
    {
      name: "Nova AI",
      status: "Online",
      role: "Product Assistant"
    },
    {
      name: "Atlas AI",
      status: "Online",
      role: "Personal Work Twin"
    },
    {
      name: "Enterprise AI",
      status: "Available",
      role: "Business Agent"
    }
  ];


  return (

    <div className="main-content">


      <div className="page-navigation">

        <Link 
          to="/" 
          className="save-button"
        >
          ← Back to Dashboard
        </Link>

      </div>




      <div className="hero-card">


        <h1>
          AI Connect
        </h1>


        <p>
          Connect and collaborate with other AI-PAs.
        </p>


      </div>




      <div className="stat-card">


        <button className="save-button">

          + Invite AI-PA User

        </button>


      </div>




      {connections.map((ai) => (

        <div
          className="stat-card"
          key={ai.name}
        >


          <h2>
            🤖 {ai.name}
          </h2>


          <p>
            {ai.role}
          </p>


          <span>
            ● {ai.status}
          </span>


        </div>

      ))}



    </div>

  );

}


export default AIConnect;

