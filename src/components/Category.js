import React from 'react'
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Profile,
  Logo,
  // Favicon
} from '../assets/images'
import '../assets/style.css'
import { Link } from 'react-router-dom'

export default function Category() {
  return (

    <>
      <div className="col-12">
        <div className="card top-selling">

          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown"><i
              className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><a className="dropdown-item" href="#">Today</a></li>
              <li><a className="dropdown-item" href="#">This Month</a></li>
              <li><a className="dropdown-item" href="#">This Year</a></li>
            </ul>
          </div>

          <div className="card-body pb-0">
            <h5 className="card-title">All Post</h5>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab"
                  data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                  role="tab" aria-controls="pills-home"
                  aria-selected="true">Cryptocurrency</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab"
                  data-bs-toggle="pill" data-bs-target="#pills-profile"
                  type="button" role="tab" aria-controls="pills-profile"
                  aria-selected="false">Stock Market
                </button>
              </li>

            </ul>
            <div className="tab-content pt-2" id="myTabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                aria-labelledby="home-tab">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Preview</th>
                      <th scope="col">Category</th>
                      <th scope="col">Comment/month</th>
                      <th scope="col">Total Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product1} alt="" /></a>
                      </th>
                      <td>
                        <Link to="/detail-post" className="text-primary fw-bold">
                          Ut inventore ipsa voluptas nulla
                        </Link>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>

                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product2} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product3} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product4} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product5} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* All Categrory  */}
              <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                aria-labelledby="profile-tab">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Preview</th>
                      <th scope="col">Post</th>
                      <th scope="col">Comments</th>
                      <th scope="col">Total Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product1} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>

                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product2} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product3} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product4} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                    <tr>
                      <th scope="row"><a href="#"><img
                        src={Product5} alt="" /></a>
                      </th>
                      <td><a href="#" className="text-primary fw-bold">Ut
                        inventore ipsa
                        voluptas
                        nulla
                      </a>
                        <p>
                          XRP is the cryptocurrency used by the Ripple
                          payment
                          network. Built for enterprise use, XRP aims to
                          be a
                          fast, cost-efficient cryptocurrency for
                          cross-border
                          payments. Resources
                        </p>

                      </td>
                      <td>64</td>
                      <td className="fw-bold">124</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
            {/* <!-- End Pills Tabs --> */}

            {/* <!-- Right/End Aligned Pagination --> */}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1"
                    aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            {/* <!-- End Right/End Aligned Pagination --> */}

          </div>


        </div>
      </div>
      {/* <!-- All Posts --> */}


    </>
  )
}
