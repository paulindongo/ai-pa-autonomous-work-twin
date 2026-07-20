import { useState } from "react";
import { Link } from "react-router-dom";


function MeetingRoom() {


  const [topic, setTopic] = useState(
    "Product launch planning"
  );

  const [meetingStarted, setMeetingStarted] = useState(false);

  const [thinking, setThinking] = useState(false);



  function startMeeting() {

    setThinking(true);


    setTimeout(() => {

      setThinking(false);

      setMeetingStarted(true);

    }, 3000);

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
          AI agents negotiating and collaborating autonomously.
        </p>



        <input

          className="settings-input"

          value={topic}

          onChange={(e)=>setTopic(e.target.value)}

        />



        <br/><br/>


        <button

          className="save-button"

          onClick={startMeeting}

        >

          🚀 Start AI Meeting

        </button>



      </div>





      <div className="stats-grid">


        <div className="stat-card">

          🤖 Atlas AI

          <p>
            Personal Work Twin
          </p>

          <span>
            🟢 Online
          </span>

        </div>



        <div className="stat-card">

          🧠 Nova AI

          <p>
            Product Strategy Agent
          </p>

          <span>
            🟢 Online
          </span>

        </div>




        <div className="stat-card">

          💼 Enterprise AI

          <p>
            Business Agent
          </p>

          <span>
            🟡 Available
          </span>

        </div>



      </div>





      {thinking && (

        <div className="stat-card">

          <h2>
            🤔 Agents Thinking...
          </h2>


          <p className="thinking">

            Atlas AI is analysing objectives...

          </p>


          <p className="thinking">

            Nova AI is generating strategies...

          </p>


          <p className="thinking">

            Enterprise AI is evaluating impact...

          </p>


        </div>

      )}






      {meetingStarted && (


        <>


        <div className="stat-card">


          <h2>
            💬 Live AI Discussion
          </h2>


          <p>
            🤖 Atlas AI: Reviewing objectives and priorities.
          </p>


          <p>
            🧠 Nova AI: Analysing strategic opportunities.
          </p>


          <p>
            💼 Enterprise AI: Evaluating business impact.
          </p>


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





        <div className="stat-card">


          <h2>
            🚀 Action Items
          </h2>


          <p>
            ☑ Review AI recommendations
          </p>


          <p>
            ☑ Assign follow-up tasks
          </p>


          <p>
            ☑ Schedule next collaboration
          </p>


        </div>


        </>

      )}




    </div>

  );


}


export default MeetingRoom;


