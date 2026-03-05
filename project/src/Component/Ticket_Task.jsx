import React, { use, useState } from "react";
import Tickets from "./Tickets";
import Tasks from "./Tasks";

const Ticket_Task = ({ TicketsPromise, count, setCount }) => {
  const tickets = use(TicketsPromise);

  const [viewTicket, setViewTicket] = useState([]);
  //console.log(viewTicket);

  return (
    <div className="md:flex max-w-290 mx-auto text-xl font-semibold text-start mt-20">
      <div>
        <h1 className="">Customers Tickets</h1>

        <div className=" md:flex-3 grid md:grid-cols-2 gap-3">
          {tickets.map((ticket) => (
            <Tickets
              key={ticket.id}
              viewTicket={viewTicket}
              setViewTicket={setViewTicket}
              ticket={ticket}
            ></Tickets>
          ))}
        </div>
      </div>
      <div>
        {
          <Tasks
            count={count}
            setCount={setCount}
            viewTicket={viewTicket}
          ></Tasks>
        }
      </div>
    </div>
  );
};

export default Ticket_Task;
