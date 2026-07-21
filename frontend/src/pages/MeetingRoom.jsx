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
        `http://localhost:8000/meeting/create?topic=${encodeURIComponent(topic)}`,
        {
          method: "POST"
        }
      );


      const data = await response.json();

      setMeeting(data);


    } catch (error) {

      console.error("Meeting error:", error);

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

          {loading ? "Agents are thinking..." : "🚀 Start AI Meeting"}

        </button>


      </div>





      {loading && (

        <div className="stat-card">

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


            {meeting.participants?.map((agent)=>(

              <p key={agent}>
                🤖 {agent} Online
              </p>

            ))}


          </div>





          <div className="stat-card">

            <h2>
              💬 AI Discussion
            </h2>


            {meeting.messages?.map((msg,index)=>(

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
              📋 Final AI Summary
            </h2>


            <p>
              ✅ Decisions captured from AI collaboration
            </p>

            <p>
              ✅ Strategic recommendations prepared
            </p>

            <p>
              ✅ Next steps generated automatically
            </p>


          </div>



        </>

      )}



    </div>

  );

}


export default MeetingRoom;
