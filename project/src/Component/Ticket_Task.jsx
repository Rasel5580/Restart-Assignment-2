import React, { use, useState } from "react";
import Tickets from "./Tickets";
import Tasks from "./Tasks";
import ResolveTask from "./ResolveTask";

const Ticket_Task = ({
  TicketsPromise,
  countProgress,
  setCountProgress,
  countResolve,
  setCountResolve,
}) => {
  const tickets = use(TicketsPromise);

  const [viewTicket, setViewTicket] = useState([]);
  const [showResolved, setShowResolved] = useState([]);
  //console.log(showResolved);

  return (
    <div className="md:flex max-w-290 mx-auto text-xl font-semibold text-start mt-20">
      <div>
        <h1 className="">Customers Tickets</h1>

        <div className=" md:flex-2 max-w-220 grid md:grid-cols-2 gap-3">
          {tickets.map((ticket) => (
            <Tickets
              key={ticket.id}
              showResolved={showResolved}
              setShowResolved={setShowResolved}
              countProgress={countProgress}
              setCountProgress={setCountProgress}
              viewTicket={viewTicket}
              setViewTicket={setViewTicket}
              ticket={ticket}
            ></Tickets>
          ))}
        </div>
      </div>
      <div>
        <Tasks
          countProgress={countProgress}
          setCountProgress={setCountProgress}
          countResolve={countResolve}
          setCountResolve={setCountResolve}
          viewTicket={viewTicket}
          setViewTicket={setViewTicket}
          showResolved={showResolved}
          setShowResolved={setShowResolved}
        ></Tasks>

        <ResolveTask showResolved={showResolved}></ResolveTask>
      </div>
    </div>
  );
};

export default Ticket_Task;
