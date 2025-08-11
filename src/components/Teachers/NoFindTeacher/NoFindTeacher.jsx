import React from "react";
import bookImg from "../../../img/book.webp";
import { NoFindContainer } from "./NoFindTeacher.styled.jsx";

const NoFindTeacher = () => {
  return (
    <NoFindContainer>
      <img src={bookImg} alt="Open book with glasses" />
      <p>No find any teacher by these parameters</p>
    </NoFindContainer>
  );
};

export default NoFindTeacher;
