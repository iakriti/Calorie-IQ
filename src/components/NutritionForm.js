import React, { useState } from 'react';



const NutritionForm = (props) => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');
  const [results, setResults] = useState(null);

  const calculateBMI = (height, weight) => {
    return (weight / ((height * height) / 10000)).toFixed(2);
  };

  const calculateCalories = (gender, age, height, weight) => {
    if (gender === 'male') {
      return (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2);
    } else if (gender === 'female') {
      return (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2);
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const height = (parseInt(heightFeet) * 30.48) + (parseInt(heightInches) * 2.54);
    const bmi = calculateBMI(height, weight);
    const calories = calculateCalories(gender, age, height, weight);
    const protein = (calories * 0.15 / 4).toFixed(2); // 15% of calories, 1g protein = 4kcal
    const carbs = (calories * 0.55 / 4).toFixed(2); // 55% of calories, 1g carbs = 4kcal
    const fats = (calories * 0.30 / 9).toFixed(2); // 30% of calories, 1g fat = 9kcal

    setResults({ bmi, calories, protein, carbs, fats });
  };

  return (
    <div className='nutrition-page '>
      <div className='nutrition-form-container shadow-lg '>
        <div className='nutrition-form '>
          <form onSubmit={handleSubmit}>
            <div className='form-group '>
              <h2 className='text-center p-2' style={{ fontWeight: 'bold', color: '#402E7A' , fontFamily: 'inherit'}}>Fill the details below:</h2>
              <label htmlFor='gender'>Gender :</label>
              <div className='form-check form-check-inline my-2 mx-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='female'
                  value='female'
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='male'
                  value='male'
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <label className='form-check-label' htmlFor='male'>
                  Male
                </label>
              </div>
            </div>
            <div className=' row'>
              <div className=' col form-group'>
                      <label htmlFor='age'>Age</label>
                      <input
                        id='age'
                        type='number'
                        className='form-control'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className='col form-group'>
                      <label htmlFor='weight'>Weight (kg)</label>
                      <input
                        id='weight'
                        type='number'
                        className='form-control'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                      />
                </div>
              </div>
            <div className=' row'>
            <div className='col form-group '>
              
              <label forHtml='heightFeet'>Height (feet)</label>
              <input
                id='heightFeet'
                type='number'
                value={heightFeet}
                className='form-control'
                onChange={(e) => setHeightFeet(e.target.value)}
                required
              />
            </div>
            <div className='col form-group'>
              <label forHtml='heightInches'>Height (inches)</label>
              <input
                id='heightInches'
                type='number'
                value={heightInches}
                className='form-control'
                onChange={(e) => setHeightInches(e.target.value)}
                required
              />
            </div>
          </div>

            <button className='btn btn-primary w-100 mt-3' type='submit'>Calculate</button>
          </form>
          {results && (
            <div className='results mt-4 inline'>
              <h3 className='text-center mb-3 inline headingsty' >YOUR REPORT :</h3>
              <p>BMI: {results.bmi}</p>
              <p>Daily Calorie Needs: {results.calories} kcal</p>
              <p>Protein: {results.protein} g</p>
              <p>Carbs: {results.carbs} g</p>
              <p>Fats: {results.fats} g</p>
            </div>
          )}
        </div>
      </div>
      <div className='row ms-5'>
        <div className='col '>
          <div className='nutrition-description text-center '>
            <h1 className='headingsty'>Hi, {props.name} </h1>
            <h2 style={{ fontSize:'2.5rem', fontWeight:'bolder', color:"#E8C5E5"}}>Why we need this?</h2>
            <p style={{ fontWeight:'bolder', color:"#402E7A"}}>We collect your gender, age, height, and weight to provide you with personalized nutrition insights. By understanding your unique physical characteristics, our app accurately calculates your BMI and daily calorie needs. This information helps us offer tailored recommendations for protein, carbs, and fats intake, empowering you to make informed dietary choices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionForm;
