import React from "react";
import { Link } from "react-router-dom";

// Pages
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/Dashboard";

// Layouts
import Header from "../components/layouts/Header";

// Features
import Rentals from "../features/Home/Rentals/Rentals";
import Booking from "../features/Home/Booking/Booking";

// Table
import { TableHero } from "../components/ui/Table";
// import TableModal from '../components/ui/TableModal';

// Tasks manager
import Tasks from "../features/Dashboard/TaskManager/TaskManager";

function App() {
  return (
    <div className="h-full overflow-x-hidden">
      <div className="m-auto h-full overflow-x-hidden">
        <Header />
        <h1 className="m-auto text-4xl font-semibold text-center w-[45rem] h-28">Customize Property Management Ensuring Your Peace of Mind</h1>
        <Booking />
        <Rentals />
        <TableHero />
        <Link
          to="/dashboard"
          className="border"
        >
          test - go to dashboard
        </Link>
      </div>
    </div>
  );
}

export default App;
