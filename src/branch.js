import React from 'react'
import {Pane, ListItem, Tooltip, Position, Card, Paragraph, Avatar, Heading, Link, IconButton, DiagramTreeIcon, UnorderedList, PageLayoutIcon } from "evergreen-ui"

function Branch(props) {
    const maiden =  props.branch.names[0].maiden === "undefined" ? " " : props.branch.names[0].maiden;
    const married = props.branch.names[0].married === "undefined" ? " " : props.branch.names[0].married;

    const lastName = props.branch.gender !== "m" ?  
        <>
            <Heading is="h6" width={100} textAlign="center"> {maiden} </Heading>
            <Heading size={200} width={100} textAlign="center"> ({married}) </Heading>
        </>
        : 
        <Heading is="h6" width={100} textAlign="center">{props.branch.names[0].surname}</Heading>;
    const avatar = props.branch.src !== "undefined" ? 
        <Avatar
            src={props.branch.src}
            name= {props.branch.names[0].first}
            size={80}
            paddingBottom={2}
            /> 
        :   
        <Avatar
            name={props.branch.names[0].first}
            size={80}
        />;
        const elevation = props.clickedID === props.branch.gen_id ? 4 : 0;
        const family = props.branch.family.map((fam)=> {
            return (
                    <Link href={`#${fam.gen_id}`} marginRight={12} color="neutral" onClick={e => props.setClickedId(fam.gen_id)}>{fam.type}</Link>
            )
        })
        const events = props.branch.events.map((ev) => {
            const content = <UnorderedList>
                                        <ListItem color="green600" listStyle="none">{ev.date}</ListItem>
                                        <ListItem color="green600" listStyle="none">{ev.place}</ListItem>
                                    </UnorderedList>
            return (
                <Tooltip content={content} position={Position.RIGHT} appearance="card">
                <Link href="#" marginRight={12} color="neutral">{ev.type}</Link>
                </Tooltip>
            )
        })
        return (
        <Card key={props.branch._id} minWidth="auto" width="150px" height="auto" marginX={20} marginBottom="10px"
        marginTop="10px" border="muted" background="tint2" display="flex" flexDirection="column" justifyContent="center" alignItems="center" id={props.branch.gen_id} elevation={elevation} paddingBottom={10}>
        <Pane is="section" display="flex" flexDirection="row" justifyContent="space-between" width="100%" paddingBottom={10}>
            <Tooltip content="View-Tree">
                <IconButton icon={DiagramTreeIcon} size={10} padding={2} />
            </Tooltip>
            <Tooltip content="Detailed-Page">
                <IconButton icon={PageLayoutIcon} size={10} padding={2} />
            </Tooltip>
        </Pane>
            {avatar}
            <Heading is="h6" width={100} textAlign="center">{props.branch.names[0].first}</Heading>
            {lastName}
            <Paragraph size={300} marginTop={12} textAlign='center'>{props.branch.gender}</Paragraph>
            {family}
            {events}
        </Card>
    )
}

export default Branch;