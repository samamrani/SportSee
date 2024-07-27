import React from 'react';
import logo from '../assets/icon_footer/icon_biking.png';
import logo1 from '../assets/icon_footer/icon_swimming.png';
import logo2 from '../assets/icon_footer/icon_weightLifting.png';
import logo3 from '../assets/icon_footer/icon_yoga.png';
import '../styles/main.scss';

const icons = [

  { src: logo3, alt: 'Yoga Icon' },
  { src: logo2, alt: 'Weight Lifting Icon' },
  { src: logo1, alt: 'Swimming Icon' },
  { src: logo, alt: 'Biking Icon' },

];

function Footer() {
  return (
    <footer>
      <div className='footer'>
      {icons.map((icon, index) => (
        <button key={index} className="icon-img">
          <img src={icon.src} alt={icon.alt} className="icon-img-logo" />
        </button>
      ))}
      <p className="copyright">Copyright, SportSee 2020</p>
   
      </div>
    </footer>

  );

}

export default Footer;
