import React from 'react'
import {Link, Outlet} from "react-router-dom";
  
export default function Header() {
  return (
    <>
     {/* <div id="loading">
      <div id="loading-center">
          <img src="images/loader.gif" alt="" />
     </div>
    </div> */}

   <header id="header" className="default">
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="topbar-left text-center text-md-left">
                            <ul className="list-inline">
                                <li> <i className="ti-location-pin"> </i> Manhattan, New York</li>
                                <li> <i className="ti-headphone-alt"></i>+1 234 56789</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="topbar-right text-center text-md-right">
                            <ul className="list-inline">
                                <li><Link to="#"> Check your rankings anytime anywhere </Link> </li>
                                <li><Link to="#"> Register for FREE!</Link></li>
                                <li><Link to="#"> Support & FAQ</Link></li>
                                <li><Link to="#">Login </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="menu">
            <nav id="menu" className="mega-menu">
                <section className="menu-list-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="menu-logo">
                                    <li>
                                        <Link to="Home"><img id="logo_img" src="images/logo-dark.png" alt="logo" /> </Link>
                                    </li>
                                </ul>
                               <ul className="menu-links">
                                    <li><Link to="Home"> Home <i className="fa fa-angle-down fa-indicator"></i></Link>
                                    </li>
                                    <li><Link to="#"> services <i className="fa fa-angle-down fa-indicator"></i></Link>
                                        <ul className="drop-down-multilevel">
                                            <li><Link to="service-list-01.html">Service list 01 </Link></li>
                                            <li><Link to="service-list-02.html">Service list 02</Link></li>
                                            <li><Link to="analytics-services.html">Analytics Services</Link></li>
                                            <li><Link to="off-page-optimization.html">Off Page Optimization</Link></li>
                                            <li><Link to="boost-your-conversion-rate.html">Boost Your Conversion Rate</Link></li>
                                            <li><Link to="search-engine-optimize.html">Search Engine Optimize</Link></li>
                                            <li><Link to="social-media-marketing.html">Social Media Marketing</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Pages <i className="fa fa-angle-down fa-indicator"></i></Link>
                                        <div className="drop-down menu-bg grid-col-12">
                                            <div className="grid-row">
                                                <div className="grid-col-3">
                                                   <h4>pages</h4>
                                                    <ul>
                                                        <li><Link to="about-01.html">About us 01 </Link></li>
                                                        <li><Link to="about-02.html">About us 02</Link></li>
                                                        <li><Link to="faq.html">faq</Link></li>
                                                        <li><Link to="login.html">login</Link></li>
                                                        <li><Link to="register.html">register</Link></li>
                                                        <li><Link to="our-clients.html">our clients</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="grid-col-3">
                                                <h4>pages</h4>
                                                    <ul>
                                                        <li><Link to="team.html">team</Link></li>
                                                        <li><Link to="team-single.html">team single</Link></li>
                                                        <li><Link to="error-404.html">error 404</Link></li>
                                                        <li><Link to="contact-single-office.html">contact single offices</Link></li>
                                                        <li><Link to="contact-multiple-offices.html">contact multiple offices</Link></li>
                                                        <li><Link to="free-seo-analysis.html">free-seo-analysis</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="grid-col-3">
                                                <h4>elements</h4>
                                                    <ul>
                                                        <li><Link to="under-constraction.html">Under constraction</Link></li>
                                                        <li><Link to="accordion.html">Accordion</Link></li>
                                                        <li><Link to="typography.html">Typography</Link></li>
                                                        <li><Link to="buttons.html">Buttons</Link></li>
                                                        <li><Link to="pricing-tables.html">Pricing Tables</Link></li>
                                                        <li><Link to="tab.html">Tab</Link></li>
                                                    </ul>
                                                </div>
                                               <div className="grid-col-3">
                                                <h4>page title</h4>
                                                    <ul>
                                                        <li><Link to="page-title-image.html">page title image</Link></li>
                                                        <li><Link to="page-title-dark-image.html">page title dark image</Link></li>
                                                        <li><Link to="page-title-dark.html">page title dark</Link></li>
                                                        <li><Link to="page-title-light.html">page title light</Link></li>
                                                        <li><Link to="page-title-fixed.html">page title fixed</Link></li>
                                                        <li><Link to="page-title-parallax.html">page title parallax</Link></li>
                                                      </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="#">blog <i className="fa fa-angle-down fa-indicator"></i></Link>
                                        <ul className="drop-down-multilevel">
                                            <li><Link to="blog-left-sidebar.html">Blog left sidebar</Link></li>
                                            <li><Link to="blog-right-sidebar.html">Blog right sidebar</Link></li>
                                            <li><Link to="blog-fullwidth.html">Blog fullwidth</Link></li>
                                            <li><Link to="blog-masonry-2-columns.html">Blog masonry 2 columns</Link></li>
                                            <li><Link to="blog-masonry-3-columns.html">Blog masonry 3 columns</Link></li>
                                            <li><Link to="blog-masonry-4-columns.html">Blog masonry 4 columns</Link></li>
                                            <li><Link to="#">Blog single <i className="fa fa-angle-right fa-indicator"></i></Link>
                                                <ul className="drop-down-multilevel">
                                                    <li><Link to="blog-single-image-post.html">blog single image post</Link></li>
                                                    <li><Link to="blog-single-blockquote-post.html">blog single blockquote post</Link></li>
                                                    <li><Link to="blog-single-video-post.html">blog single video post</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Case Studies <i className="fa fa-angle-down fa-indicator"></i></Link>
                                        <ul className="drop-down-multilevel">
                                            <li><Link to="case-studies-2-columns.html">case studies 2 columns</Link></li>
                                            <li><Link to="case-studies-3-columns.html">case studies 3 columns</Link></li>
                                            <li><Link to="case-studies-4-columns.html">case studies 4 columns</Link></li>
                                            <li><Link to="case-studies-filter.html">case studies filter</Link></li>
                                            <li><Link to="case-studies-full-screen.html">case studies full screen</Link></li>
                                            <li><Link to="case-studies-single.html">case studies single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#"> Shop <i className="fa fa-angle-down fa-indicator"></i> </Link>
                                        <ul className="drop-down-multilevel">
                                            <li><Link to="shop.html">Shop</Link></li>
                                            <li><Link to="shop-single.html">Shop Single</Link></li>
                                        </ul>
                                    </li>
                                    <li className="active"><Link to="Contact"> Contact us </Link>
                                    </li>
                                    <li>
                                        <div className="search-button">
                                            <Link className="search-trigger" to="#search"> <span></span></Link>
                                        </div>
                                    </li>
                                    <li className="side-menu-main">
                                        <div className="side-menu">
                                            <div className="mobile-nav-button">
                                                <div className="mobile-nav-button-line"></div>
                                                <div className="mobile-nav-button-line"></div>
                                                <div className="mobile-nav-button-line"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        </div>
    </header> 
        <Outlet />

        <div className="search-overlay"></div>
        <div className="menu-overlay"></div>
        <div id="search" className="search header transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input type="search" placeholder="Type and hit enter..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="side-content" id="scrollbar">
            <div className="side-content-info">
                <div className="menu-toggle-hamburger menu-close"><span className="ti-close"> </span></div>
                <div className="side-logo">
                    <img className="img-fluid mb-3" src="images/logo.png" alt="Shree Ram Sena" />
                    <p>Culpa molestias mollitia natus labore perspiciatis ipsa lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aut explicabo mollitia, sed, eos, magni quos laborum dolores ab distinctio voluptates quae ipsam.</p>
                    <hr className="mt-2 mb-3" />
                </div>
                <div className="contact-address">
                    <div className="address-title mb-3">
                        <h4 className="mb-1">Office 01</h4>
                        <p>mollitia omnis fuga, nihil suscipit lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sit quos.</p>
                    </div>
                    <div className="contact-box mb-2">
                        <div className="contact-icon">
                            <i className="ti-direction-alt text-blue"></i>
                        </div>
                        <div className="contact-info">
                            <div className="text-left">
                                <h6>25, King St. 20170</h6>
                                <span>Melbourne Australia</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box mb-2">
                        <div className="contact-icon">
                            <i className="ti-headphone-alt text-blue"></i>
                        </div>
                        <div className="contact-info">
                            <div className="text-left">
                                <h6>0011 234 56789</h6>
                                <span>Mon-Fri 8:30am-6:30pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box mb-2">
                        <div className="contact-icon">
                            <i className="ti-email text-blue"></i>
                        </div>
                        <div className="contact-info">
                            <div className="text-left">
                                <h6>info@yoursite.com</h6>
                                <span>24 X 7 online support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-content-image">
                <img className="img-fluid center-block" src="images/logo.png" alt="Shree Ram Sena" />
            </div>
        </div>
        
    </>
  )
}
