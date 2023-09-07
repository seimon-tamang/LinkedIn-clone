import React from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) =>{

    return (
      <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon fontSize='small'/>
      </div>
      <div className="widgets__articleRight">
        <h4>{ heading }</h4>
        <p>{ subtitle }</p>
      </div>
    </div>
    );
  }

  return (
    <div className= "widgets">
       <div className="widgets__header">
        <h2> LinkedIn News</h2>
        <InfoIcon/>
       </div>
       {newsArticle("SEIMON creates first React App", "TOP NEWS - 832 readers")}
       {newsArticle("Elon Musk lands a car on the moon", "People going wild over this...")}
    </div>
  )
}

export default Widgets