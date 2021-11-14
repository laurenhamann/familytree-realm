import React from 'react';
import { Tooltip, Position } from 'evergreen-ui';
import EventContent from './event';

function ToolTip(props){
    const content =  <EventContent  place={props.place} date={props.date} />
    return (
        <Tooltip
            content={content}
            position={Position.RIGHT} 
            appearance="card"
            key={props.key}>
            <a href="#" className="list-item type" >
                {props.type}
            </a>
            </Tooltip>
    )
}

export default ToolTip;