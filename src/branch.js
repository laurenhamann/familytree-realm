import React from 'react'
import {Pane, ListItem, Tooltip, Position, Card, Paragraph, Avatar, Heading, Link, IconButton, DiagramTreeIcon, UnorderedList, PageLayoutIcon } from "evergreen-ui"


function Branch(props) {
    const branch = props.branch
    console.log(branch);
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
    console.log(t, genid);
    const header =
        <>
            <Heading 
                is="h6" 
                width={100}
                fontFamily='vaccine'
                textAlign="center"> 
                {fullName} 
            </Heading>
            <Heading 
                size={200} 
                width={100}
                fontFamily='vaccine'
                textAlign="center"> 
                {suffix}
            </Heading>
        </>;

    const avatar = 
        <Avatar
            src={src}
            name= {fullName}
            size={80}
            paddingBottom={2}
            color={gender === 'female' ? "purple" : gender === 'male' ?  "green" : "yellow"}
            /> ;
        //on click box-shadow
        const elevation = props.clickedID === genid ? 4 : 0;
        //family 
        const family = branch.family.map((fam, i)=> {
            return (
                <Link 
                    href={`#${fam.gen_id}`} 
                    marginRight={12} 
                    color="neutral" 
                    key={i}
                    fontFamily='hero-new'
                    onClick={() => props.setClickedId(fam.gen_id)}>
                        {fam.type}
                    </Link>
            )
        })
        //Map events
        const events = branch.events.map((ev,i) => {
            const content = <UnorderedList >
                                        <ListItem 
                                            color="muted"
                                            fontFamily='hero-new' 
                                            listStyle="none">
                                            {ev.date}
                                        </ListItem>
                                        <ListItem 
                                            color="muted"
                                            fontFamily='hero-new' 
                                            listStyle="none">
                                                {ev.place}
                                        </ListItem>
                                    </UnorderedList>
            return (
                <Tooltip 
                    content={content} 
                    position={Position.RIGHT} 
                    appearance="card"
                    key={i}>
                    <Link 
                        href="#" 
                        marginRight={12}
                        fontFamily='hero-new' 
                        color="neutral">
                            {ev.type}
                    </Link>
                </Tooltip>
            )
        })
        return (
        <Card 
            key={branch._id} 
            minWidth="auto" 
            width="150px" 
            height="auto" 
            marginX={20} 
            marginBottom="10px"
            marginTop="10px" 
            border="muted" 
            background="tint2" 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            id={genid} 
            className={props.id}
            elevation={elevation} 
            paddingBottom={10}
        >
            {/* button section */}
            <Pane 
                is="section" 
                display="flex" 
                flexDirection="row" 
                justifyContent="space-between" 
                width="100%" 
                className="button-section"
                paddingBottom={10}
            >
                <Tooltip content="View-Tree">
                    <IconButton 
                        icon={DiagramTreeIcon} 
                        size= "small"
                        padding={2}
                        id={genid}
                        onClick={() =>{ props.setClickedId(genid)
                            console.log(genid);
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
            </Pane>
            {avatar}
            {header}
            <Paragraph 
                size={300} 
                marginTop={1} 
                textAlign='center' 
                color={gender === 'female' ? "purple600" : gender === 'male' ? "green600" : "yellow600"}
            >
                {gender}
            </Paragraph>
            {props.small ? sm : family}
            {events}
        </Card>)
}

export default Branch;