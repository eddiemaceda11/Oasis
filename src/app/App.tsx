// Pages
import LoginPage from './pages/Login/LoginPage';

// Layouts
import Header from '../components/layouts/Header';

// Features
import Rentals from '../features/Rentals/Rentals';
import Booking from '../features/Booking/Booking';

// Table
import { TableHero } from '../components/ui/Table';
// import TableModal from '../components/ui/TableModal';

// Tasks manager
import Tasks from "../features/TaskManager/TaskManager";

function App() {
  return (
    <div className="bg-white h-screen relative">
      <Header />
      <h1 className="m-auto text-4xl font-semibold text-center w-[45rem] h-28">
        Customize Property Management Ensuring Your Peace of Mind
      </h1>

      {/* TODO - Create a separate page for the Task Manager
          w/ use of React Router.
      */}
      <Tasks />
      {/*  */}

      <Booking />
      <Rentals />
      <TableHero />
      <h1 className="mt-16">TEST</h1>
    </div>
  );
}

export default App;
