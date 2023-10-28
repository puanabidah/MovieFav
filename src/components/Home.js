import { Button } from 'react-bootstrap';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <Navigation />
      <div className="home" id="home">
        <h1>Welcome to MovieFav!</h1>
        <h3>You can watch everything, anywhere</h3>
        <div className="btnHome">
          <Link to="/register">
            <Button variant="danger fw-bold border-2 me-2">Register</Button>{' '}
          </Link>

          {/* Endpoint to route to About component */}
          <Link to="/login">
            <Button variant="outline-light border-2 fw-bold">Login</Button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}
