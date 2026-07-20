import {
  Home,
  Users,
  Brain,
  Calendar,
  Folder,
  Settings as SettingsIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/aipa-logo.png";


function Sidebar() {


  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      name: "AI Connect",
      icon: Users,
      path: "/connect",
    },
    {
      name: "Meeting Room",
      icon: Brain,
      path: "/meetings",
    },
    {
      name: "Calendar",
      icon: Calendar,
      path: "/calendar",
    },
    {
      name: "Knowledge Vault",
      icon: Folder,
      path: "/vault",
    },
    {
      name: "Settings",
      icon: SettingsIcon,
      path: "/settings",
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


        {menuItems.map((item) => {


          const Icon = item.icon;


          return (

            <Link

              key={item.name}

              to={item.path}

              className="nav-item"

            >

              <Icon size={20} />

              <span>
                {item.name}
              </span>


            </Link>

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
