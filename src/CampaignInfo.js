import React from 'react';
import "./CampaignInfo.css";
import MaterialUIPickers from './DatePicker';

function CampaignInfo () {
    return (
      <div className="campaignInfo_container">
         <h1><span>1</span>Campaign Info</h1>
         <div className="campaignInfo">

            <div className="campaignInfo_contents">
              <span>Campaign Name</span>
              <div className="inputBox">
                <input type="text"/>
              </div>
            </div>

            <div className="campaignInfo_contents">
              <span>Select Platform</span>
              <select>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select> 
            </div>

            <div className="campaignInfo_contents">
              <span>Campaign Description</span>
              <div className="inputBox">
                <input type="text"/>
              </div>
            </div>

            <div className="campaignInfo_contents">
              <span>Start Date<MaterialUIPickers /></span>
            </div>

            <div className="campaignInfo_contents">
              <span>End Date<MaterialUIPickers /></span>
              
            </div>
        </div>
      </div>
    )
}

export default CampaignInfo;
