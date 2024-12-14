import './index.css';

const Pricing = () => (
  <div className="pricingContainer">
    {/* Pro Card */}
    <div className="priceCard proCard">
      <h1>Pro</h1>
      <p>Your go-to plan for personalized fitness and online classes.</p>
      <ul>
        <li>Personalized Diet Plan</li>
        <li>Access to Gym Facilities</li>
        <li>Unlimited Access to Different Centers</li>
        <li>Personal Training Sessions (10/month)</li>
        <li>Exclusive Workout Plans</li>
        <li>Home Pass: Access to Online Classes</li>
        <li>Motivation Classes (Weekly)</li>
        <li>Yoga Classes (Weekly)</li>
      </ul>
      <div className="price">$99/month</div>
      <button className="ctaButton">Sign Up</button>
    </div>

    {/* Elite Card */}
    <div className="priceCard eliteCard">
      <h1>Elite</h1>
      <p>For the ultimate fitness experience with extra perks and priority access.</p>
      <ul>
        <li>Personalized Diet Plan</li>
        <li>Access to Gym Facilities</li>
        <li>Unlimited Access to Different Centers</li>
        <li>Personal Training Sessions (Unlimited)</li>
        <li>Exclusive Workout Plans</li>
        <li>Home Pass: Access to Online Classes</li>
        <li>Motivation Classes (Unlimited)</li>
        <li>Yoga Classes (Unlimited)</li>
        <li>Priority Access to Peak Hours</li>
        <li>Free Workshops and Classes</li>
      </ul>
      <div className="price">$149/month</div>
      <button className="ctaButton">Sign Up</button>
    </div>

    {/* Home Pass Card */}
    <div className="priceCard homePassCard">
      <h1>Home Pass</h1>
      <p>Access everything remotely — perfect for those who want to work out from home.</p>
      <ul>
        <li>Personalized Diet Plan</li>
        <li>Online Classes (Fitness, Yoga, etc.)</li>
        <li>Motivation Classes (Weekly)</li>
        <li>Yoga Classes (Weekly)</li>
        <li>Flexible Scheduling</li>
      </ul>
      <div className="price">$49/month</div>
      <button className="ctaButton">Get Started</button>
    </div>
  </div>
);

export default Pricing;
