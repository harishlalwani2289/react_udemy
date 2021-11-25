import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

// getImages = (images) => {
//   const imageList = images.map((image) => <img src={image.urls.regular} />);
// };
const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  console.log(images);
  return <div className="image-list">{images}</div>;
  //   const images = getImages(props.images);
};

export default ImageList;
