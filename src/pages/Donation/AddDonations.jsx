/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AddDonationCard from "./AddDonationCard";
import Statistics from "../Statistics/Statistics";

const Donations = () => {
  const [addDonation, setAddDonation] = useState([]);
  const [nodata, setNoData] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);
  useEffect(() => {
    const addDonate = JSON.parse(localStorage.getItem("Donate"));
    if (addDonate) {
      setAddDonation(addDonate);
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div>
      <h1>
        {nodata ? (
          <p className="h-[80vh] flex justify-center items-center text-6xl font-bold">
            {nodata}
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {isShowMore
              ? addDonation?.map((donateDetails) => (
                  <AddDonationCard
                    key={donateDetails.id}
                    donateDetails={donateDetails}
                  ></AddDonationCard>
                ))
              : addDonation
                  .slice(0, 4)
                  .map((donateDetails) => (
                    <AddDonationCard
                      key={donateDetails.id}
                      donateDetails={donateDetails}
                    ></AddDonationCard>
                  ))}
          </div>
        )}
      </h1>
      <div className="flex justify-center items-center text-center m-5">
        {addDonation.length > 3 && (
          <button
            onClick={() => setIsShowMore(!isShowMore)}
            className="bg-orange-500 px-3 py-2 rounded-lg font-semibold text-white"
          >
            {isShowMore ? "see less" : "see more"}
          </button>
        )}
      </div>
      {/* <Statistics totalDonation={totalDonation}></Statistics> */}
    </div>
  );
};

export default Donations;
