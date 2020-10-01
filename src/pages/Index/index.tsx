import React from "react";
// components
import Input from "./../../components/Input";
// imgs
import arrowIcon from "../../assets/images/icon-arrow.svg";
// styles
import "./styles.css";
// hooks
import useIpTracker from "../../hooks/ip-tracker";

const Index = () => {
  const {
    ip,
    setIp,
    handleSubmitIp,
    ipAdress,
    isp,
    location,
    timezone,
  } = useIpTracker();

  return (
    <main className="ip-tracker">
      <div className="ip-tracker-container container">
        <h1 className="ip-tracker-title">IP Address Tracker</h1>

        <form className="ip-tracker-form" onSubmit={handleSubmitIp}>
          <Input
            name="ip-adress"
            placeholder="Search for any IP address or domain"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
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
            <h3>{ipAdress}</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>Location</span>
            <h3>{location}</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>Timezone</span>
            <h3>{timezone}</h3>
          </div>

          <div className="ip-tracker-dashboard-info">
            <span>ISP</span>
            <h3>{isp}</h3>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
