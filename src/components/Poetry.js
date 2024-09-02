import React from "react";

const poetry = [
  {
    title: "Never Married",
    text: `Our friends got married today 
< br />We got engaged around the same time
< br />Your oldest friend says to me that he misses you
< br />And the taste in my mouth feels severe
< br />I can almost picture you here
< br />Bitter and dissatisfied in a room of blissful lovers
< br />The newlyweds exchange sloppy tongues in 
< br />their boxer briefs
< br />"I can't miss him" I say, immediately resenting myself
< br />Your oldest friend tells me "Thanks for keeping 
< br />me honest"`,
  },
  {
    title: "Immersive Van Gogh",
    text: `Boyfriend barking at me in the car
< br />as usual 
< br />We rushed in with reservations
< br />Throat is sucking up, I'm smacking salt away
< br />Speaker blaring
< br />I can't see your face you can't see mine
< br />High geared sobs
< br />Are quiet against the Starry Night
< br />If a girl cries and no one can hear her
< br />Did she really cry at all? 
< br />
< br />
< br />I have not yet realized 
< br />that I am surrounded by his experience 
< br />Prussian blue, yellow ochre 
< br />He is painting me in his Night Cafe
< br />I can watch from the window to see downtown 
< br />It is spring, it is fall, it is the Fourth of July 
< br />And he ruins himself 
< br />It is one of the ugliest pictures I have ever seen

`,
  },
  // Add more print images
];

const Poetry = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Poetry</h1>
    {poetry.map((poem) => (
      <div key={poem.title} style={styles.poem}>
        <h2 style={styles.poemTitle}>{poem.title}</h2>
        <p
          style={styles.poemText}
          dangerouslySetInnerHTML={{
            __html: poem.text.replace(/< br \/>/g, "<br />"),
          }}
        />
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  },
  poem: {
    marginBottom: "50px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    maxWidth: "100%",
  },
  poemTitle: {
    color: "#444",
    marginBottom: "15px",
  },
  poemText: {
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default Poetry;
