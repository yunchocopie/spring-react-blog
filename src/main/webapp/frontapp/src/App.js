import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/post/Detail";
import Home from "./pages/post/Home";
import SaveForm from "./pages/post/SaveForm";
import UpdateForm from "./pages/post/UpdateForm";
import JoinForm from "./pages/user/JoinForm";
import LoginForm from "./pages/user/LoginForm";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saveForm" element={<SaveForm />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/joinForm" elment={<JoinForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;