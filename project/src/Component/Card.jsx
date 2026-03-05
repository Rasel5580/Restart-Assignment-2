import React from "react";

const Card = ({count}) => {
  return (
    <div>
      <div className="md:max-w-290 mx-auto md:flex justify-between text-white gap-8 mt-10">
        <div
          className="border-2 w-full md:max-h-220 rounded-2xl md:p-20 p-8 bg-linear-to-br from bg-purple-800 to-purple-400
        "
        >
          <p
            className="text-xl mb-2
                    "
          >
            In-Progress
          </p>
          <p className="text-4xl font-semibold">{ count}</p>
        </div>
        <div className="border-2 md:max-h-220 w-full rounded-2xl md:p-20 p-8 bg-linear-to-tr from bg-green-300 to-green-700">
          <p
            className="text-xl mb-2
                    "
          >
            Resolved
          </p>
          <p className="text-4xl font-semibold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
