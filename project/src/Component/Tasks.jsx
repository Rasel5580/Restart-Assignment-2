import React from "react";

const Tasks = ({ viewTicket, count, setCount }) => {
  console.log(viewTicket);
  const Complete = () => {
    const value = count + 1;
    setCount(value);
  };
  return (
    <div>
      <h1 className="mb-5">Task Status</h1>
      {viewTicket.map((ticket) => (
        <div className="flex-1 mx-auto ml-5 items-center">
          <div className="w-72 items-center text-center rounded-md inset-shadow-2xs shadow-2xl px-3 py-4 mb-7">
            <h1 className="text-[18px] mb-4">{ticket.title}</h1>
            <button
              onClick={() => Complete()}
              className="btn bg-[#02A53B] w-full h-10"
            >
              Complete
            </button>
          </div>
          <h1 className="mb-5">Resolve Task</h1>
          <div className="w-72 items-center text-center rounded-md inset-shadow-2xs shadow-2xl px-3 py-4">
            <h1 className="text-[18px] mb-4"> Incorrect Billing Address</h1>
            <button type="button" className="btn bg-[#02A53B] w-full h-10">
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
