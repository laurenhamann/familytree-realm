import React, { useState, useEffect } from "react"
import { Heading } from "evergreen-ui"
import { useMongoDB } from "./mongodb"

function Search(props) {
    const { db } = useMongoDB();
    const[docs, setDocs] = useState('')
    // const search = props.query
    useEffect(() => {
        async function wrapQuery() {
            if(props.run) {
                const collection = await db.collection('org').find()
                setDocs(collection)
            }
        }
    wrapQuery()
})

    return (
        <>
            {console.log(docs)}
            <Heading is='h1'>It worked</Heading>
        </>
        )
}

export default Search










// function Search(props) {
//     const[resultsx, setResults] = useState('');
//     const { db } = useMongoDB()
// useEffect(() => {
//     async function searchQuery(query) {
//         const collection = await db.collection('org')
//         const pipeline = [
//             {
//                 $search: {
//                     index: 'search',
//                     text: {
//                     query: query,
//                         path: {
//                             'wildcard': '*'
//                         }
//                     }
//                 }
//             }
//         ]
//         return collection.aggregate(pipeline).toArray()
//         .then(results => {
//             console.log(`Found ${results.length} possible matches.`)
//             for(const result of results) {
//                 console.log(result);
//             }
//             setResults(results);
//         })
//         .catch(err => console.error(`No Results Found: ${err}`))
//     }
// }
//     return (
//         <Pane is='section'>
//             <Heading is='h1' id={result._id}>
//                 {result.names.first}{result.names.surname}{result.gender}
//             </Heading>  
//         </Pane>
//     )
// }

// export default Search