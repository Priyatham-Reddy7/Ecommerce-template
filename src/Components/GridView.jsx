import iphone13 from '../images/iphone13.jpg'
import ipad from '../images/ipad.jpg'
import applewatch from '../images/applewatch.jpg'
import speaker from '../images/speaker.jpg'

const GridView = () => {
  return (
      <>
          <div className="card-group mb-4">
              <div className="card">
                  <img className="img-fluid h-100" src={ipad} alt="" />
                  <div className="card-body">
                        <h5 className="card-title text-center">Ipad Air mini</h5>
                        <p className="card-text text-center">$499.99</p>
                        <button type="button" className="btn btn-primary d-grid mx-auto">Add to Cart</button>
                        <p className="card-title text-center mt-3 mb-0"><a className='nav-link active text-dark' href="#">Add to Wishlist</a></p>
                        <p className="card-title text-center"><a className='nav-link active text-dark'
                        href="#">Add to compare</a></p>
                  </div>
              </div>
              <div className="card">
                  <img className="img-fluid h-100" src={iphone13} alt="" />
                  <div className="card-body">
                        <h5 className="card-title text-center">Iphone 13</h5>
                        <p className="card-text text-center">$899.99</p>
                        <button type="button" className="btn btn-primary d-grid mx-auto">Add to Cart</button>
                        <p className="card-title text-center mt-3 mb-0"><a className='nav-link active text-dark' href="#">Add to Wishlist</a></p>
                        <p className="card-title text-center"><a className='nav-link active text-dark'
                        href="#">Add to compare</a></p>
                  </div>
              </div>
              <div className="card">
                  <img className="img-fluid h-100" src={applewatch} alt="" />
                  <div className="card-body">
                        <h5 className="card-title text-center">Apple Watch SE</h5>
                        <p className="card-text text-center">$359.99</p>
                        <button type="button" className="btn btn-primary d-grid mx-auto">Add to Cart</button>
                        <p className="card-title text-center mt-3 mb-0"><a className='nav-link active text-dark' href="#">Add to Wishlist</a></p>
                        <p className="card-title text-center"><a className='nav-link active text-dark'
                        href="#">Add to compare</a></p>
                  </div>
              </div>
              <div className="card">
                  <img className="img-fluid h-100" src={speaker} alt="" />
                  <div className="card-body">
                        <h5 className="card-title text-center">Homepod mini</h5>
                        <p className="card-text text-center">$299.99</p>
                        <button type="button" className="btn btn-primary d-grid mx-auto">Add to Cart</button>
                        <p className="card-title text-center mt-3 mb-0"><a className='nav-link active text-dark' href="#">Add to Wishlist</a></p>
                        <p className="card-title text-center"><a className='nav-link active text-dark'
                        href="#">Add to compare</a></p>
                  </div>
              </div>
          </div>

          {/* pager */}
            <nav>
                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
      </>
  )
}

export default GridView