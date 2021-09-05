import React from "react"
import {Heading, Pane, TextInput,  RadioGroup, Text, IconButton, AddIcon, majorScale, CrossIcon, Tooltip } from "evergreen-ui"

function Events(props){
        return (
            <>
            <TextInput 
                onChange={e => props.setType(e.target.value)} 
                value={props.type} 
                name="type" 
                placeholder="type"
                width="50%"
                marginRight='auto'
                marginLeft='auto' />
            <TextInput 
                onChange={e => props.setDate(e.target.value)} 
                value={props.date} 
                name="date" 
                placeholder="dd mmm yyyy"
                width="50%"
                marginRight='auto'
                marginLeft='auto' />
            <TextInput 
                onChange={e => props.setPlace(e.target.value)} 
                value={props.place} 
                name="place" 
                placeholder="location"
                width="50%"
                marginBottom="20px"
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
    const [id, setID] = React.useState('')
    const events = []
    const [event, setEvent] = React.useState('')
    const [type, setType] = React.useState('')
    const[date, setDate] = React.useState('')
    const[place, setPlace] = React.useState('')
    const[eventCount, setCount] = React.useState(1)
    const eventLoop = [];
    for (let i = 1;  i <= eventCount; i++) {
        eventLoop.push(<Events setDate={setDate} setType={setType} setPlace={setPlace} key={i} />)
    }
    return (
        <Pane 
            display="flex" 
            flexDirection="column" 
            justifyContent="flex-start" 
            background="tint1" 
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
                background="tint2"
                marginBottom={25}>
                <IconButton 
                    icon={CrossIcon} 
                    onClick={() => props.setView('grid')}
                    />
                <Heading 
                    size={800} 
                    marginTop="10" 
                    marginBottom="10"
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
                <Text size={500} marginBottom="10px" marginRight='auto'
                    marginLeft='auto' width='50%'>Names:</Text>
                <TextInput 
                    onChange={e => setFirst(e.target.value)} 
                    value={first} 
                    name="first-name" 
                    placeholder="first name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto'
                />
                <TextInput 
                    onChange={e => setMiddle(e.target.value)} 
                    value={middle} 
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
                    name="married-name" 
                    placeholder="married name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                <TextInput 
                    onChange={e => setMaiden(e.target.value)} 
                    value={maiden} 
                    name="maiden-name" 
                    placeholder="maiden name"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                </> :
                <TextInput 
                    onChange={e => setSurname(e.target.value)} 
                    value={surname} 
                    name="sur-name" 
                    placeholder="surname"
                    width="50%"
                    marginRight='auto'
                    marginLeft='auto' />
                }
                <RadioGroup
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
                    marginBottom='10px'
                    width='50%'>Events:
                </Text>
                {eventLoop}
                <Pane is='section'
                    display='flex'
                    flexDirection='row'
                    justifyContent="center"
                    marginTop={25}>
                    <Tooltip content="Add Event">
                        <IconButton 
                            icon={AddIcon} 
                            marginRight={majorScale(2)} 
                            onClick={() =>  {
                                const obj = {
                                    'type' : type,
                                    'date' : date,
                                    'place' : place
                                }
                                events.push(obj);
                                console.log(events);
                                setCount(eventCount + 1)
                            }} 
                        />
                    </Tooltip>
                    </Pane>
                </Pane>    
        </Pane>
    );
}


export default Form;