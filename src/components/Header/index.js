import './index.css';  
import logoImage from '../../imageFolder/logoImage.jpeg'; 
const Header = () => (
    <nav className='NavBarContainer'>
        <div className='logoImageContainer'>
            <img src={logoImage} alt="logoImg" className='logoImage' /> 
            <p className='logoHeading'>Gym Fluencer</p>
        </div>
        
        <ul className='navbarLink'>
            <li className='listEle'>Home</li>
            <li className='listEle'>Workout</li>
            <li className='listEle'>Diet</li>
            <li className='listEle'>Pricing</li>
            <li className='listEle'>Contact Us</li>
            <li className='listEle'>About</li>
        </ul>
    </nav>
);

export default Header;
