import React from "react";
import ReactHtmlParser from "react-html-parser";

var showdown = require("showdown");

const MarkdownConverter = ({ text }) => {
  const converter = new showdown.Converter();
  const convertedText = converter.makeHtml(text);

  return <div>{ReactHtmlParser(convertedText)}</div>;
};

export default MarkdownConverter;
