import React from "react";
import Model from "react-modal";
import styled from "styled-components";

const modelStyled = styled.div`
  align-content: center;
  align-items: center;
  text-align: center;
`;

const ImageModel = ({ toggle, setToggle, images, setImageVal, imageVal }) => {
  const ImageSelecter = () => {};
  return (
    <modelStyled>
      <Model
        isOpen={toggle}
        onRequestClose={() => setToggle(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            position: "relative",
            left: "35%",
            width: "500px",
            height: "500px",
            textAlign: "center",
          },
        }}
      >
        <img src={imageVal} />
        <div>
          <button className="button">Prev</button>
          <button className="button">Next</button>
        </div>
      </Model>
    </modelStyled>
  );
};

export default ImageModel;
