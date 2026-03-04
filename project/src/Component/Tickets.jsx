import React, { use } from "react";
import MoreTickets from "./MoreTickets";

const Tickets = ({ TicketsPromise }) => {
  const tickets = use(TicketsPromise);
  console.log(tickets);
  return (
    <div>
      <h1 className="text-xl font-semibold text-start mt-20">
        Customers Tickets
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {tickets.map((ticket) => (
          <div className="mt-5 px-3 py-3 mx-auto w-full mx-auto inset-shadow-2xs shadow-2xl rounded-lg shadow-gray-300">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-semibold">{ticket.title}</h1>
              <h1
                className={`text-sm ${ticket.status === "Open" ? "bg-green-300" : "bg-amber-200"} rounded-full px-3`}
              >
                {ticket.status}
              </h1>
            </div>

            <p className="text-start">{ticket.description}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="">
                <span className="text-sm font-semibold mr-3 text-gray-600">
                  #{ticket.id}
                </span>
                <span
                  className={`font-semibold ${ticket.priority === "High" ? "text-red-600" : ticket.priority === "Medium" ? "text-amber-500" : "text-green-500"}`}
                >
                  {ticket.priority}
                </span>
              </div>
              <div className="items-center">
                <span className="text-md font-semibold text-gray-600">
                  {ticket.customer}
                </span>
                <span className="text-md ml-3 font-semibold text-gray-600">
                  {ticket.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
