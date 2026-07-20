import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AIConnect from "./pages/AIConnect";
import MeetingRoom from "./pages/MeetingRoom";


function App() {


  return (

    <BrowserRouter>


      <Routes>


        <Route
          path="/"
          element={<Dashboard />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


        <Route
          path="/connect"
          element={<AIConnect />}
        />


        <Route
          path="/meetings"
          element={<MeetingRoom />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;
