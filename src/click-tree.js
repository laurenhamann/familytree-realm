import React from 'react'
import Branch from './branch'

function IndividualTree(props) {
    console.log(props.id)
    const branches = props.branches;
    let arr;
    let fam;
    branches.filter(b => {
        if(b.gen_id === props.id){
            console.log(b)
            arr = b
            fam = b.family;
            return b;
        }
    })
    let ids = [];
    let fa = [];
    fam.forEach(f => {
        let id = f.gen_id;
        branches.filter(br => {
            if(br.gen_id === id) {
                const peep =  {
                    "id": id,
                    "type": f.type
                }
                fa.push(peep)
                ids.push(br);
            }
        })
    })

    const family = ids.map((family) => {
        let type;
        fa.forEach(f => {
            if(f.id === family.gen_id) {
                type = f.type
            }
        })
        return <Branch branch={family} id={type} />
    })
    console.log(fam);

    return (
        <>
        <button onClick={() => props.setView('grid')}> &larr;</button>
        <Branch branch={arr} id="Origin" />
        {family}
        </>
    )
}

export default IndividualTree