import './index.css';

const Header = () => (
    <nav className='NavBarContainer'>
        <h1 className='logoHeading'><a href='#home' className='anchr'>Gym <span className='spanEle'>Fluencer</span></a></h1>
        <ul className='navbarLink'>
            <li><a href="#home" className="navLink">Home</a></li>
            <li><a href="#workout" className="navLink">Workout Plans</a></li>
            <li><a href="#pricing" className="navLink">Pricing</a></li>
            <li><a href="#about-us" className="navLink">About Us</a></li>
        </ul>
    </nav>
);

export default Header;
