import DateIcon from "../assets/calendar-regular.png";

const Tickets = ({ ticket, viewTicket, setViewTicket }) => {
  const handle = (e) => {
    e.preventDefault();
    //console.log(ticket);
    setViewTicket([...viewTicket, ticket]);
  };
  return (
    <div>
      <a onClick={(e) => handle(e, ticket)} href="">
        <div className="mt-5 px-3 py-3 w-full h-full mx-auto inset-shadow-2xs shadow-2xl rounded-lg shadow-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-md font-semibold">{ticket.title}</h1>
            <h1
              className={`text-sm flex items-center gap-2 whitespace-nowrap ${
                ticket.status === "Open" ? "bg-green-200" : "bg-amber-200"
              } rounded-full px-2 py-1`}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  ticket.status === "Open" ? "bg-green-500" : "bg-amber-500"
                }`}
              ></span>
              {ticket.status}
            </h1>
          </div>
          <p className="text-start text-sm">{ticket.description}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <span className="text-sm font-semibold mr-3 text-gray-600">
                #{ticket.id}
              </span>
              <span
                className={`text-sm ${ticket.priority === "High" ? "text-red-600" : ticket.priority === "Medium" ? "text-amber-500" : "text-green-500"}`}
              >
                {ticket.priority}
              </span>
            </div>
            <div className="items-center flex">
              <span className="text-sm font-semibold text-gray-600">
                {ticket.customer}
              </span>
              <span className="text-sm ml-4 font-semibold flex items-center text-gray-600">
                <img className="w-5" src={DateIcon} alt="" />
                {ticket.date}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Tickets;
