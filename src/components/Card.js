import React from "react";
/*import Media from "./Media";*/

const NASA = ({ copyright, date, explanation, title, url }) => {

  return (

    <div>

      <title>Title: {title}</title>
      <date>Date: {date}</date>
      <img src={url} alt='NASAs'/>
      <copyright> {copyright} </copyright>
      <explanation> {explanation} </explanation>

    </div>
    

  );
  
};

export default NASA;