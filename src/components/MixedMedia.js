import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const mixedMediaWorks = [
  {
    original: `${process.env.PUBLIC_URL}/simon-savannah-mixed-media-horse.png`,
    thumbnail: `${process.env.PUBLIC_URL}/simon-savannah-mixed-media-horse.png`,
    description: `Textured Memories: An exploration of texture using various fabrics and paint techniques.`,
  },
  {
    original: `${process.env.PUBLIC_URL}/simon-savannah-mixed-media-horse-head.png`,
    thumbnail: `${process.env.PUBLIC_URL}/simon-savannah-mixed-media-horse-head.png`,
    description:
      "Digital Nostalgia: A blend of traditional painting techniques with digital art elements.",
  },

  // Add more mixed media works as needed
];

const MixedMedia = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Mixed Media</h1>
    <div style={styles.galleryContainer}>
      <ImageGallery
        items={mixedMediaWorks}
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

export default MixedMedia;
