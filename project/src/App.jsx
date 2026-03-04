import "./App.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Tickets from "./Component/Tickets";
import { Suspense } from "react";

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
        <Tickets TicketsPromise={TicketsPromise}></Tickets>
      </Suspense>
    </>
  );
}

export default App;
