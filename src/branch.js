import React from 'react'
import {Pane, ListItem, Tooltip, Position, Card, Paragraph, Avatar, Heading, Link, IconButton, DiagramTreeIcon, UnorderedList, PageLayoutIcon } from "evergreen-ui"


function Branch(props) {
    const last =  props.branch.names[0].surname;
    const married = props.branch.names[0].married === undefined ? " " : props.branch.names[0].married;
    const gender = props.branch.gender;
    const first = props.branch.names[0].first;
    const fullName = `${first} ${last}`;
    const src = props.branch.src;
    const t = props.id;

    const id = props.branch.gen_id;
    const diff = gender === 'female' ?
        <>
            <Heading 
                is="h6" 
                width={100}
                fontFamily='vaccine'
                textAlign="center"> 
                {last} 
            </Heading>
            <Heading 
                size={200} 
                width={100}
                fontFamily='vaccine'
                textAlign="center"> 
                {married}
            </Heading>
        </>
        :
        <Heading 
            is="h6" 
            width={100}
            fontFamily='vaccine'  
            textAlign="center">
            {last}
        </Heading>;

    const avatar = gender === "male" ? 
        <Avatar
            src={src}
            name= {fullName}
            size={80}
            paddingBottom={2}
            color="green"
            /> 
        :   gender === "female" ? 
        <Avatar
            color="purple"
            src={src}
            name={fullName}
            size={80}
        />: 
        <Avatar
            color="yellow"
            src={src}
            name={fullName}
            size={80}
        />;
        //on click box-shadow
        const elevation = props.clickedID === id ? 4 : 0;
        //family 
        const family = props.branch.family.map((fam, i)=> {
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
        const events = props.branch.events.map((ev,i) => {
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
        return (<Card 
            key={props.branch._id} 
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
            id={id} 
            elevation={elevation} 
            paddingBottom={10}>
            <Pane 
                is="section" 
                display="flex" 
                flexDirection="row" 
                justifyContent="space-between" 
                width="100%" 
                paddingBottom={10}>
                <Tooltip content="View-Tree">
                    <IconButton 
                        icon={DiagramTreeIcon} 
                        size= "small"
                        padding={2}
                        id={id}
                        onClick={(e) => {
                            props.setId(e.target.id)
                            props.setView('tree')}}
                        />
                </Tooltip>
                <Tooltip content="Detailed-Page">
                    <IconButton 
                        icon={PageLayoutIcon} 
                        size= "small"
                        padding={2} />
                </Tooltip>
            </Pane>
            <h2>{t}</h2>
            {avatar}
            <Heading 
                is="h6" 
                width={100}
                fontFamily='vaccine'  
                textAlign="center">
                {first}
            </Heading>
            {diff}
            <Paragraph 
                size={300} 
                marginTop={12} 
                textAlign='center' 
                fontFamily='madelinette'>
                {gender}
            </Paragraph>
            {family}
            {events}
        </Card>)
}

export default Branch;