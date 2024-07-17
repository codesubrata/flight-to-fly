import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import FlightList from "./pages/FlightList/FlightList";
import MoreDetailsAboutSearchedFlights from "./pages/MoreDetailsAboutSearchedFlights/MoreDetailsAboutSearchedFlights";
import MoreDetailsAboutBookedFlight from "./pages/MoreDetailsAboutBookedFlight/MoreDetailsAboutBookedFlight";
import Booking from "./pages/Booking/Booking";
import Payment from "./pages/Payment/Payment";
import History from "./pages/History/History";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search-flights",
    element: <Search />,
  },
  {
    path: "/flight-lists",
    element: <FlightList />,
  },
  {
    path: "/more-details-about-searched-flight",
    element: <MoreDetailsAboutSearchedFlights />,
  },
  {
    path: "/more-details-about-booked-flight",
    element: <MoreDetailsAboutBookedFlight />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/history",
    element: <History />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/flight-to-fly",
});
export default router;
