import React from 'react';
import './index.css';  
import strengthTraining from '../../imageFolder/strengthTraining.jpg';
import weightLoss from '../../imageFolder/weightLoss.jpg';
import fitness from '../../imageFolder/fitness.jpg';

const Workout = () => {
  return (
    <section id='workout'>
      <div className="workout-container">
        <div className="workout-card">
          <img src={strengthTraining} alt="Strength Training" className="workout-image" />
          <h3>Strength Training</h3>
          <p>Build muscle, increase strength, and improve overall fitness with our strength training program. 
          Our carefully designed exercises will help you unlock your potential and achieve progressive overload.</p>
        </div>

        <div className="workout-card">
          <img src={weightLoss} alt="Weight Loss" className="workout-image" />
          <h3>Weight Loss</h3>
          <p>Achieve your weight loss goals with a balanced program that includes cardio, strength training, 
          and nutrition guidance. Stay motivated with measurable results and personalized support.</p>
        </div>

        <div className="workout-card">
          <img src={fitness} alt="Physical Fitness" className="workout-image" />
          <h3>Physical Fitness</h3>
          <p>Enhance your overall health and well-being with a fitness routine that focuses on flexibility, 
          stamina, and mental clarity. Suitable for all fitness levels and designed to keep you engaged.</p>
        </div>
      </div>
    </section>
  );
};

export default Workout;
