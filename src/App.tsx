import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <div className="flex items-start justify-center min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
