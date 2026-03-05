import React, { use } from "react";
import Tickets from "./Tickets";

const Ticket_Task = ({ TicketsPromise }) => {
  const tickets = use(TicketsPromise);
  return (
    <div className="flex max-w-290 text-xl font-semibold text-start mt-20">
      <div>
        <h1 className="">Customers Tickets</h1>

        <div className=" flex-3 grid grid-cols-2 gap-3">
          {tickets.map((ticket) => (
            <Tickets ticket={ticket}></Tickets>
          ))}
        </div>
          </div>
          
      <div className="flex-1 mx-auto ml-3 items-center">
              <h1 className="mb-4">Task Status</h1>
              
          <div className="w-72 items-center text-center rounded-md inset-shadow-2xs shadow-2xl px-3 py-3 mb-4">
            <h1 className="text-[18px] mb-2">Payment Failed - Card Declined</h1>
            <button className="btn bg-[#02A53B] w-full h-10">Complete</button>
          </div>
          <div className="w-72 items-center text-center rounded-md inset-shadow-2xs shadow-2xl px-3 py-3">
            <h1 className="text-[18px] mb-2"> Incorrect Billing Address</h1>
            <button className="btn bg-[#02A53B] w-full h-10">Complete</button>
          </div>
          </div>
         
      </div>
  );
};

export default Ticket_Task;
