import React from "react";
// styles
import "./styles.css";

// dashboard props
interface DashboardProps {
  ipAdress: string;
  location: string;
  timezone: string;
  isp: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  ipAdress,
  location,
  timezone,
  isp,
}) => {
  return (
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
  );
};

export default Dashboard;
