import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignoutButton = () =>{
    navigate('/')
  }
  return <><Header/></>;
};

export default Browse;
