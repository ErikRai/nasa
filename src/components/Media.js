import React from "react";
import styled from "styled-components";
/* ToDo: Add Styling for Video */

function Media(props){

    if(props.urlType === "image"){

        return(

            <Image src={props.url} alt="Nasa Photo"></Image>

        );

    }else{
        
        return(

            <Video src={props.url}></Video>

        );

    }

}


export default Media;
