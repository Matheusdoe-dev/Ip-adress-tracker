import React from "react";
// components
import Input from "./../../components/Input";
import Footer from "./../../components/Footer";
import Dashboard from "./../../components/Dashboard";
import { TileLayer, Marker, Map } from "react-leaflet";
import L from "leaflet";
// imgs
import arrowIcon from "../../assets/images/icon-arrow.svg";
import markerImg from "../../assets/images/icon-location.svg";
// styles
import "./styles.css";
// hooks
import useIpTracker from "../../hooks/ip-tracker";

// custom icon to put on Marker in map
const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconRetinaUrl: markerImg,
  iconSize: [33, 43],
});

const Index = () => {
  const {
    ip,
    handleSubmitIp,
    position,
    location,
    isp,
    timezone,
    ipAdress,
    setIp,
    setIpErrorStatus,
  } = useIpTracker();

  return (
    <>
      <main className="ip-tracker">
        <div className="ip-tracker-container container">
          <h1 className="ip-tracker-title">IP Address Tracker</h1>

          <form className="ip-tracker-form" onSubmit={handleSubmitIp}>
            <Input
              aria-label="IP Address"
              name="ip-adress"
              placeholder="Search for any IP address"
              value={ip}
              onChange={(e) => {
                setIpErrorStatus(false);
                setIp(e.target.value);
              }}
            />
            <button className="ip-tracker-submit">
              <img
                src={arrowIcon}
                alt="Seta, icone do botão"
                className="ip-tracker-submit-arrow"
              />
            </button>
          </form>
          <Dashboard
            location={location}
            timezone={timezone}
            isp={isp}
            ipAdress={ipAdress}
          />
        </div>
      </main>

      <Map className="map-container" center={position} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={markerIcon} />
      </Map>

      <Footer />
    </>
  );
};

export default Index;
