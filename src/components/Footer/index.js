import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './index.css'

const Footer = () =>(
    <div className="footerContainer">
        <div className='socialMediaContainer'>
           <TbBrandFacebookFilled size='30' className="socialMediaLogo" />
            <FaTwitter size='30' className="socialMediaLogo" />
            <FaInstagram size='30' className="socialMediaLogo" />
            <FaYoutube size='30' className="socialMediaLogo" />



        </div>
        <p>Gym Fluencer @ all the rights are acquired by gym Fluencer</p>
    </div>
)

export default Footer