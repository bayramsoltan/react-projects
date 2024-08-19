//single selection
//multiple selection

import { useState } from "react"
import data from "./data";
import "./style.css";

export default function Accordion(){

const[selected,setSelected]=useState(null);

const[enableMultiSelect,setEnableMultiSelect]=useState(false);
const[multiple,setMultiple] =useState([]);

const[plus,changePlus]=useState("✅");

function handleSingleSelection(getCurrentId){
    console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null :getCurrentId);

    {
        selected === null ? changePlus("❌") : changePlus("✅")
    }

}


function handleMultiSelect(getCurrentId){
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId);

    if(findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMutiple)


}


    return <div className="wrapper">
        
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)}>Multi Select</button>
<div className="accordian">
    
{
data && data.length>0?(
    data.map(dataItem=><div className="item">
        <div onClick={enableMultiSelect ?()=>handleMultiSelect(dataItem.id) : ()=>handleSingleSelection(dataItem.id)} className="title">
            <h3>{dataItem.question}</h3>
            <span>{plus}</span>
        </div>

{enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}

    </div>)
):(


    <div>No Data founded</div>
)}

</div>

    </div>
}