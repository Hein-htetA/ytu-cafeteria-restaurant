import {
  faCheckDouble,
  faChevronDown,
  faChevronUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useOrderContext } from "../../../Context/OrderContext";

const OnDeliveryBtnGroup = (props) => {
  const { _id, detailHide } = props;

  const { sendToHistory, onClickHideShow, displayRejectConfirmationBox } =
    useOrderContext();
  return (
    <div className={"order-btn-container-order"}>
      <div className="recycle-bin-btn-container">
        <button
          className={"recycle-bin-btn"}
          onClick={() => displayRejectConfirmationBox(_id)}
        >
          Recycle Bin
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <div className="toggle-detail-btn-container">
        <button
          className="toggle-detail-btn"
          onClick={() => onClickHideShow(_id, "detailHide")}
        >
          {detailHide ? (
            <>
              <FontAwesomeIcon icon={faChevronDown} />
              <FontAwesomeIcon icon={faChevronDown} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faChevronUp} />
              <FontAwesomeIcon icon={faChevronUp} />
            </>
          )}
        </button>
      </div>
      <button className={"recycle-bin-btn"} onClick={() => sendToHistory(_id)}>
        Completed
        <FontAwesomeIcon icon={faCheckDouble} />
      </button>
    </div>
  );
};

export default OnDeliveryBtnGroup;
