import './App.css';
import CampaignInfo from './CampaignInfo';
import Product from './Product';
import Deliverables from './Deliverables';
import Reference from './Reference';
import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import db from "firebase";

function App() {

  const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendCampaign = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			displayName: "Anisha P",
			username: "Anisha",
			verified: true,
			text: tweetMessage,
			avatar: "AccountCircleIcon",
			image: tweetImage,
		});
		setTweetMessage("");
		setTweetImage("");
	};

  return (
    <div className="App">
      <CampaignInfo />
      <hr></hr>
      <Product />
      <hr></hr>
      <Deliverables />
      <hr></hr>
      <Reference />

      <div>
        <Button variant="contained" color="primary" onClick={sendCampaign}>
          Save Campaign
        </Button>
      </div>
      
    </div>
  );
}



export default App;
