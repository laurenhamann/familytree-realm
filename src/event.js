import React from 'react';


function EventContent(props) {
    return (
        <ul className="event-list">
            <li className="event-list-item date">
                {props.date}
            </li>
            <li className="event-list-item place">
                {props.place}
            </li>
        </ul>
    )
}

export default EventContent;