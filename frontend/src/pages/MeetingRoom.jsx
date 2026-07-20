import { useState } from "react";


function MeetingRoom() {


  const [topic, setTopic] = useState("");

  const [meeting, setMeeting] = useState(null);

  const [loading, setLoading] = useState(false);



  async function startMeeting() {


    setLoading(true);

    setMeeting(null);


    try {


      const response = await fetch(

        `https://verbose-space-cod-vpv4rv9wj7q5c69x5-8000.app.github.dev/meeting/create?topic=${encodeURIComponent(topic)}`,

        {
          method: "POST"
        }

      );


      const data = await response.json();


      setMeeting(data);



    } catch(error) {


      console.error(error);

      alert("AI Meeting connection failed");


    }


    setLoading(false);


  }




  return (

    <div className="main-content">


      <div className="hero-card">

        <h1>
          🧠 AI Meeting Room
        </h1>

        <p>
          AI agents collaborating autonomously on your behalf.
        </p>


      </div>




      <div className="stat-card">


        <input

          className="settings-input"

          placeholder="Enter meeting topic..."

          value={topic}

          onChange={(e)=>setTopic(e.target.value)}

        />



        <button

          className="save-button"

          onClick={startMeeting}

        >

          {loading
            ? "AI Agents Collaborating..."
            : "Start AI Meeting"
          }


        </button>


      </div>




      {loading && (


        <div className="stat-card">

          <h2>
            🔄 AI Agents Working
          </h2>


          <p>
            🤖 Personal Agent analysing...
          </p>


          <p>
            🧠 Meeting Agent coordinating...
          </p>


          <p>
            🤝 Negotiation Agent reviewing...
          </p>


        </div>


      )}





      {meeting && (


        <>


        <div className="agent-grid">


          {meeting.participants.map((agent,index)=>(


            <div className="agent-card" key={agent}>


              <h3>

                {
                  index === 0
                  ? "🤖"
                  : index === 1
                  ? "🧠"
                  : "🤝"
                }

                {" "}

                {agent}


              </h3>


              <p>
                Online
              </p>


              <span>
                Ready
              </span>


            </div>


          ))}


        </div>





        <div className="stat-card">


          <h2>
            💬 AI Discussion
          </h2>



          {meeting.messages.map((message,index)=>(


            <p key={index}>


              <strong>
                {message.sender}
              </strong>


              :
              {" "}

              {message.message}


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
