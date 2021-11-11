import React, { useEffect, useState } from "react"
import { useMongoDB } from "./provider/mongodb"
import { useRealmApp } from "./provider/realm"
import LogInForm from "./login"
import BranchList from "./branchlist"

// Create a component that displays the given user's details



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