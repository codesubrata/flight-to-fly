import { useState } from "react";
// import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AppData } from "./contexts/AppContext";

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchInfo, setSearchInfo] = useState([]);
  const [matchedFlightsData, setMatchedFlightsData] = useState([]);
  const [flightNumber, setFlightNumber] = useState("");
  const [payment, setPayment] = useState(false);
  const [bookingPageData, setBookingPageData] = useState([]);
  const [ticketID, setTicketID] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <>
      <AppData.Provider
        value={{
          userData,
          setUserData,
          isLoggedIn,
          setIsLoggedIn,
          searchInfo,
          setSearchInfo,
          matchedFlightsData,
          setMatchedFlightsData,
          flightNumber,
          setFlightNumber,
          payment,
          bookingPageData,
          setBookingPageData,
          ticketID,
          setTicketID,
          setPayment,
          history,
          setHistory,
        }}
      >
        <RouterProvider router={router} />
      </AppData.Provider>
    </>
  );
}

export default App;
