import React from 'react';
import './styles/modules/_avatar.scss';


function Avatar(props) {
    const regex = /\b[a-zA-Z]/g;
    const fullname = props.fullname;
    const intials = fullname.match(regex);
    return (
        <div className={`avatar  ${props.gender}`} title={props.fullname}>
                <span className= 'avatar-circle'>
                    {intials}
                </span>
        </div>
    )
}

export default Avatar;