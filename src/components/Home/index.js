import Header from '../Header'
import Footer from '../Footer'
import Workout from '../Workout'
import Pricing from '../Pricing'
import AboutUs from '../AboutUs'
import './index.css'

const Home = () =>(
    <section id = 'home'>
    <Header />
    <div className='homeContainer'>
        <div class="hero-section">
            <h1>Transform Your Body, Transform Your Life</h1>
            <p>Join us and unlock your fitness potential with personalized training, expert coaches, and a supportive community.</p>
            <button type="button" class="cta-button">Get Started Now</button>
        </div>
    <Workout />
    <Pricing />
    <AboutUs />
    </div>
    <Footer />
    </section>
    
)

export default Home