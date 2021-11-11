import React from 'react'
import Branch from './branch'
import styled  from '@emotion/styled'
export const TreeBranchStyles = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    div {
        justify-content: flex-start;
        h2 {
            font-size: 12px;
            margin-bottom: 0.5px;
            margin-top: 0.5px;
        }
        div {
            margin: 0.5px;
        }
        p {
            margin-top: 0px;
        }
    }
`
function IndividualTree(props) {
    console.log(props.clickedID)
    const branches = props.branches;
    let family_branch_array = [];
    let family_obj = [];
    let family;
    let array;
    branches.map(branch => {
        const origin_id =  props.clickedID;
        if(origin_id === branch.gen_id) {
            array = branch;
            family = branch.family
            console.log(family)
        }
    })

  const family_members = family.map(mem => {
        let gen_id = mem.gen_id
        console.log(gen_id)
        let obj;
        let type;
        let person_added;
        branches.filter(branch => {
            if(branch.gen_id === gen_id){
                obj = branch
                type = mem.type
                person_added = true
                console.log('in filter')
            }
        })
        console.log(person_added)
        if(person_added){
            console.log('in if')
            return <Branch 
                            branch={obj} 
                            type={type} 
                            id={type} 
                            setId={props.setId} 
                            setView={props.setView} 
                            key={gen_id} 
                            setClickedId={props.setClickedId} 
                            small={true} />
        } else {
            return
        }
    })

    // branches.filter(b => {
    //     if(b.gen_id === props.clickedID){
    //         array = b
    //         console.log(b);
    //         if(b.family !== undefined){
    //             const arrayFamily = b.family;
    //             arrayFamily.forEach(f => {
    //                 let family_gen_id = f.gen_id;
    //                 branches.filter(br => {
    //                     if(br.gen_id === family_gen_id) {
    //                         const peep =  {
    //                             "id": family_gen_id,
    //                             "type": f.type
    //                         }
    //                         family_obj.push(peep)
    //                         family_branch_array.push(br);
    //                     }else {
    //                         family = 'The family members have not been added yet. Check back later.'
    //                     }
    //                 })
    //             })
    //             family = family_branch_array.map((mem) => {
    //                 let type;
    //                 let k;
    //                 family_obj.forEach(obj => {
    //                     if(obj.id === mem.gen_id) {
    //                         type = obj.type
    //                         k = obj.id
    //                     }
    //                 })
                    
    //                 return <Branch 
    //                                 branch={family} 
    //                                 type={type} 
    //                                 id={k} 
    //                                 setId={props.setId} 
    //                                 setView={props.setView} 
    //                                 key={k} 
    //                                 setClickedId={props.setClickedId} 
    //                                 small={true} />
    //             })
    //         }else {
    //             family = "Cannot find any family members"
    //         }
    //         return b;
    //     }
    // })
    // console.log(array);
    return (
        <>
            <TreeBranchStyles>
                <Branch 
                    branch={array} 
                    id="Origin" 
                    setId={props.setId} 
                    setView={props.setView} 
                    setClickedId={props.setClickedId} 
                    small={true} />
                {family_members}
            </TreeBranchStyles>
        </>
    )
}

export default IndividualTree