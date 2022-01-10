import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import NewsIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <NewsIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Crypto is tanking", "Top news")}
      {newsArticle("DOW Jones in the red", "Financial News")}
      {newsArticle("CDC New Covid-19 Guidlines", "WHO reports")}
      {newsArticle("NFT or Scams??!", "NYTimes")}
    </div>
  );
}

export default Widgets;
