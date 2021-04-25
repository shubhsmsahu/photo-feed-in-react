import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ModalStyled = styled.div`
  align-content: center;
  align-items: center;
  text-align: center;
`;

const ImageModal = ({ toggle, setToggle, images, setImageVal, imageVal }) => {
  const ImageSelecter = (val) => {
    images.map((image, index) => {
      if (image.urls.thumb === imageVal) {
        if (val === 1 && index !== 0) {
          const i = index - 1;
          setImageVal(images[i].urls.thumb);
        } else if (val === 2 && index !== images.length) {
          const i = index + 1;
          setImageVal(images[i].urls.thumb);
        }
      }
      return 0;
    });
  };
  return (
    <ModalStyled>
      <Modal
        isOpen={toggle}
        onRequestClose={() => setToggle(false)}
        style={{
          overlay: {
            // backgroundColor: "",
          },
          content: {
            position: "relative",
            left: "35%",
            width: "500px",
            height: "500px",
            textAlign: "center",
            border: "5px solid black",
          },
        }}
      >
        <img src={imageVal} alt="scrollImage" />
        <div>
          <button className="button" onClick={() => ImageSelecter(1)}>
            Prev
          </button>
          <button className="button" onClick={() => ImageSelecter(2)}>
            Next
          </button>
        </div>
      </Modal>
    </ModalStyled>
  );
};

export default ImageModal;
