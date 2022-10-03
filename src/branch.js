import React from 'react'
import Avatar from './avatar';
import ToolTip from './tooltip';
import {Tooltip, IconButton, DiagramTreeIcon, PageLayoutIcon } from "evergreen-ui"
import './styles/modules/_card.scss';

function Branch(props) {
    const branch = props.branch
    const name = branch.names[0]
    const last =  name.surname;
    const t = props.id;
    const middle = name.middle === undefined ? " " : name.middle;
    const gender = branch.gender;
    const first = name.first;
    const suffix = name.suffix;
    const fullName = `${first} ${middle} ${last}`;
    const src = branch.src;
    const sm = '';
    const genid = branch.gen_id;
    const header =
        <div className="card-header">
            <h4 className="card-header-name"> 
                {fullName} 
            </h4>
            <h4 className="card-header-name"> 
                {suffix}
            </h4>
        </div>;
    const avatar_name = `${first} ${last}`;
    const avatar = 
        <Avatar
            src={src}
            fullname= {avatar_name}
            gender={gender}
            /> ;
        //on click box-shadow
        const elevation = props.clickedID === genid ? 'elevate' : '';
        //family 
        const family = branch.family.map((fam, i)=> {
            return (
                <li
                className="list-item"
                ><a 
                    href={`#${fam.gen_id}`} 
                    key={i}
                    className='list-item'
                    onClick={() => props.setClickedId(fam.gen_id)}>
                        {fam.type}
                    </a></li>
            )
        })
        //Map events
        // const events = branch.events.map((ev,i) => {
        //     return (
        //         <li className="list-item"><ToolTip 
        //             place={ev.place} 
        //             date={ev.date}
        //             type={ev.type}
        //             key={i} />
        //             </li>
        //     )
        // })1`

        // const events = branch.events.map((ev) => {
        //     let birth;
        //     let death;

        //     if(ev.type === 'Birth'){
        //         console.log(ev);
        //         birth = ev.date;
        //     }else if( ev.type === 'Death'){
        //         console.log(ev);
        //         death = ev.date;
        //     }else if(ev.type === ''){

        //     }
        //     const datesLived = `${birth} - ${death}`;
        //     return datesLived;
        // })
        let datesLived = [];
        branch.events.filter(ev => {
            if(ev.type === 'Birth' || ev.type === 'Death') {
                datesLived.push(ev);
            }
        })
        const length = datesLived.length;
        const events = datesLived.map( en => {
            let birth;
            let death;
            if(length < 2 && en.type === 'Birth'){
                let date = en.date;
            }
            if(en.type === 'Birth') {
                birth = en.date;
            } else if (en.type === 'Death') {
                death = en.date;
            }
        })


        return (
        <div
            key={branch._id} 
            id={genid} 
            className={`${props.id} card ${elevation}`}
            elevation={elevation} 
        >
            {/* button section */}
            <div 
                className="button-section"
            >
                <Tooltip content="View-Tree">
                    <IconButton 
                        icon={DiagramTreeIcon} 
                        size= "small"
                        padding={2}
                        id={genid}
                        onClick={() =>{ props.setClickedId(genid)
                            props.setView('tree')}}
                    />
                </Tooltip>
                <h2>{t}</h2>
                <Tooltip content="Detailed-Page">
                    <IconButton 
                        icon={PageLayoutIcon} 
                        size= "small"
                        padding={2} 
                    />
                </Tooltip>
            </div>
            {avatar}
            <div className="info-names">
                {header}
                <p
                    size={300} 
                    className={`p-${gender}`}
                >
                    {gender}
                </p>
            </div>
            <div className="card-details">
                <ul className="list">
                {/* {props.small ? sm : family} */}
                {events}
                </ul>
            </div>
        </div>)
}

export default Branch;