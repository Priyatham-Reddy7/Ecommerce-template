import macbook from '../images/macbook.jpg'

const ListView = () => {
  return (
      <>
          <div className="mb-3 mt-4" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={macbook} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 mt-4">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            MacBook Pro
                        </h5>
                        <p className="card-text text-center text-muted">
                            <small>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nobis eligendi necessitatibus earum commodi odio recusandae dolor aperiam, quaerat officia mollitia magni minus. Fuga, blanditiis! Nisi iste commodi nemo!
                            </small>
                        </p>
                        <p className="card-text text-center">
                            $1599.99
                        </p>
                        <button type="button" className="btn btn-primary d-grid mx-auto">
                            Add to Cart
                        </button>
                        <p className="card-title text-center mt-3 mb-0">
                            <a className='nav-link active text-dark' href="#">
                                Add to Wishlist
                            </a>
                        </p>
                        <p className="card-title text-center">
                            <a className='nav-link active text-dark'href="#">
                                Add to compare
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default ListView