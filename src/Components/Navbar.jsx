
const Navbar = () => {
  return (
      <>
        {/* Top Nav */}
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light mb-0">
            <div className="container-fluid">
                <a className="navbar-brand h1 p-1 text-success" href="#">Welcome to the Store</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">My Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">My Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">My Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Checkout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Bottom Nav */}
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1" href="#">
                    <i className="fa-brands fa-shopify p-1 h1"></i>Store
                </a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search"  aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
                <button className="btn btn-light btn-outline-dark"><i className="fa-solid fa-cart-shopping p-1"></i>My Cart [empty] - $0.00</button>
            </div>
        </nav>
        {/* Under Nav List */}
        <ul className="list-inline text-center p-1">
            <li className="list-inline-item col-sm-1">
                <button type="button" className="btn">Home</button>
            </li>
            <li className="list-inline-item col-sm-1">
                <button type="button" className="btn">Category1</button>
            </li>
            <li className="list-inline-item col-sm-1">
                <button type="button" className="btn">Category2</button>
            </li>
        </ul>
    </>
  )
}

export default Navbar