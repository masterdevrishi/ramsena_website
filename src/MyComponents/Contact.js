import React from 'react'
import {Link, Outlet} from "react-router-dom";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank You');
  }
  return (
    <>
 <section className="intro-title black-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-left">
                    <div className="intro-content">
                        <div className="intro-name">
                            <h3 className="text-white">Contact Multiple Office</h3>
                            <ul className="breadcrumb mt-1">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active">Contact Multiple Office</li>
                            </ul>
                        </div>
                        <div className="intro-img">
                            <img className="img-fluid" src="images/breadcrumb/02.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className="page-section-ptb pb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                
            <div className="row">
                <div className="col-md-12">
                    <div className="contact-address mb-3 white-bg">
                        <div className="address-title mb-3">
                            <h4 className="mb-1">Office 01</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sit quos mollitia omnis fuga, nihil suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="col-md-12 mb-2 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                  <i className="ti-direction-alt text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">25, KING ST. 20170</Link></h6>
                  <span className="mb-0">Melbourne Australia</span>
                </div>
              </div>
            </div>
        </div>
         <div className="row">
            <div className="col-md-12 mb-2 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                    <i className="ti-headphone-alt text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">  0011 234 56789</Link></h6>
                  <span className="mb-0">Mon-Fri 8:30am-6:30pm</span>
                </div>
              </div>
            </div>
        </div>
         <div className="row">
            <div className="col-md-12 mb-5 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                  <i className="ti-email text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">INFO@YOURSITE.COM</Link></h6>
                  <span className="mb-0">24 X 7 online support</span>
                </div>
              </div>
            </div>
        </div>


      <div className="row">  
        <div className="col-md-12">
                    <div className="contact-address white-bg mb-2">
                        <div className="address-title mb-3">
                            <h4 className="mb-1">Office 02</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sit quos mollitia omnis fuga, nihil suscipit.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
            <div className="col-md-12 mb-2 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                  <i className="ti-direction-alt text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">25, KING ST. 20170</Link></h6>
                  <span className="mb-0">Melbourne Australia</span>
                </div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-2 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                    <i className="ti-headphone-alt text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">  0011 234 56789</Link></h6>
                  <span className="mb-0">Mon-Fri 8:30am-6:30pm</span>
                </div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-5 sm-mb-1">
              <div className="d-flex">
              <div className="contact-box">
              
                <div className="contact-icon">
                  <i className="ti-email text-blue"></i>
                </div>
            </div>
                <div className="">
                  <h6><Link to="service-detail.html">INFO@YOURSITE.COM</Link></h6>
                  <span className="mb-0">24 X 7 online support</span>
                </div>
              </div>
            </div>
        </div>
   </div>

                <div className="col-lg-8">
                    <div className="contact-form-title mb-4">
                        <h4 className="mb-1">GET IN TOUCH</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong> Atque quas quidem omnis ullam qui laborum sunt, optio et? </strong>Facilis numquam praesentium, voluptatem inventore dolor aliquam, aspernatur laudantium. Modi alias, eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis doloremque, rerum obcaecati. Ipsum vitae, nobis aperiam exercitationem in adipisci repudiandae, maxime inventore debitis perspiciatis quae autem placeat. Nihil autem, eum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quas quidem omnis ullam qui laborum sunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores numquam vel repellat nulla, aliquid ratione quibusdam.</p>
                    </div>
                    <div id="formmessage" style={{display:"none"}}>Success/Error Message Goes Here</div>
                    <form onSubmit={handleSubmit} className="gray-form row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputphone" placeholder="Your Name" autofocus required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputphone1" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email Adress" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Website URL" />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control" rows="7" placeholder="Massage"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input name="submit" type="submit" value="Send Message" className="button" />
                        </div>
                    </form>
                    <div id="ajaxloader" style={{display:"none"}}><img className="center-block" src="images/form-loader.gif" alt="" /></div> 
                </div>
            </div>
        </div>
    </section>
    <Outlet />
   <section className="contact-map">
        <div className="container-fluid">
            <iframe title='Office Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.017231421863!2d-79.43780268425046!3d36.09306798010035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bae09664ccb%3A0xaa6b8f98d3fb8135!2s220+E+Front+St%2C+Burlington%2C+NC+27215%2C+USA!5e0!3m2!1sen!2sin!4v1475045272926" allowfullscreen></iframe>
        </div>
    </section>

    </>
  )
}
