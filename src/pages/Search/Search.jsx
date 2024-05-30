import React from "react";
import { useNavigate } from "react-router-dom";
import SearchFlights from "../../components/SearchFlights";
import Navbar from "../../components/Navbar";

function Search() {
  return (
    <div>
      <Navbar />

      <SearchFlights />
    </div>
  );
}

export default Search;
