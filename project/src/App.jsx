import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import { Suspense, useState } from "react";
import Ticket_Task from "./Component/Ticket_Task";
import Footer from "./Component/Footer";

const fetchTickets = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}tickets.json`);
  return res.json();
};

const TicketsPromise = fetchTickets();
function App() {
  const [countProgress, setCountProgress] = useState(0);
  const [countResolve, setCountResolve] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Card countProgress={countProgress} countResolve={countResolve}></Card>
      <Suspense
        fallback={
          <div className="flex justify-center mt-8">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Ticket_Task
          countResolve={countResolve}
          setCountResolve={setCountResolve}
          countProgress={countProgress}
          setCountProgress={setCountProgress}
          TicketsPromise={TicketsPromise}
        ></Ticket_Task>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
