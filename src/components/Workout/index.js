
import React from 'react';
import './index.css';  


const Workout = () => {
  return (
    <div className="workout-container">
      <div className="workout-card">
        <img src='' alt="Strength Training" className="workout-image" />
        <h3>Strength Training</h3>
        <p>Build muscle, increase strength, and improve overall fitness with our strength training program.</p>
      </div>

      <div className="workout-card">
        <img src='' alt="Weight Loss" className="workout-image" />
        <h3>Weight Loss</h3>
        <p>Achieve your weight loss goals with a combination of cardio, strength training, and expert guidance.</p>
      </div>

      <div className="workout-card">
        <img src='' alt="Physical Fitness" className="workout-image" />
        <h3>Physical Fitness</h3>
        <p>Improve your overall health with a balanced approach to fitness, including cardio, flexibility, and strength.</p>
      </div>
    </div>
  );
};

export default Workout;
