import "../ComputerInfo/style.css";
import React from "react";
//Images
import XSymbol from "../../images/x-symbol.svg";

const ComputerInfo = (props) => {
  return props.trigger ? (
    <div className="window">
      <div className="computer-info">
        <div>
          {/* Close Window Button */}
          <img
            src={XSymbol}
            className="exit-button"
            alt="Exit Popup"
            onClick={() => {
              props.setTrigger(false);
            }}
          />
          {/* Computer Name */}
          <h1>{props.name}</h1>
          {/* Checkout Status */}
          {props.status ? (
            <h2>
              Status: <span className="in">Available</span>
            </h2>
          ) : (
            <>
              <h2>
                Status: <span className="out">Unvailable</span>
              </h2>
              <h2>Current User: {props.currentUser}</h2>
              <h2>Checked Out On: {props.checkOutDate}</h2>
            </>
          )}
          {/* Serial Number */}
          <h2>S/N: {props.serial}</h2>
          {/* BSU Number */}
          <h2>BSU: {props.bsu}</h2>
          {/* OS */}
          <h2>OS: {props.OS}</h2>
          {/* OS Version */}
          <h2>Version: {props.version}</h2>
          {/* Make */}
          <h2>Make: {props.make}</h2>
          {/* Model */}
          <h2>Model: {props.model}</h2>
          {/* Processor */}
          <h2>Processor: {props.processor}</h2>
          {/* RAM */}
          <h2>RAM: {props.ram}</h2>
          {/* Drive */}
          <h2>Drive: {props.drive}</h2>
          {/* Storage */}
          <h2>Storage: {props.storage}</h2>
          {/* Graphics */}
          <h2>Graphics: {props.graphics}</h2>
          {/* Accessories */}
          <h2>Accessories: {props.accessories}</h2>
          {/* Past Users */}
          <h2>Past Users: {props.pastUsers}</h2>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ComputerInfo;
