import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './index.css';

const Footer = () => (
  <div className="footerContainer">
    <div className='socialMediaContainer'>
      <TbBrandFacebookFilled size='30' className="socialMediaLogo" />
      <FaTwitter size='30' className="socialMediaLogo" />
      <FaInstagram size='30' className="socialMediaLogo" />
      <FaYoutube size='30' className="socialMediaLogo" />
    </div>
    <p>Gym Fluencer @ All rights are acquired by Gym Fluencer</p>
    <p>Empowering you to reach your fitness goals with expert training and motivation.</p>
  </div>
);

export default Footer;
