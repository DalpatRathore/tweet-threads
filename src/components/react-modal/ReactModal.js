import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModal = () => {
  const [modalOpen, SetModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => SetModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => SetModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "#026",
          },
          content: {
            color: "maroon",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Text</p>
        <button onClick={() => SetModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default ReactModal;
