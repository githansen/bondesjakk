import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import {Game} from './Components/Game'
function App() {
  return (
    <div className="App">
      <Container fluid>
          <Row>
              Topp
          </Row>
         <Game/>
          <Row>
              Bunn
          </Row>
      </Container>
    </div>
  );
}

export default App;
