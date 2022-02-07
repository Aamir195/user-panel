import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faHome, faLock } from '@fortawesome/free-solid-svg-icons';
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
import {Link} from 'react-router-dom'




export default function Home() {
    return <>
        <body>
       

            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to ='/home' className="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span className="d-none d-lg-block">User Exchange</span>
                    </Link>
                    {/* <!-- <i className="bi bi-list toggle-sidebar-btn"></i> --> */}
                </div>
                {/* <!-- End Logo --> */}

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                
                {/* <!-- End Search Bar --> */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                {/* <i className="bi bi-search"></i> */}
                            </a>
                        </li>
                        {/* <!-- End Search Icon--> */}

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                                <img src={Profile} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Mello</span>
                            </Link>
                            {/* <!-- End Profile Iamge Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Mello</h6>

                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        {/* <i className="bi bi-person"></i> */}
                                        <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>

                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        {/* <i className="bi bi-box-arrow-right"></i> */}
                                        <FontAwesomeIcon icon={faLock} ></FontAwesomeIcon>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                            {/* <!-- End Profile Dropdown Items --> */}
                        </li>
                        {/* <!-- End Profile Nav --> */}

                    </ul>
                </nav>
                {/* <!-- End Icons Navigation --> */}

            </header>
            {/* <!-- End Header --> */}



            <main id="main" className="main">

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-md-9 flex-row-res">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* <!-- ======= Sidebar ======= --> */}
                                    <div className="">

                                        <ul className="card-tred">
                                            {/* <!-- Treanding topic start here --> */}
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h5>Trending Topic </h5>
                                                    </div>
                                                    <div className="table-responsive" >
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Treanding topic ends here--> */}

                                            {/* <!-- Latest topic start here --> */}
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h5>Latest Topic </h5>
                                                    </div>
                                                    <div className="table-responsive" >
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img alt="image" src={Profile}
                                                                            className="rounded-circle" width="35" data-toggle="title"
                                                                            title="" />
                                                                        <span className="d-inline-block ml-1">Bitcoin</span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Latest topic ends here --> */}

                                        </ul>



                                    </div>
                                    {/* <!-- End Sidebar--> */}
                                </div>
                                {/* <!-- Left side columns --> */}
                                <div className="col-md-8">
                                    <div className="row">
                                        {/* <!-- All Posts --> */}
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
                                            <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                            <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-2.jpg" alt="" />
                                            <h4><a href="#">Quidem autem et impedit</a></h4>
                                            <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...
                                            </p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-3.jpg" alt="" />
                                            <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                            <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...
                                            </p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-4.jpg" alt="" />
                                            <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                            <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...
                                            </p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-5.jpg" alt="" />
                                            <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                                            <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos
                                                eius...</p>
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



            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

            {/* <!-- Vendor JS Files --> */}
            {/* <script src="assets/vendor/apexcharts/apexcharts.min.js"></script> */}
            

            {/* <!-- Template Main JS File --> */}
            <script src="assets/js/main.js"></script>

        </body>
    </>;
}
