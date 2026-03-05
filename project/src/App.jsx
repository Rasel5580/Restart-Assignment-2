import "./App.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import { Suspense, useState } from "react";
import Ticket_Task from "./Component/Ticket_Task";
import Footer from "./Component/Footer";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const TicketsPromise = fetchTickets();
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Card count={count}></Card>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Ticket_Task
          count={count}
          setCount={setCount}
          TicketsPromise={TicketsPromise}
        ></Ticket_Task>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
