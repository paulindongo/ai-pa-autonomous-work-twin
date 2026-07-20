import { Link } from "react-router-dom";


function Settings() {


  return (

    <div className="main-content">


      <Link
        to="/"
        className="save-button"
      >
        ← Back to Dashboard
      </Link>




      <div className="hero-card">


        <h1>
          AI-PA Personalization
        </h1>


        <p>
          Customize your autonomous work twin.
        </p>


      </div>




      <div className="stat-card">


        <h2>
          Your AI Name
        </h2>



        <input

          className="settings-input"

          placeholder="Enter AI name"

          defaultValue="Atlas"

        />


      </div>




      <div className="stat-card">


        <h2>
          AI Personality
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


      </div>




      <div className="stat-card">


        <h2>
          Workspace Theme
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



      </div>




      <button className="save-button">

        Save AI Profile

      </button>



    </div>

  );

}


export default Settings;
