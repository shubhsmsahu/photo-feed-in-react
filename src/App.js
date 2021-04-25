import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import Loader from "./component/Loader";
import ImageScroll from "./component/ImageScroll";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModel from "./component/ImageModel";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-row: 300px;
`;
function App() {
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [imageVal, setImageVal] = useState("");

  const fetchImages = () => {
    const accessKey = "UB-rrk_lPANUsuFBf7eb1U5BC-V9vpiz_YwjWEOieiw";
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setImages([...images, ...data]));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleModel = (event) => {
    setImageVal(event.target.src);
    console.log(event.target.src);
    setToggle(true);
  };

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map((image) => {
            return (
              <ImageScroll
                url={image.urls.thumb}
                key={image.id}
                handleModel={handleModel}
              />
            );
          })}
        </WrapperImage>
        <ImageModel
          toggle={toggle}
          setToggle={setToggle}
          images={images}
          imageVal={imageVal}
          setImageVal={setImageVal}
        />
      </InfiniteScroll>
    </div>
  );
}

export default App;
