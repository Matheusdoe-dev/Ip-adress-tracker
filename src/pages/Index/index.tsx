import React from "react";
// components
import Input from "./../../components/Input";
// imgs
import arrowIcon from "../../assets/images/icon-arrow.svg";
// styles
import "./styles.css";

const Index = () => {
  return (
    <main className="ip-tracker">
      <div className="ip-tracker-container container">
        <h1 className="ip-tracker-title">IP Address Tracker</h1>

        <form className="ip-tracker-form">
          <Input
            name="ip-adress"
            onChange={() => {}}
            placeholder="Search for any IP address or domain"
          />
          <button className="ip-tracker-submit">
            <img
              src={arrowIcon}
              alt="Seta, icone do botão"
              className="ip-tracker-submit-arrow"
            />
          </button>
        </form>

        <section className="ip-tracker-dashboard">
          <div className="ip-tracker-dashboard-info">
            <span>Ip Address</span>
            <h3>192.212.174.101</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>Location</span>
            <h3>Brooklyn, NY 100001</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>Timezone</span>
            <h3>UTC - 05:00</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>ISP</span>
            <h3>SpaceX Starlink</h3>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
