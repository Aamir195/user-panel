import React from "react";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Post from "../components/Post";
import Trending from "../components/Trending";
import CkEditorExampleComponent from "./ckeditor";

export default function Detailedpost() {
    return (
        <>
            <body>
                {/* <!-- ======= Header ======= --> */}
                <Header/>
                {/* <!-- End Header --> */}

                <main id="main" className="main">
                    <section className="section dashboard">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Cryptocurrency</a>
                                </li>
                                <li className="breadcrumb-item active">Doge Coin</li>
                            </ol>
                        </nav>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-9">
                                <h2>Doge Coin</h2>
                                <div>
                                    <a
                                        href=""
                                        data-bs-toggle="modal"
                                        data-bs-target="#verticalycentered"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32px"
                                            height="32px"
                                            fill="currentColor"
                                            className="bi bi-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>{" "}
                                        Add Comment
                                    </a>

                                    {/* <!-- modal  start --> */}
                                    <div
                                        className="modal fade"
                                        id="verticalycentered"
                                        tabIndex="-1"
                                    >
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Write Comment</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <CkEditorExampleComponent />
                                                    {/* Editor  */}
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary">
                                                        Done
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- modal ends  --> */}
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </section>

                    {/* <!-- ---------------------- --> */}

                    <section className="section dashboard">
                        <div className="row">
                            <div className="col-md-9 flex-row-res">
                                <div className="row">
                                    <div className="col-md-4">
                                        {/* <!-- ======= Sidebar ======= --> */}
                                        <div className="">
                                            <ul className="card-tred">
                                                {/* <!-- Treanding topic start here --> */}
                                                <Trending />
                                                {/* <!-- Treanding topic ends here--> */}

                                                {/* <!-- Latest topic start here --> */}
                                                <Latest />
                                                {/* <!-- Latest topic ends here --> */}
                                            </ul>
                                        </div>
                                        {/* <!-- End Sidebar--> */}
                                    </div>
                                    {/* <!-- Left side columns --> */}
                                    <div className="col-md-8">
                                        <div className="row">
                                            {/* <!-- All Posts --> */}
                                            <Post/>
                                            {/* <!-- All Posts --> */}
                                        </div>
                                    </div>
                                    {/* <!-- End Left side columns -post--> */}
                                </div>
                            </div>
                            {/* <!-- Right side columns -ads --> */}
                            <div className="col-md-3">
                                {/* <!-- ADs --> */}
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <h5 className="card-title">ADs</h5>

                                        <div className="news">
                                            <div className="post-item clearfix">
                                                <img src="assets/img/news-1.jpg" alt="" />
                                                <h4>
                                                    <a href="#">Nihil blanditiis at in nihil autem</a>
                                                </h4>
                                                <p>
                                                    Sit recusandae non aspernatur laboriosam. Quia enim
                                                    eligendi sed ut harum...
                                                </p>
                                            </div>

                                            <div className="post-item clearfix">
                                                <img src="assets/img/news-2.jpg" alt="" />
                                                <h4>
                                                    <a href="#">Quidem autem et impedit</a>
                                                </h4>
                                                <p>
                                                    Illo nemo neque maiores vitae officiis cum eum turos
                                                    elan dries werona nande...
                                                </p>
                                            </div>

                                            <div className="post-item clearfix">
                                                <img src="assets/img/news-3.jpg" alt="" />
                                                <h4>
                                                    <a href="#">
                                                        Id quia et et ut maxime similique occaecati ut
                                                    </a>
                                                </h4>
                                                <p>
                                                    Fugiat voluptas vero eaque accusantium eos.
                                                    Consequuntur sed ipsam et totam...
                                                </p>
                                            </div>

                                            <div className="post-item clearfix">
                                                <img src="assets/img/news-4.jpg" alt="" />
                                                <h4>
                                                    <a href="#">Laborum corporis quo dara net para</a>
                                                </h4>
                                                <p>
                                                    Qui enim quia optio. Eligendi aut asperiores enim
                                                    repellendusvel rerum cuder...
                                                </p>
                                            </div>

                                            <div className="post-item clearfix">
                                                <img src="assets/img/news-5.jpg" alt="" />
                                                <h4>
                                                    <a href="#">
                                                        Et dolores corrupti quae illo quod dolor
                                                    </a>
                                                </h4>
                                                <p>
                                                    Odit ut eveniet modi reiciendis. Atque cupiditate
                                                    libero beatae dignissimos eius...
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- End sidebar recent posts--> */}
                                    </div>
                                </div>
                                {/* <!-- End News & Updates --> */}
                            </div>
                            {/* <!-- End Right side columns --> */}
                        </div>
                    </section>
                </main>
                {/* <!-- End #main --> */}

                <a
                    href="#"
                    className="back-to-top d-flex align-items-center justify-content-center"
                >
                    <i className="bi bi-arrow-up-short"></i>
                </a>

                {/* <!-- Template Main JS File --> */}
                <script src="assets/js/main.js"></script>
            </body>
        </>
    );
}
