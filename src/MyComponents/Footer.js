import React from 'react'
import {Link} from "react-router-dom";


export default function Footer() {
  return (
      <>
<footer class="footer footer-topbar page-section-pt">
        <div class="container">
            <div class="row top">
                <div class="col-lg-3 col-md-2">
                    <img class="img-fluid" src="images/logo-footer.png" alt="" />
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="footer-nav text-right">
                        <ul>
                            <li><Link to="index-1.html">Home</Link></li>
                            <li><Link to="about-01.html">About us</Link></li>
                            <li><Link to="service-list-01.html">Service</Link></li>
                            <li><Link to="blog-right-sidebar.html">Blog</Link></li>
                            <li><Link to="contact-single-office.html">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="social text-right">
                        <ul>
                            <li>
                                <Link to="#"> <i class="fa fa-facebook"></i> </Link>
                            </li>
                            <li>
                                <Link to="#"> <i class="fa fa-twitter"></i> </Link>
                            </li>
                            <li>
                                <Link to="#"> <i class="fa fa-pinterest-p"></i> </Link>
                            </li>
                            <li>
                                <Link to="#"> <i class="fa fa-dribbble"></i> </Link>
                            </li>
                            <li>
                                <Link to="#"> <i class="fa fa-vimeo"></i> </Link>
                            </li>
                            <li>
                                <Link to="#"> <i class="fa fa-linkedin"></i> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col-md-5">
                    <div class="about-content">
                        <h6 class="mb-2">about us</h6>
                        <p>We attract your potential buyers from search and turn them intoyour customers. Qolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibham liber tempor cum soluta nobis eleifend option. sed diam nonummy nibham liber tempor cum soluta nobis eleifend option.</p>
                    </div>
                </div>
                <div class="col-md-7">
                    <h6 class="mb-2">Usefull Links</h6>
                    <div class="usefull-link">
                        <div class="row">
                            <div class="col-md-4">
                                <ul>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> SEO Services </Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Social Media</Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Web Analytics</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Web Development </Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Content Management</Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Blog Management</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Virtual Marketing </Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Email Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <i class="fa fa-angle-right"></i> Keyword Analytics </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-8">
                <div class="col-md-4 mb-3">
                    <div class="contact-box">
                        <div class="contact-icon">
                            <i class="ti-direction-alt"></i>
                        </div>
                        <div class="contact-info">
                            <h5>25, King St. 20170</h5>
                            <span>Melbourne Australia</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="contact-box">
                        <div class="contact-icon">
                            <i class="ti-headphone-alt"></i>
                        </div>
                        <div class="contact-info">
                            <h5>0011 234 56789</h5>
                            <span>Mon-Fri 8:30am-6:30pm</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-box">
                        <div class="contact-icon">
                            <i class="ti-email"></i>
                        </div>
                        <div class="contact-info">
                            <h5>info@yoursite.com</h5>
                            <span>24 X 7 online support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright mt-6">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ul class="list-inline text-left">
                           <li><Link to="#">Terms & Conditions </Link> &nbsp;&nbsp;&nbsp;|</li>
                           <li><Link to="#">API Use Policy </Link> &nbsp;&nbsp;&nbsp;|</li>
                           <li><Link to="#">Privacy Policy </Link> &nbsp;&nbsp;&nbsp;|</li>
                           <li><Link to="#">Cookies </Link></li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="text-right">
                            <p>Copyright © 2017 SEO Solution. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>        
    </>
  )
}
