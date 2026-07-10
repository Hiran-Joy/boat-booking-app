import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ViewBoat = () => {
  const [boatdata, changeData] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json"
      )
      .then(
        (response) => {
            changeData(response.data)
        }
      )
      .catch();
  };

  useEffect(

    () => {
        fetchData()
    },[]
  )

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {boatdata.map((value, index) => {
                return (
                  <div
                    className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                    key={index}
                  >
                    <div class="card">
                      <img
                        src={value.image}
                        height="300px"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title">Boat Name: {value.boatName}</h6>
                        <h6 class="card-title">Category: {value.category}</h6>
                        <h6 class="card-title">Bedrooms: {value.bedrooms}</h6>
                        <h6 class="card-title">Capacity: {value.capacity}</h6>
                        <h6 class="card-title">Price Per Night: {value.pricePerNight}</h6>
                        <h6 class="card-title">Route: {value.route}</h6>
                        <a href="#" class="btn btn-success">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewBoat;