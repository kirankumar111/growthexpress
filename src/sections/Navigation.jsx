import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'HOME'
    };
  }
    renderLander() {
    return (
      <header>
        <nav id='cssmenu' className="white-nav-top">
            <div className="logo"><a href="index.html"><img src="img/logo/logo.png" className="img-fluid" alt="logo" /> </a></div>
            <div id="head-mobile"></div>
            <div className="button"></div>
            <ul>
                <li className='active'><a href="#home">HOME</a></li>
                <li><a href='#about' >ABOUT</a></li>
                <li><a href='#team'>Team</a></li>
                <li><a href='#services'>Services</a>
                    <ul>
                        <li><a href='#'>One To One Coaching & Mentoring</a>
                            <ul>
                                <li><a href='https://youtu.be/VVqqX8nZtaY'>Decision Making</a></li>
                                <li><a href='#'>Personality Development Program Tracker</a></li>
                            </ul>
                        </li>
                        <li><a href='https://youtu.be/CAo1vgGpSsY'>Group Coaching & Mentoring</a>
                            <ul>
                                <li><a href='https://youtube.com/playlist?list=PLuVoSBYFCdMpTKTZnO8enM-go51ne70Rn'>Personal Growth Club</a></li>
                                <li><a href='https://youtu.be/6nU00mJhSN4'>Master Mind Group</a></li>
                            </ul>
                        </li>
                        <li><a href='https://www.peakimpactmentorship.com/'>Collaborations</a>
                            <ul>
                                <li><a href='https://www.peakimpactmentorship.com/offerings/ayp/'>Ascend Your Peak Program</a></li>
                                <li><a href='https://www.peakimpactmentorship.com/offerings/cir/'>Career Impact Report</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href='#portfolio' >Portfolio</a></li>
                <li><a href='#blogs'>Articles</a></li>
                <li><a href='#contact'>CONTACT</a></li>
            </ul>
        </nav>
      </header>
    // <header>
    //     <nav id="cssmenu" className="navbar navbar-fixed-top white-nav-top">
    //       <div className="container-fluid">
    //         <div className="site-nav-wrapper">
    //           <div className="navbar-header">
    //             <span id="mobile-nav-open-btn">&#9776;</span>
    //             <a href="#home" className="navbar-brand smooth-scroll">
    //               <img src="img/logo/logo.png" alt="logo" />
    //             </a>
    //           </div>
    //           <div className="container-fluid">
    //             <div className="collapse navbar-collapse">
    //               <ul className="nav navbar-nav pull-right">
    //                 <li>
    //                   <a href="#home" className="smooth-scroll">
    //                     Home
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#about" className="smooth-scroll">
    //                     About
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#team" className="smooth-scroll">
    //                     Team
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#services" className="smooth-scroll">
    //                     Services
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#portfolio" className="smooth-scroll">
    //                     Portfolio
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#blog" className="smooth-scroll">
    //                     Blog
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#contact" className="smooth-scroll">
    //                     Contact
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#login"
    //                     data-toggle="modal"
    //                     title="Login"
    //                     className="login-btn"
    //                   >
    //                     <i className="fa fa-user"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div id="mobile-nav">
    //             <span id="mobile-nav-close-btn">&times;</span>
    //             <div id="mobile-nav-content">
    //               <ul className="nav">
    //                 <li>
    //                   <a href="#home" className="smooth-scroll">
    //                     Home
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#about" className="smooth-scroll">
    //                     About
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#team" className="smooth-scroll">
    //                     Team
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#services" className="smooth-scroll">
    //                     Services
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#portfolio" className="smooth-scroll">
    //                     Portfolio
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#blog" className="smooth-scroll">
    //                     Blog
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#contact" className="smooth-scroll">
    //                     Contact
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
    );
  }
  render() {
    return (
      <div className="NavigationDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Navigation;
