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

      console.error("Meeting error:", error);

      alert("Unable to connect to AI Meeting Room");

    }


    setLoading(false);

  }



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
          🧠 AI Meeting Room
        </h1>


        <p>
          AI agents collaborating autonomously on your behalf.
        </p>


        <input

          className="settings-input"

          value={topic}

          onChange={(e) => setTopic(e.target.value)}

        />



        <br /><br />


        <button
          className="save-button"
          onClick={startMeeting}
        >

          {loading ? "Starting..." : "Start AI Meeting"}

        </button>


      </div>




      {meeting && (

        <>


          <div className="stat-card">

            <h2>
              🤖 AI Participants
            </h2>


            {meeting.participants.map((person) => (

              <p key={person}>
                {person}
              </p>

            ))}


          </div>




          <div className="stat-card">

            <h2>
              💬 AI Discussion
            </h2>


            {meeting.messages.map((msg, index) => (

              <p key={index}>

                <strong>
                  {msg.sender}:
                </strong>{" "}

                {msg.message}

              </p>

            ))}


          </div>




          <div className="stat-card">

            <h2>
              📋 Meeting Outcome
            </h2>


            <p>
              ✅ Decisions captured
            </p>


            <p>
              ✅ Action items prepared
            </p>


            <p>
              ✅ User summary ready
            </p>


          </div>


        </>

      )}



    </div>

  );

}


export default MeetingRoom;
