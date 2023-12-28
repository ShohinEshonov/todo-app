import React from 'react';
import { FaCheck } from "react-icons/fa";

const Check = ({ isCompleted }) => {
  return (
    <div className={`border-2 rounded-full border-yellow-200 ${isCompleted ? 'bg-pink-400':''} w-7 h-7 mr-4`}>
      {isCompleted && <FaCheck size={23} className="text-gray-900" />}
    </div>
  );
};

export default Check;
