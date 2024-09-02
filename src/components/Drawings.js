import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const drawingWorks = [
  {
    original: "/drawing1.jpg",
    thumbnail: "/drawing1_thumb.jpg",
    description: "Drawing 1: A short description of the drawing.",
  },
  {
    original: "/drawing2.jpg",
    thumbnail: "/drawing2_thumb.jpg",
    description: "Drawing 2: Another short description.",
  },
  // Add more drawing works as needed
];

const Drawings = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Drawings</h1>
    <div style={styles.galleryContainer}>
      <ImageGallery
        items={drawingWorks}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={true}
        showNav={true}
        thumbnailPosition="bottom"
        useBrowserFullscreen={true}
        additionalClass="custom-image-gallery"
      />
    </div>
  </div>
);

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  },
  galleryContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default Drawings;
