const Tasks = ({
  viewTicket,
  setViewTicket,
  showResolved,
  setShowResolved,
  countResolve,
  setCountResolve,
  countProgress,
  setCountProgress,
}) => {
  const handleResolve = (ticket) => {
    const resolveValue = countResolve + 1;
    const progressValue = countProgress - 1;
    setCountProgress(progressValue);
    setCountResolve(resolveValue);
    //console.log(ticket);

    const resolvedUpdate = [...showResolved, ticket];
    setShowResolved(resolvedUpdate);

    const remaining = viewTicket.filter((task) => task.id !== ticket.id);
    setViewTicket(remaining);
  };
  return (
    <div className="w-fit">
      <h1 className="mb-1 ml-5">Task Status</h1>
      <p className="text-sm ml-5 mb-4 opacity-70">
        Select a ticket to add to Task Status
      </p>

      {viewTicket.map((ticket, index) => (
        <div key={index} className="mx-auto ml-5 mb-7">
          <div className="w-72 text-center rounded-md shadow-2xl px-3 py-4">
            <h1 className="text-[18px] mb-4">{ticket.title}</h1>
            <button
              onClick={() => handleResolve(ticket)}
              className="btn bg-[#02A53B] w-full h-10"
            >
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
