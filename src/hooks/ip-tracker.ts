import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// apis
import ipAdressApi from "../services/ipAdressApi";

const useIpTracker = () => {
  // ip that will be tracker
  const [ip, setIp] = useState("");

  // dashboard data
  const [ipAdress, setIpAdress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setISP] = useState("");

  // tracking the ip adress
  const handleSubmitIp = async (e: FormEvent) => {
    e.preventDefault();
    const data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        alert(
          "It wasn't possible to find this ip, check your input and try again"
        );
      });

    // It's putting all keys information on states
    if (data) {
      setIpAdress(data.ip);
      setLocation(
        `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
      );
      setTimezone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
    }
  };

  useEffect(async () => {
    const data = await ipAdressApi.get(``).then((r) => r.data);

    if (data) {
      setIpAdress(data.ip);
      setLocation(
        `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
      );
      setTimezone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
    }
  }, []);

  return {
    ip,
    setIp,
    handleSubmitIp,
    ipAdress,
    location,
    isp,
    timezone,
  };
};

export default useIpTracker;
