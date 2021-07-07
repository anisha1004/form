import './App.css';
import CampaignInfo from './CampaignInfo';
import Product from './Product';
import Deliverables from './Deliverables';
import Reference from './Reference';
import { Button } from '@material-ui/core';

function App() {
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
        <Button variant="contained" color="primary">Save Campaign</Button>
      </div>
      
    </div>
  );
}



export default App;
