import "./App.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Tickets from "./Component/Tickets";
import { Suspense } from "react";
import Ticket_Task from "./Component/Ticket_Task";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const TicketsPromise = fetchTickets();
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Ticket_Task TicketsPromise={TicketsPromise}></Ticket_Task>
      </Suspense>
    </>
  );
}

export default App;
