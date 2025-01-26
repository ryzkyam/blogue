import Header from "./pages/header";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/blogs" Component={Blogs} />
      </Routes>
    </div>
  );
}

export default App;
