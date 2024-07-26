import React from "react";

// Pages
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/Dashboard";

// Layouts
import Header from "../components/layouts/Header";

// Features
import Rentals from "../features/Rentals/Rentals";
import Booking from "../features/Booking/Booking";

// Table
import { TableHero } from "../components/ui/Table";
// import TableModal from '../components/ui/TableModal';

// Tasks manager
import Tasks from "../features/TaskManager/TaskManager";

function App() {
  return (
    <div className="h-full overflow-x-hidden">
      <div className="m-auto h-full overflow-x-hidden">
        {/* <DashboardPage /> */}
        <Header />
        <h1 className="m-auto text-4xl font-semibold text-center w-[45rem] h-28">Customize Property Management Ensuring Your Peace of Mind</h1>

        <Tasks />

        <Booking />
        <Rentals />
        <TableHero />
        <h1 className="mt-16">TEST</h1>
      </div>
    </div>
  );
}

export default App;
