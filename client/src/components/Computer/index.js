import "./style.css";
import React, { useState } from "react";
//Components
import ComputerInfo from "../ComputerInfo/index";
//Images
import WindowsIcon from "../../images/windows-laptop.png";
import AppleIcon from "../../images/apple-laptop.png";

const Computer = ({
  id,
  name,
  serial,
  bsu,
  OS,
  version,
  make,
  model,
  processor,
  ram,
  drive,
  storage,
  graphics,
  accessories,
  status,
  currentUser,
  checkOutDate,
  pastUsers,
}) => {
  const [infoPopUp, setInfoPopUp] = useState(false);
  return (
    <>
      <div className="computer">
        {/* Computer Name */}
        <h2>{name}</h2>
        {/* OS Image */}
        <img
          src={OS.toLowerCase() === "windows" ? WindowsIcon : AppleIcon}
          alt={OS}
        />
        {/* Make & Model */}
        <h4>
          {make} {model}
        </h4>
        {/* Serial Number */}
        <h4>S/N: {serial}</h4>
        {/* Checkout Status */}
        <h4>
          Status:{" "}
          {status ? (
            <span className="in">Available</span>
          ) : (
            <span className="out">Unavailable</span>
          )}
        </h4>
        {/* More Info Button */}
        <button
          onClick={() => {
            setInfoPopUp(true);
          }}
        >
          View More Info
        </button>
      </div>
      {/* Computer Info Popup */}
      <ComputerInfo
        trigger={infoPopUp}
        setTrigger={setInfoPopUp}
        id={id}
        name={name}
        serial={serial}
        bsu={bsu}
        OS={OS}
        version={version}
        make={make}
        model={model}
        processor={processor}
        ram={ram}
        drive={drive}
        storage={storage}
        graphics={graphics}
        accessories={accessories}
        status={status}
        currentUser={currentUser}
        checkOutDate={checkOutDate}
        pastUsers={pastUsers}
      />
    </>
  );
};

export default Computer;
