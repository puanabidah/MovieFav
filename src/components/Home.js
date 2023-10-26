import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="home" id="home">
      <h1>Welcome to MovieFav!</h1>
      <h3>You can watch everything, anywhere</h3>
      <div className="btnHome">
        <Button variant="danger fw-bold border-2 me-2">Lihat semua Film</Button>{' '}
        <Button variant="outline-light border-2 fw-bold">Sign Up</Button>{' '}
      </div>
    </div>
  );
}
