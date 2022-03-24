import productData from "./productData"

const GridView = () => {
  return (
      <>
          <div className="card-group mb-4">
                {productData.map((product) => (
                    <div className="card" key={product.id}>
                        <img className="img-fluid h-100" src={product.img} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                {product.title}
                            </h5>
                            <p className="card-text text-center">
                                {product.price}
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
                ))}
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