import React from 'react';
import './CreateDate.css';

export default function CreateDate() {
  return (
    <div className='create-date'>
      <div className='create-date-container'>
        <div className='create-date-container-title'>Enter your choices</div>
        <div className='create-date-container-inputs'>
          <div className='create-date-input-container'>
            <label htmlFor='cuisine1'>Cuisine</label>
            <input type='text' id='cuisine1' name='cuisine1' placeholder='Enter cuisine' />
          </div>
          <div className='create-date-input-container'>
            <label htmlFor='dish1'>Dish</label>
            <input type='text' id='dish1' name='dish1' placeholder='Enter dish' />
          </div>
        </div>
      </div>
      <div className='create-date-container'>
        <div className='create-date-container-title'>Enter your partner's choices</div>
        <div className='create-date-container-inputs'>
          <div className='create-date-input-container'>
            <label htmlFor='cuisine2'>Cuisine</label>
            <input type='text' id='cuisine2' name='cuisine2' placeholder='Enter cuisine' />
          </div>
          <div className='create-date-input-container'>
            <label htmlFor='dish2'>Dish</label>
            <input type='text' id='dish2' name='dish2' placeholder='Enter dish' />
          </div>
        </div>
      </div>
      <div className='create-btn-container'>
        <button className='create-btn'>Show Restaurants</button>
      </div>
    </div>
  );
}
