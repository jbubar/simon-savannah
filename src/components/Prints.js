import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const printWorks = [
  {
    original: "/simon-savannah-horse-print.png",
    thumbnail: "/simon-savannah-horse-print.png",
    description: "Print 1: A short description of the print.",
  },
  {
    original: "/print2.jpg",
    thumbnail: "/print2_thumb.jpg",
    description: "Print 2: Another short description.",
  },
  // Add more print works as needed
];

const Prints = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Prints</h1>
    <div style={styles.galleryContainer}>
      <ImageGallery
        items={printWorks}
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

export default Prints;
