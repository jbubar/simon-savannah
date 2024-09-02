import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const paintingWorks = [
  {
    original: "/painting1.jpg",
    thumbnail: "/painting1_thumb.jpg",
    description: "Painting 1: A short description of the painting.",
  },
  {
    original: "/painting2.jpg",
    thumbnail: "/painting2_thumb.jpg",
    description: "Painting 2: Another short description.",
  },
  // Add more painting works as needed
];

const Paintings = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Paintings</h1>
    <div style={styles.galleryContainer}>
      <ImageGallery
        items={paintingWorks}
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

export default Paintings;
