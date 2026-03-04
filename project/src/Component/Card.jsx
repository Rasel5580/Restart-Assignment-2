import React from "react";

const Card = () => {
  return (
    <div>
      <div className="max-w-290 flex justify-between text-white gap-8 mt-10">
        <div className="border-2 border-gray-300 w-full max-h-220 rounded-2xl p-20 bg-linear-to-br from bg-purple-700 to-purple-300">
          <p
            className="text-xl mb-2
                    "
          >
            In-Progress
          </p>
          <p className="text-4xl font-semibold">0</p>
        </div>
        <div className="border-2 border-gray-300 max-h-220 w-full rounded-2xl p-20 bg-linear-to-tr from bg-green-300 to-green-700">
          <p
            className="text-xl mb-2
                    "
          >
            In-Progress
          </p>
          <p className="text-4xl font-semibold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
