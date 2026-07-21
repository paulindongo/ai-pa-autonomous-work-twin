import { useState } from "react";
import { Link } from "react-router-dom";


function MeetingRoom() {

  const [topic, setTopic] = useState("Product launch planning");
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(false);


  async function startMeeting() {

    setLoading(true);

    try {

      const response = await fetch(
        `https://verbose-space-cod-vpv4rv9wj7q5c69x5-8000.app.github.dev/meeting/create?topic=${encodeURIComponent(topic)}`,
        {
          method: "POST"
        }
      );


      const data = await response.json();

      setMeeting(data);


    } catch (error) {

      console.error(error);

      alert("Unable to connect to AI Meeting Room");

    }


    setLoading(false);

  }



  return (

    <div className="main-content">


      <div className="page-navigation">

        <Link to="/" className="back-button">
          ← Back to Dashboard
        </Link>

      </div>



      <div className="hero-card">


        <h1>
          🧠 AI Meeting Room
        </h1>


        <p>
          Autonomous AI agents collaborating on your behalf.
        </p>



        <input

          className="settings-input"

          value={topic}

          onChange={(e)=>setTopic(e.target.value)}

        />



        <br />
        <br />



        <button

          className="save-button"

          onClick={startMeeting}

        >

          {loading ? "Agents are thinking..." : "Start AI Meeting"}

        </button>


      </div>





      {loading && (

        <div className="stat-card thinking-card">

          <h2>
            🤖 AI Agents Thinking...
          </h2>


          <p>
            Personal Agent is analysing the request...
          </p>


          <p>
            Meeting Agent is preparing discussion...
          </p>


          <p>
            Negotiation Agent is evaluating options...
          </p>


        </div>

      )}






      {meeting && (

        <>


          <div className="stat-card">


            <h2>
              👥 AI Participants
            </h2>


            <div className="agent-grid">


            {meeting.participants.map((agent)=>(
              
              <div 
                className="agent-card"
                key={agent}
              >

                <h3>
                  🤖 {agent}
                </h3>

                <p>
                  Online
                </p>

              </div>

            ))}


            </div>


          </div>







          <div className="stat-card">


            <h2>
              💬 Live Meeting Timeline
            </h2>


            {meeting.messages.map((msg,index)=>(

              <p key={index}>

                <strong>
                  {msg.sender}
                </strong>

                :
                
                {msg.message}

              </p>

            ))}


          </div>






          <div className="stat-card">


            <h2>
              📋 AI Generated Summary
            </h2>


            <p>
              ✅ Key decisions captured
            </p>


            <p>
              ✅ Recommendations prepared
            </p>


            <p>
              ✅ Next steps generated
            </p>


          </div>






          <div className="stat-card">


            <h2>
              🚀 Action Items
            </h2>


            <p>
              • Review AI recommendations
            </p>


            <p>
              • Assign tasks to responsible agents
            </p>


            <p>
              • Follow up on decisions
            </p>


          </div>



        </>

      )}



    </div>

  );

}


export default MeetingRoom;
