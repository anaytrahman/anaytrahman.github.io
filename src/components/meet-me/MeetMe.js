import myPic1 from './../../assets/images/ar.jpg';
// import './../../assets/styles/Styles.css';
 import './../../assets/styles/Styles.scss';
const MeetMe = () => {
    return (
      <>
           <h2 className="center">About Me</h2>
            <div className="details-section shado-effect">
                <div className="dp-img-wrapper">
                    <img id="my-pic" src={myPic1} alt="img" width="" />
                </div>

                <div className="personal-details-wrapper ">
                    <div className="intro">
                     
                        <h2 className="name text-center-res ">ANAYT RAHMAN</h2>
                        <h4 className="education text-center clr-effect-text"> JUNIOR UI/UX DEVELOPER</h4>
                        <p className="about text-center-res">I am working with technologies like <strong>ReactJS</strong>, Angular,  <strong>JavaScript</strong>,  <strong>HTML5</strong>,  <strong>CSS3</strong>, <strong>Bootstrap</strong>, <strong> Material-Ui </strong>
                         and also tools below:
                            Visual Studio, Notepad++, Photoshop</p>
                    </div>
                    <div className="contact-wrapper ">
                        {/* <!--<p classname="contact"><i className="fas fa-calendar-alt contct-icon"></i> 09th February, 1992</p>--> */}
                        <p className="contact"><i className="fas fa-phone-alt contct-icon"></i> 91 9631227199 </p>
                        <a href="mailto:anaytrahman786@gmail.com" className="contact"><i className="far fa-envelope contct-icon"></i> anaytrahman786@gmail.com  </a>
                        <a className="contact" href="https://www.webtechpie.com" target="_blank"><i className="fas fa-home contct-icon"></i>webtechpie.com</a>
                        <div className="social">
                            <a className="socl-link fb" href="https://www.facebook.com/anaytrahman0" target="_blank"><i className="fab fa-facebook-f socl-icon "></i></a>
                            
                            <a className="socl-link twiter" href="https://twitter.com/imAnayt?s=09" target="_blank"><i className="fab fa-twitter socl-icon"></i></a>
                            <a className="socl-link linkedin" href="https://www.linkedin.com/in/anaytrahman" target="_blank"><i className="fab fa-linkedin socl-icon"></i></a>
                            <a className="socl-link insta" href="https://www.instagram.com/anayt.rahman/" target="_blank"><i className="fab fa-instagram-square socl-icon"></i></a>
                            <a className="socl-link github" href="https://www.instagram.com/anayt.rahman/" target="_blank"><i class="fab fa-github"></i></a>
                        </div>
                    </div>

                </div>
            </div>
</>
    )
}

export default MeetMe;