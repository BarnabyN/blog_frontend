import React from "react";
import "../styles/SubmitButton.css";

export default function SubmitButton(props) {
  return <button type={props.type}>{props.text}</button>;
}
