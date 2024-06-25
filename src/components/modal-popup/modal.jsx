import React from "react";
import "./modal.css";

const ModalPopup = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span
            className="close-modal-icon"
            aria-hidden={true}
            onClick={onClose}
          >
            &times;
          </span>
          <h2>{header || "Header"}</h2>
        </div>
        <div className="modal-body">
          {body || (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="modal-footer">{footer || <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default ModalPopup;
