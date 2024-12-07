import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import UserInfo from "./APIs/UserInfo";
// import RegisterUser from "./pages/Registration";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-auto [background:radial-gradient(125%_125%_at_50%_10%,#ff3300_40%,#fc925a_100%)] md:px-20 md:py-5 px-4 py-3">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Profile />} /> */}
          <Route path="/" element={<UserInfo />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* <Route path="/registration" element={<RegisterUser />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
