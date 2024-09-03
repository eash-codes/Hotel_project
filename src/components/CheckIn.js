import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Correct import for DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Ensure this path is correct
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs'; // Make sure you have react-icons installed

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false); 

  return (
    <div className='relative flex items-center justify-end h-full'>
      {/* Icon */}
      <div className='absolute z-10 pr-8'>
      <div>
        <BsCalendar className='text-accent text-base' />
      </div>
    </div>
      {/* DatePicker component */}
      <DatePicker
        className='w-full h-full pl-10' 
        selected={startDate}
        placeholderText='Check in'
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};
export default CheckIn;
