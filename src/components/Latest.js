import React from "react";
import {
  Profile,

  // Favicon
} from "../assets/images";
import "../assets/style.css";
// import { Link } from 'react-router-dom'

export default function Latest() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5>Latest Topic </h5>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="image"
                      src={Profile}
                      className="rounded-circle"
                      width="35"
                      data-toggle="title"
                      title=""
                    />
                    <span className="d-inline-block ml-1">Bitcoin</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="image"
                      src={Profile}
                      className="rounded-circle"
                      width="35"
                      data-toggle="title"
                      title=""
                    />
                    <span className="d-inline-block ml-1">Bitcoin</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={Profile}
                      className="rounded-circle"
                      width="35"
                      data-toggle="title"
                      title=""
                    />
                    <span className="d-inline-block ml-1">Bitcoin</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="image"
                      src={Profile}
                      className="rounded-circle"
                      width="35"
                      data-toggle="title"
                      title=""
                    />
                    <span className="d-inline-block ml-1">Bitcoin</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      alt="image"
                      src={Profile}
                      className="rounded-circle"
                      width="35"
                      data-toggle="title"
                      title=""
                    />
                    <span className="d-inline-block ml-1">Bitcoin</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Latest topic ends here --> */}
    </>
  );
}
