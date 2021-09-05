import React, { useEffect, useState } from "react"
import { useMongoDB } from "./provider/mongodb"
import { useRealmApp } from "./provider/realm"
import { Button, Heading, Pane, TextInputField} from "evergreen-ui"
import BranchList from "./branchlist"

// Create a component that displays the given user's details

function LogInForm(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="purpleTint" borderRadius={3} elevation={4}>
                <Heading size={800} marginTop="10" marginBottom="10">
                    Log in
                </Heading>
                <Pane>
                    <TextInputField
                        label="Username"
                        required
                        placeholder="mongodb@example.com"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Password"
                        required
                        placeholder="**********"
                        type="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                </Pane>
                <Button appearance="primary" onClick={props.handleLogIn}>
                    Log in
                </Button>
            </Pane>
        </Pane>
    )
}


function App() {
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [branches, setBranches] = useState([])

    useEffect(() => {
        async function wrapBranchQuery() {
            if (user && db) {
                const authoredBranches = await db.collection("org").find()
                setBranches(authoredBranches)
            }
        }
        wrapBranchQuery()
    }, [user, db])
    async function handleLogIn() {
        await logIn(email, password)
    }
    return user && db && user.state === "active" ? (
        <>
        <BranchList branches={branches} user={user} logOut={logOut} />
        </>
    ) : (
        <LogInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogIn={handleLogIn}
        />
    )
}

export default App