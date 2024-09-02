import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const comicWorks = [
  {
    original: "/andrewComic.jpg",
    thumbnail: "/andrewComic.jpg",
  },

  // Add more images
];

const Comics = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Comics</h1>
    <div style={styles.galleryContainer}>
      <ImageGallery
        items={comicWorks}
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

export default Comics;
