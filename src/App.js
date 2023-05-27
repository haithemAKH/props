import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HAYTHEM NASRI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ADAM</Nav.Link>
            <Nav.Link href="#features">KOSSAY</Nav.Link>
            <Nav.Link href="#pricing">DEVELOPPER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Profile Fullname="NASRI HAYTHEM" Age="age 36" Bio="telecomunication engineer and web developper" Profession="developper"/>


    </div>
  );
}

export default App;
