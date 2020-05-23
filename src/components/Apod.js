
import React, { useState, useEffect } from "react";
import axios from "axios";
import NASA from "./Card";
import styled from "styled-components";

export default function Apod(props) {

    const [url, setUrl] = useState("");
    const [urlType, seturlType] = useState("image");
    const [date, setDate] = useState("");
    const [explanation, setExplanation] = useState("");
    const [title, setTitle] = useState("");
    const [copyright, setCopyright] = useState("");

    const div = styled.section `

    width: 100%;
    border-radius: 10px;

    `;

    useEffect(() => {

      axios

        .get(

          `https://api.nasa.gov/planetary/apod?api_key=fXmhweTsDzm9oUGF871RBrvT5VT7Ib23X0Ero9sd`
        
        )

        .then(res => {

            console.log(res);
            setUrl(res.data.url);
            seturlType(res.data.media_type);
            setDate(res.data.date);
            setExplanation(res.data.explanation);
            setTitle(res.data.title);

            if(res.data.hasOwnProperty("copyright")){

              setCopyright(res.data.copyright);

            }

          })

      }, [props.date]);

    return (

      <div>

        <NASA
          title={title}
          date={date}
          url={url}
          urlType={urlType}
          copyright={copyright}
          explanation={explanation}
        />

      </div>

    );
    
  }
