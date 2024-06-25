import React, { useState } from "react";
import ModalPopup from "./modal";

const ModalComponent = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <ModalPopup
          id="custom-modal-id"
          header={<h3>Custom Modal Popup</h3>}
          body={<div>This is the content of the Modal Popup!!!</div>}
          footer={<h4>Just be cool!</h4>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalComponent;
