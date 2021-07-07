import React from 'react'
import "./Deliverables.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Deliverables () {
    return (
        <div className="deliverables_container">
            <h1><span>3</span>Deliverables</h1>
            
            <div className="deliverable_type">
                  Deliverable Type
                  <select>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select> 
            </div>

            <div className="deliverables">

                <div className="deliverables_contents">
                  <span>Add Instructions</span>
                  <textarea></textarea>
                </div>

                <div className="deliverables_contents">
                  <span>Add do's <ThumbUpIcon /></span>
                  <textarea></textarea>
                </div>

                <div className="deliverables_contents">
                  <span>Add dont's <ThumbDownIcon /></span>
                  <textarea></textarea>
                </div>

            </div>
        </div>
    )
}

export default Deliverables;
