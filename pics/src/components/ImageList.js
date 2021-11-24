import React from "react";

// getImages = (images) => {
//   const imageList = images.map((image) => <img src={image.urls.regular} />);
// };
const ImageList = (props) => {
  const images = props.images.map((image) => (
    <img key={image.id} alt={image.description} src={image.urls.small} />
  ));
  console.log(images);
  return <div>{images}</div>;
  //   const images = getImages(props.images);
};

export default ImageList;
