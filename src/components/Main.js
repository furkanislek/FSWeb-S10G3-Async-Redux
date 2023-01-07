import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { likeFact } from "./redux";

const Main = () => {
  const url = "http://www.boredapi.com/api/activity?type=";

  const myDispatch = useDispatch();

  const [dataValue, setDataValue] = useState();

  const { id } = useParams();

  console.log(id);
    

  const boredApi = () => {
        axios.get(url + id).then((res) => {
            setDataValue(res.data.activity);
          });
  };

  useEffect(() => {
    boredApi();
  }, [id]);

  function handleBegen() {
    myDispatch(likeFact(dataValue));
    setTimeout(boredApi, 300);
  }

  return (
    <div>
      <div className="boredBox">
        <p className="boredBoxText">{dataValue}</p>
      </div>
      <div className="fact-buttons">
        <button className="saveBtn" onClick={handleBegen}>Save</button>
        <button className="newHobbyBtn" onClick={boredApi}>New Hobby</button>
      </div>
    </div>
  );
};

export default Main;
