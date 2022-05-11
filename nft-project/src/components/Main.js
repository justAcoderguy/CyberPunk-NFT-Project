import React from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = () => {
  return (
    <div className="main">
    <div className="mainContent">
      <div className="punkHighLight">
        <div className="punkContainer">
          <img 
              className="selectedPunk" 
                src='https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'
              alt="" 
          />
        </div>
      </div>

      <div className="punkDetails" style={{ color: "#fff" }}>
        <div className="title">
          Bandana Punk    
        </div>
        <span className="itemNumber">#3</span>
      </div>
      <div className="owner">
        <div className="ownerImageContainer">
          <img src='https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg' alt="" />
        </div>
        <div className="ownerDetails">
          <div className="ownerNameAndHandle">
            <div className="ownerAddress">0xBa2411D81fE8B268E362A037E08E852bc17F60B8</div>
            <div className="ownerHandle">@justAcoderguy</div>
          </div>
          <div className="ownerLink">
            <img src={instagramLogo} alt="" />
          </div>
          <div className="ownerLink">
            <img src={twitterLogo} alt="" />
          </div>
          <div className="ownerLink">
            <img src={moreIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main