import React from 'react';
import "./Reference.css";
import MediaCard from './Card';

function Reference() {
  return (
    <div className="reference_container">

      <h1><span>4</span>Reference</h1>
      <div className="reference_cards">
        <div>
          <MediaCard />
        </div>

        <div>
          <MediaCard />
        </div>

        <div>
          <MediaCard />
        </div>

        <div>
          <MediaCard />
        </div>
        
        <div>
          <MediaCard />
        </div>
       
      </div>
    </div>
  );
}

export default Reference;
