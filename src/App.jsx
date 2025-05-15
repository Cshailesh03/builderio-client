import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Authentication/Signup";
import Signup2 from "./component/Authentication/Signup2";
import Login from "./component/Authentication/Login";
import ForgotPassword from "./component/Authentication/ForgotPassword";
import ResetPassword from "./component/Authentication/ResetPassword";
import Termuse from "./component/pages/Termuse";
import Pricavypolicy from "./component/pages/Pricavypolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/s2" element={<Signup2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/termuse" element={<Termuse />} />
        <Route path="/privacy" element={<Pricavypolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
