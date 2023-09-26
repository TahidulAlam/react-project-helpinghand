/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationData from "../../components/Donations/DonationData";
import Banner from "../../components/Header/Banner/Banner";

const MainHome = () => {
  const donationData = useLoaderData();
  const newDonationData = [...donationData];
  const [searchCards, setSearchCards] = useState([...newDonationData]);
  console.log(newDonationData[1].category);
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    let searchText = searchInput.toLowerCase();
    console.log(searchText);
    const searchFilter = newDonationData.filter((card) =>
      card.category.toLowerCase().startsWith(searchText)
    );
    setSearchCards(searchFilter);
  };
  console.log(searchCards);
  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <div className="relative">
        <Banner
          handleSearch={handleSearch}
          handleOnChange={handleOnChange}
        ></Banner>
      </div>
      <DonationData
        donationData={donationData}
        searchCards={searchCards}
      ></DonationData>
    </div>
  );
};

export default MainHome;
