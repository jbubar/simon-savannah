import React from "react";

const SplashPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Simon Savannah</h1>

      <div style={styles.bio}>
        <p>
          Based in Los Angeles, Simon Savannah is an autobiographical artist
          drawing inspiration from old journal entries, dreams, and her notes
          app. Her visual diaries convey a reflection of lived and imagined
          moments. Simon uses her art to process the intimate composition of her
          personal narrative.
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/simon-savannah-horse-print.png`}
        alt="Simon Savannah"
        style={styles.frontPiece}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "30px",
    color: "#2c3e50",
  },
  frontPiece: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",

    margin: "0 auto 30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  bio: {
    textAlign: "justify",
  },
};

export default SplashPage;
