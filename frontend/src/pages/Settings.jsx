import { useState } from "react";


function Settings() {


  const [saved, setSaved] = useState(false);


  function saveProfile() {

    setSaved(true);

    setTimeout(() => {

      setSaved(false);

    }, 3000);

  }



  return (

    <div className="main-content">


      <section className="hero-card">


        <h1>
          ⚙️ AI-PA Personalization
        </h1>


        <p>
          Customize your autonomous work twin
          and how it collaborates for you.
        </p>


      </section>





      <section className="stat-card">


        <h2>
          🤖 Your AI Name
        </h2>


        <input
          className="settings-input"
          defaultValue="Atlas"
        />


      </section>





      <section className="stat-card">


        <h2>
          🧠 AI Personality
        </h2>


        <select className="settings-input">


          <option>
            Professional
          </option>


          <option>
            Creative
          </option>


          <option>
            Analytical
          </option>


          <option>
            Executive Assistant
          </option>


        </select>


      </section>





      <section className="stat-card">


        <h2>
          🌌 Workspace Theme
        </h2>


        <button className="theme-button">
          Deep Space
        </button>


        <button className="theme-button">
          Ocean Blue
        </button>


        <button className="theme-button">
          Aurora
        </button>


      </section>





      <button
        className="save-button"
        onClick={saveProfile}
      >

        Save AI Profile

      </button>





      {saved && (

        <div className="hero-card">

          ✅ AI profile updated successfully.

        </div>

      )}



    </div>

  );

}


export default Settings;
