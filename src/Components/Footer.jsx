import './Footer.css';
import linkedinIcon from '../Images/linkedinIcon.png';
import instaIcon from '../Images/instaIcon.png';
import './hyperlinks.js'
import {callInstagram,callLinkedIn} from './hyperlinks.js';


function Footer() {
  return (
    <div className='main-footer md:mb-12 lg:mb-0' id="contact">
      <div className='footer-left sm:mb-0 xsm:mb-16'>
        <h1 class="footer-title-main">
          Wish to sponsor us?
        </h1><br></br>
        <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-5 m-1 rounded-full">
          <h2 class='footer-title-sub'>Get in touch</h2>
        </button>

      </div>
      <div className='footer-right sm:mb-0 xsm:mb-16 xsm:content-center place-content-center'>
        <h1 class='footer-title-main' id='ContactUs'>
          Follow us now
        </h1><br></br>
        <button class='px-2 float-right' onClick={callInstagram} ><img src={instaIcon}></img></button>
        <button class='px-2 float-right' onClick={callLinkedIn}><img src={linkedinIcon}></img></button>
      </div>
    </div>
  )
}

export default Footer
