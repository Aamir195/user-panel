import React from 'react';
import { Link } from 'react-router-dom';
import {
    Profile,
    Logo,
    // Favicon
} from '../assets/images'
import CkEditorExampleComponent from './ckeditor'

export default function Detailedpost() {
    return <>
        <body>

            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="index1.html" className="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span className="d-none d-lg-block">User Exchange</span>
                    </a>
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
                                <i className="bi bi-search"></i>
                            </a>
                        </li>
                        {/* <!-- End Search Icon--> */}

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to='' data-bs-toggle="dropdown">
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
                                    <Link className="dropdown-item d-flex align-items-center" to='/profile'>
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right"></i>
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
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Cryptocurrency</a></li>
                            <li className="breadcrumb-item active">Doge Coin</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9">
                            <h2>
                                Doge Coin
                            </h2>
                            <div>
                                <a href="" data-bs-toggle="modal" data-bs-target="#verticalycentered">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor"
                                        className="bi bi-plus" viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg> Add Comment
                                </a>

                                {/* <!-- modal  start --> */}
                                <div className="modal fade" id="verticalycentered" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Write Comment</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* <!-- Quill Editor Full --> */}
                                               
                                                {/* <div className="quill-editor-full">
                                                    <p>Hello World!</p>
                                                    <p>This is Quill <strong>full</strong> editor</p>
                                                </div> */}
                                                <CkEditorExampleComponent/>   
                                                
                                                {/* <!-- End Quill Editor Full --> */}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Done</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- modal ends  --> */}

                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
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
                                            {/* <!-- user profile short when user is login strat --> */}
                                            {/* <!-- <div className="card">
                                <div className="card-body">
                                    
                                    <div className="card-block">
                                        <div className="user-image">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-radius" alt="User-Profile-Image">
                                        </div>
                                        <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                                        <p className="text-muted">Active | Male | Born 23.05.1992</p>
                                        <hr>
                                        <p className="text-muted m-t-15">Activity Level: 87%</p>
                                        <ul className="list-unstyled activity-leval">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                        <div className="bg-c-blue counter-block m-t-10 p-20">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i className="fa fa-comment"></i>
                                                    <p>1256</p>
                                                </div>
                                                <div className="col-4">
                                                    <i className="fa fa-user"></i>
                                                    <p>8562</p>
                                                </div>
                                                <div className="col-4">
                                                    <i className="fa fa-suitcase"></i>
                                                    <p>189</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <hr>
                                        <div className="row justify-content-center user-social-link">
                                            <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                            <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                            <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div> -->
                            <!-- user profile short when user is login ends--> */}

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
                                                        className="bi bi-three-dots"></i></a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li className="dropdown-header text-start">
                                                            <h6>Action</h6>
                                                        </li>
                                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                                        {/* <!-- <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li> --> */}
                                                    </ul>
                                                </div>
                                                <div className="card-body pb-0">
                                                    <div className="card-header">
                                                        <div className="media flex-wrap w-100 align-items-center ">
                                                            <img src={Profile} className="rounded-circle"
                                                                width="35" alt="" />

                                                            <span className="d-inline-block ml-1">Tom Bhai  </span>
                                                            {/* <!-- <p className="text-muted small">13 days ago</p> --> */}
                                                            <span className="d-inline-block ml-1 text-muted small"> 15 days Ago</span>

                                                            {/* <!-- <a href="#">Stock Market</a>
                                                    <div className="bullet"></div>
                                                    <a href="#">Apple</a> --> */}
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <p> For me, getting my business website made was a lot of tech wizardry
                                                            things.
                                                            Thankfully i get an ad on Facebook ragarding commence website. I get
                                                            connected with BBB team. They made my stunning website live in just
                                                            3 days.
                                                            With the increase demand of online customers. I had to take my
                                                            business
                                                            online. BBB Team guided me at each step and enabled me to centralise
                                                            my work
                                                            and have control on all aspect of my online business. </p>
                                                        <hr />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24"
                                                            // style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                                                            >
                                                            <path
                                                                d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z">
                                                            </path>
                                                        </svg>678
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24"
                                                            // style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                                                            >
                                                            <path
                                                                d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z">
                                                            </path>
                                                        </svg>457
                                                    </div>

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


            

            {/* <!-- Template Main JS File --> */}
            <script src="assets/js/main.js"></script>


        </body>
    </>;
}
