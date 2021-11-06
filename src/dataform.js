import React, { useState } from "react"
import {Heading, Pane, TextInput,  RadioGroup, Text, IconButton, AddIcon, CrossIcon, Tooltip, SmallTickIcon, SmallCrossIcon, Popover, Menu, PeopleIcon, Position, Button, SearchInput } from "evergreen-ui"
import Search from "./provider/search"

function ControlledSearchInputExample(props) {
    const handleSubmit = e => {
        e.preventDefault();
        alert(props.filter)
        props.setQuery(true)
        // or you can send data to backend
    };
    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
        handleSubmit(props.query);
        }
    };
    return (
            <Pane is='section'>
                <SearchInput 
                        onChange={(e) => props.setFilter(e.target.value)}
                        onKeyPress={handleKeypress} 
                        value={props.filter}
                        marginRight='auto'
                        marginLeft='auto'
                        id="input-search"
                        marginTop='2px' />
                <Button onClick={handleSubmit}> Search </Button>
            </Pane>
    )}

function Family(){
    const[pick, setPick] = useState(false)
    const [filter, setFilter] = useState('')
    const[query, setQuery] = useState(false)
    let member;
    const relationships = ['Father', 'Mother', 'Sibling', 'Spouse', 'Son', 'Daughter']
    const menuItems = relationships.map((relation) => {
        member = relation;
        return (
            <Menu.Item icon={PeopleIcon} key={relation} onClick={() => {
                setPick(true);
            }}>Add {relation}</Menu.Item>
        )
    })
    console.log(member);
    return (
        <>
        <Popover
            position={Position.BOTTOM}
            content={
                <Menu>
                <Menu.Group>
                    {menuItems}
                </Menu.Group>
                </Menu>
            }
            >
            <Button width='auto' marginRight="auto" marginLeft="auto">{pick ? member : 'Link Family Members'}</Button>
            </Popover>
            {pick ? <ControlledSearchInputExample filter={filter} setFilter={setFilter} setQuery={setQuery} query={query} /> : ''}
            {query ? <Search query={filter} run={query} />: ''}
        </>
    )
}

// events 
function Events(props){
    let type;
    let place;
    let date;
        return (
            <>
            <Pane 
                is='section'
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                width='50%'
                marginRight='auto'
                marginLeft='auto'>
                <Tooltip content="Delete Event">
                    <IconButton 
                        icon={SmallCrossIcon} 
                        background="none"
                        border='none'
                        className='deleteSection'
                        onClick={(e) => console.log(e.target)} 
                    />
                </Tooltip>
                <Tooltip content="Save Event">
                    <IconButton 
                        icon={SmallTickIcon}
                        background="none"
                        border='none'
                        className='deleteSection' 
                        onClick={() => {
                        const obj = {
                            type: type,
                            place: place,
                            date: date
                        }
                        props.events.push(obj);
                    }} />
                </Tooltip>
            </Pane>
            <TextInput 
                onChange={e => type = e.target.value} 
                value={props.type} 
                name="type" 
                fontFamily='hero-new'
                placeholder="type"
                width="50%"
                marginRight='auto'
                marginLeft='auto' />
            <TextInput 
                onChange={e => date = e.target.value } 
                value={props.date}
                fontFamily='hero-new' 
                name="date" 
                placeholder="dd mmm yyyy"
                width="50%"
                marginRight='auto'
                marginLeft='auto' />
            <TextInput 
                onChange={e => place = e.target.value} 
                value={props.place} 
                fontFamily='hero-new'
                name="place" 
                placeholder="location"
                width="50%"
                marginBottom="2px"
                marginRight='auto'
                marginLeft='auto' />
            </>
        )
}


function Form(props) {
    const [first, setFirst] = React.useState('')
    const [middle, setMiddle] = React.useState('')
    const [options] = React.useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Unknown', value: ' ' }
        ])
    
    const [value, setValue] = React.useState('restricted')
    const [married, setMarried] = React.useState('')
    const [maiden, setMaiden] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const events = []
    // const members = []
    // const [event, setEvent] = React.useState([{}])
    // const [family, setFamily] = React.useState([{}])
    const[eventCount, setCount] = React.useState(1)
    const eventLoop = [];
    for (let i = 1;  i <= eventCount; i++) {
        eventLoop.push(<Events events={events} key={i} />)
    }
    return (
        <Pane 
            display="flex" 
            flexDirection="column" 
            justifyContent="flex-start"  
            minHeight="100vh" 
            background="red25" 
            width="75%" 
            elevation={4} 
            marginRight="auto" 
            marginLeft="auto"
            marginBottom={25}>
            <Pane 
                is="section" 
                display="flex" 
                flexDirection="row" 
                justifyContent="space-between" 
                width="100%" 
                marginBottom={25}>
                <IconButton 
                    icon={CrossIcon} 
                    onClick={() => props.setView('grid')}
                    />
                <Heading 
                    size={800} 
                    marginTop="10" 
                    marginBottom="10"
                    fontFamily='vaccine'
                    flexGrow="2"
                    textAlign="center">
                    Input new branch data
                </Heading>
            </Pane>
            <Pane 
                is="section" 
                width="100%"
                display="flex"
                flexDirection='column'
                marginBottom={25}
                >
                <Text 
                    size={500} 
                    marginBottom="10px" 
                    marginRight='auto'
                    marginLeft='auto'
                    fontFamily='hero-new' 
                    width='50%'>
                    Names:
                </Text>
                <TextInput 
                    onChange={e => setFirst(e.target.value)} 
                    value={first}
                    fontFamily='hero-new' 
                    name="first-name" 
                    placeholder="first name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto'
                />
                <TextInput 
                    onChange={e => setMiddle(e.target.value)} 
                    value={middle} 
                    fontFamily='hero-new'
                    name="middle-name" 
                    placeholder="middle name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                {value === 'female' ? 
                <>
                <TextInput 
                    onChange={e => setMarried(e.target.value)} 
                    value={married}
                    fontFamily='hero-new' 
                    name="married-name" 
                    placeholder="married name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                <TextInput 
                    onChange={e => setMaiden(e.target.value)} 
                    value={maiden}
                    fontFamily='hero-new' 
                    name="maiden-name" 
                    placeholder="maiden name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                </> :
                <TextInput 
                    onChange={e => setSurname(e.target.value)} 
                    value={surname}
                    fontFamily='hero-new' 
                    name="sur-name" 
                    placeholder="surname"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                }
                <RadioGroup
                    fontFamily='hero-new'
                    label="Gender:"
                    size={16}
                    value={value}
                    options={options}
                    onChange={event => setValue(event.target.value)}
                    marginRight='auto'
                    marginLeft='auto' 
                    width='50%'
                />
            </Pane>
            <Pane is="section"
                width="100%"
                display="flex"
                flexDirection='column'
                marginBottom={25}>
                <Text size={500} 
                    marginRight='auto'
                    marginLeft='auto'
                    fontFamily='hero-new' 
                    marginBottom='10px'
                    width='50%'>Events:
                </Text>
                {eventLoop}
                <Pane is='section'
                    display='flex'
                    flexDirection='row'
                    justifyContent="center">
                    <Tooltip content="Add Event">
                        <IconButton 
                            icon={AddIcon} 
                            onClick={() =>  {
                                setCount(eventCount + 1)
                            }} 
                        />
                    </Tooltip>
                    </Pane>
                </Pane> 
                <Pane is="section"
                    width="100%"
                    display="flex"
                    flexDirection='column'
                    marginBottom={25}>
                <Family />
                </Pane>   
        </Pane>
    );
}


export default Form;