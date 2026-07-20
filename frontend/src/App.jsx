import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AIConnect from "./pages/AIConnect";


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


      </Routes>


    </BrowserRouter>

  );

}


export default App;
