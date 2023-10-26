export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2023 Copyright:{' '}
        <a className="text-white text-decoration-none" href="#home">
          MovieFav
        </a>
      </div>
    </footer>
  );
}
