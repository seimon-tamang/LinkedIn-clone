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
       {newsArticle("Room Temperature SuperConductor (LK_99) not ...", "TOP NEWS - 8321 readers")}
       {newsArticle("Elon Musk lands a car on the moon....", "TOP NEWS - 12,352 readers")}
       {newsArticle("I hope this works - Seimon", "TOP NEWS - 352 readers")}
       {newsArticle("Apple Expected to Use Own Modem Chip -", "TOP NEWS - 7,352 readers")}
    </div>
  )
}

export default Widgets