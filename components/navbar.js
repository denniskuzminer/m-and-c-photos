import { Typography } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <nav className="fill nav-wrapper">
        <div className="title">
          <Typography variant="h1">
            M & C<br />
          </Typography>
          <Typography variant="h2">Photography</Typography>
        </div>
        <ul className="link-list">
          <div className="nav-item">
            <li>
              <a href="./" className="nav-text">
                <Typography variant="h6">Home</Typography>
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="./portfolio" className="nav-text">
                <Typography variant="h6">Portfolio</Typography>
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="./contract" className="nav-text">
                <Typography variant="h6">Pricing</Typography>
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="./contact" className="nav-text">
                <Typography variant="h6">Contact</Typography>
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="./about" className="nav-text">
                <Typography variant="h6">About</Typography>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
