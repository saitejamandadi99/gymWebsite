import './index.css';

const AboutUs = () => (
    <section id='about-us'>
        <div className='aboutUsPage'>
    
    <section className='section'>
      <h2>Welcome to Gym Fluencer</h2>
      <p>At Gym Fluencer, we believe fitness is for everyone. Whether you're just starting your journey or you're a seasoned athlete, we provide the best facilities, expert trainers, and a supportive environment to help you reach your goals.</p>
    </section>

    
    <section className='section'>
      <h2>Our Mission</h2>
      <p>Our mission is to empower individuals to lead healthier, stronger, and more active lives. We focus on providing top-notch facilities, customized training, and a community of support to help you achieve your fitness goals.</p>
    </section>

    
    <section className='section'>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Community:</strong> A supportive space for everyone to grow.</li>
        <li><strong>Excellence:</strong> High standards in training, equipment, and service.</li>
        <li><strong>Integrity:</strong> We maintain honesty and transparency with our members.</li>
        <li><strong>Motivation:</strong> Always inspiring and pushing you to achieve your potential.</li>
      </ul>
    </section>

    {/* Our Facilities and Services */}
    <section className='section'>
      <h2>Our Facilities and Services</h2>
      <p>We offer state-of-the-art gym equipment, group fitness classes, personal training, and wellness programs to meet every member's needs. Whether you're looking for strength training, cardio workouts, or yoga, we’ve got you covered.</p>
      <ul>
        <li><strong>Gym Equipment:</strong> Fully equipped for every workout.</li>
        <li><strong>Group Classes:</strong> Yoga, HIIT, cycling, and more.</li>
        <li><strong>Personal Training:</strong> Tailored fitness plans from certified trainers.</li>
        <li><strong>Wellness Programs:</strong> Nutrition counseling, mindfulness, and recovery sessions.</li>
      </ul>
    </section>

    {/* Meet the Team */}
    <section className='section'>
      <h2>Meet the Team</h2>
      <p>Our team consists of passionate, experienced professionals who are dedicated to helping you succeed. Meet the experts who will guide you on your fitness journey:</p>
      <div className='team'>
        <div className='teamMember'>
          <img src='team1.jpg' alt='Trainer 1'/>
          <h3>John Doe</h3>
          <p>Certified Personal Trainer</p>
        </div>
        <div className='teamMember'>
          <img src='team2.jpg' alt='Trainer 2'/>
          <h3>Jane Smith</h3>
          <p>Yoga Instructor</p>
        </div>
        <div className='teamMember'>
          <img src='team3.jpg' alt='Trainer 3'/>
          <h3>Mark Davis</h3>
          <p>Nutrition Specialist</p>
        </div>
      </div>
    </section>

    {/* Our Success Stories */}
    <section className='section'>
      <h2>Our Success Stories</h2>
      <p>Our members' success is our success. Here are just a few of the inspiring stories that highlight the power of fitness:</p>
      <div className='successStories'>
        <div className='story'>
          <img src='before-after1.jpg' alt='Success Story 1'/>
          <p>"I lost 20 lbs and gained a newfound confidence!" - Lisa</p>
        </div>
        <div className='story'>
          <img src='before-after2.jpg' alt='Success Story 2'/>
          <p>"Training at Gym Fluencer helped me build strength and improve my mental well-being." - Tom</p>
        </div>
      </div>
    </section>

    
    <section className='section'>
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Expert Trainers:</strong> Certified professionals who are passionate about helping you succeed.</li>
        <li><strong>State-of-the-Art Equipment:</strong> Our gym is equipped with the latest and best fitness technology.</li>
        <li><strong>Flexible Membership Options:</strong> Choose a plan that fits your goals and budget.</li>
        <li><strong>Community Support:</strong> We foster a motivating and inclusive environment.</li>
      </ul>
    </section>

   
    <section className='section'>
      <h2>Our Community and Culture</h2>
      <p>We believe in building a community where everyone feels supported and motivated. Whether you're working towards your first fitness goal or you're an advanced athlete, we’re here for you.</p>
      <p>At [Gym Name], we celebrate achievements big and small, and we encourage members to inspire each other every day. Join us and be part of a fitness culture that’s more than just about physical strength – it's about mental resilience, support, and growth.</p>
    </section>
  </div>
    </section>
  
);

export default AboutUs;
    