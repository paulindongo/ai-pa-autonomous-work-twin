import { useState } from "react";


function MeetingRoom() {


  const [topic, setTopic] = useState("");

  const [meeting, setMeeting] = useState(null);


  async function startMeeting() {


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


      console.error(
        "Meeting error:",
        error
      );


      alert(
        "Unable to connect to AI Meeting Room"
      );


    }

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

          Start AI Meeting

        </button>


      </div>




      {meeting && (

        <>


          <div className="stat-card">


            <h2>
              🤖 AI Participants
            </h2>


            {meeting.participants.map((agent)=>(

              <p key={agent}>

                {agent}

              </p>

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



        </>

      )}



    </div>

  );

}


export default MeetingRoom;
