
const Footer = () => {
  return (
      <>
        <nav className="navbar-expand-md navbar-dark bg-dark p-3">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active text-light" href="#">Site Map</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-light" href="#">Search Terms</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-light" href="#">Advanced Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-light" href="#">Orders and Returns</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-light" href="#">Contact Us</a>
                </li>
            </ul>
            {/* Socials */}
            <ul className="nav justify-content-center mt-2 h4">
                <li className="nav-item">
                    <i className="fa-brands fa-instagram text-light nav-link"></i>
                </li>
                <li className="nav-item">
                    <i className="fa-brands fa-twitter nav-link text-light"></i>
                </li>
                <li className="nav-item">
                    <i className="fa-brands fa-facebook nav-link text-light"></i>
                </li>
                <li className="nav-item">
                    <i className="fa-brands fa-pinterest nav-link text-light"></i>
                </li>
            </ul>
        </nav>
      </>
  )
}

export default Footer