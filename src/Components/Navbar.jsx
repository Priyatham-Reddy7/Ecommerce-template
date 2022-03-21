import '../App.css'

const Navbar = () => {
  return (
      <>
        {/* Top Nav */}
        <nav className="navbar navbar-expand-md navbar-light mb-0 nav-primary">
            <div className="container-fluid">
                <p className="navbar-brand h1 p-1 text-dark message">Welcome to the store!!</p>
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
        <nav className="navbar navbar-expand-md navbar-light nav-primary nav-bottom">
            <div className="container-fluid">
                <a className="navbar-brand h1" href="#">
                    <i className="fa-brands fa-shopify p-1 h1 logo"></i><strong className='brand-name'>MacStore</strong>
                </a>
                <form className="d-flex p-2">
                    <input className="form-control me-2" type="search"  aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
                <button className="btn btn-light btn-outline-dark"><i className="fa-solid fa-cart-shopping p-1"></i>My Cart [empty] - $0.00</button>
            </div>
        </nav>
        {/* Under Nav List */}
        <ul className="list-inline text-center p-1 mb-0 bg-light">
            <li className="list-inline-item col-sm-0">
                <button type="button" className="btn">Home</button>
            </li>
            <li className="list-inline-item col-sm-0">
                <button type="button" className="btn">Offers</button>
            </li>
            <li className="list-inline-item col-sm-0">
                <button type="button" className="btn">Latest Products</button>
            </li>
        </ul>
    </>
  )
}

export default Navbar