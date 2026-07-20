import { useState } from "react";
import { Link } from "react-router-dom";


function MeetingRoom() {


  const [topic, setTopic] = useState("Product launch planning");
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(false);



  const agents = [
    {
      name: "Atlas AI",
      role: "Personal Work Twin",
      icon: "🤖"
    },
    {
      name: "Nova AI",
      role: "Product Strategy Agent",
      icon: "🧠"
    },
    {
      name: "Enterprise AI",
      role: "Business Agent",
      icon: "💼"
    }
  ];



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
          className="back-button"
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

          onChange={(e)=>setTopic(e.target.value)}

        />



        <br />
        <br />



        <button

          className="save-button"

          onClick={startMeeting}

        >

          {loading ? "Agents Thinking..." : "Start AI Meeting"}


        </button>



      </div>








      <section className="stats-grid">


        {
          agents.map((agent)=>(


            <div
              className="stat-card"
              key={agent.name}
            >


              <h2>
                {agent.icon} {agent.name}
              </h2>


              <p>
                {agent.role}
              </p>


              <p>
                🟢 Online
              </p>


              <p className={loading ? "thinking" : ""}>
                💭 {loading ? "Thinking..." : "Ready"}
              </p>



            </div>


          ))
        }


      </section>









      {
        meeting &&

        <>


          <div className="hero-card">


            <h2>
              💬 Live AI Discussion
            </h2>



            {
              meeting.messages?.map((msg,index)=>(


                <p key={index}>


                  <strong>
                    {msg.sender}
                  </strong>


                  :

                  {" "}

                  {msg.message}



                </p>



              ))
            }



          </div>








          <div className="hero-card">


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







          <div className="hero-card">


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


      }




    </div>


  );


}



export default MeetingRoom;
