import React from 'react';
import '../assets/style.css'

import Trending from '../components/Trending';
import Latest from '../components/Latest';
import Category from '../components/Category';
import Header from '../components/Header';




export default function Home() {
    return <>
        <body>


            {/* <!-- ======= Header ======= --> */}
            <Header/>
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
                                            <Trending/>
                                            {/* <!-- Treanding topic ends here --> */}

                                            {/* <!-- Latest topic start here --> */}
                                            <Latest/>
                                        </ul>



                                    </div>
                                    
                                </div>
                                {/* <!-- Main Post columns --> */}
                                <div className="col-md-8">
                                    <div className="row">

                                        {/* <!-- All Posts --> */}
                                        <Category/>
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
