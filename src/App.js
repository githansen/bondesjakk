import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import {Game} from './Components/Game'
import {Header} from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Container fluid>
          <Header/>
          <Row>
             <br/>  <br/>
          </Row>
         <Game/>

      </Container>
    </div>
  );
}

export default App;
