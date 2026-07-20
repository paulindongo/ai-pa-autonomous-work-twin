import {
  Home,
  Users,
  Brain,
  Calendar,
  Folder,
  Settings,
} from "lucide-react";

import logo from "../assets/aipa-logo.png";


function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
    },
    {
      name: "AI Connect",
      icon: Users,
    },
    {
      name: "Meeting Room",
      icon: Brain,
    },
    {
      name: "Calendar",
      icon: Calendar,
    },
    {
      name: "Knowledge Vault",
      icon: Folder,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];


  return (

    <aside className="sidebar">


      <div className="brand">


        <div className="logo">

          <img
            src={logo}
            alt="AI-PA Logo"
          />

        </div>


        <div>

          <h1>
            AI-PA
          </h1>

          <p>
            Autonomous Work Twin
          </p>

        </div>


      </div>



      <nav className="navigation">


        {menuItems.map((item, index) => {

          const Icon = item.icon;


          return (

            <button

              key={item.name}

              className={
                index === 0
                ? "nav-item active"
                : "nav-item"
              }

            >

              <Icon size={20}/>

              <span>
                {item.name}
              </span>


            </button>

          );

        })}


      </nav>



      <div className="ai-profile">


        <h3>
          My AI Assistant
        </h3>


        <p>
          🤖 Atlas
        </p>


        <span>
          ● Online
        </span>


      </div>



    </aside>

  );

}


export default Sidebar;
