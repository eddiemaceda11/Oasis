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

function App() {
  return (
    <div className="bg-white h-screen relative">
      <Header />
      {/* <LoginPage /> */}
      <h1 className="m-auto text-4xl font-semibold text-center w-[45rem] h-28">
        Customized Property Management Ensuring Your Peace of Mind
      </h1>
      <Booking />
      <Rentals />
      <TableHero />
      {/* <TableModal /> */}
      <h1 className="mt-16">TEST</h1>
    </div>
  );
}

export default App;
