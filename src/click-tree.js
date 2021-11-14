import React from 'react'
import Branch from './branch'
import styled  from '@emotion/styled'
import './styles/modules/_relationship-tree.scss';

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
    let family;
    let array;
    branches.map(branch => {
        const origin_id =  props.clickedID;
        if(origin_id === branch.gen_id) {
            array = branch;
            family = branch.family
        }
    })

    const origin = <Branch 
    branch={array} 
    id="Origin" 
    setId={props.setId} 
    setView={props.setView} 
    setClickedId={props.setClickedId} 
    small={true} />;
    let spouse = [];
    let children = [];
    let parents = [];

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
        const standard_branch = <Branch 
                            branch={obj} 
                            type={type} 
                            id={type} 
                            setId={props.setId} 
                            setView={props.setView} 
                            key={gen_id} 
                            setClickedId={props.setClickedId} 
                            small={true} />
        if(person_added){
            console.log('in if')
            if(type === 'Child'){
            children.push(standard_branch);
            }else if(type === 'Mother' || type === 'Father') {
                parents.push(standard_branch);
            }else if(type === 'Husband' || type === 'Wife'){
                spouse.push(standard_branch)
            }else{
                return
            }
        }else {
            return
        }
    })
    return (
        <>
            <div className="tree-container">
                <div className="tree-container-parents">
                    {parents}
                </div>
                <div className="tree-container-main-relationship">
                    {origin}{spouse}
                </div>
                <div className="tree-container-children">
                    {children}
                </div>
            </div>
        </>
    )
}

export default IndividualTree