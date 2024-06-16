import { useState } from "react";

function Activitycontainer(props) {

    const list = props.list
    const setList = props.setList

    const [inputItem, setInputItem] = useState()

    const handleChange = (e)=>{
        setInputItem(e.target.value);
    }

    const handleAdd = ()=>{
        setList([...list, {id: list.length +1, activity:inputItem}])
        setInputItem('')
    }

    return (
        <div className=''>
            <h1 className='my-1 text-2xl font-medium'>Manage Activities</h1>
            <input onChange={handleChange} className='border border-black bg-transparent p-1' type='text' placeholder='Next Activity?' value={inputItem}></input>
            <button onClick={handleAdd} className='bg-black text-white border  border-black p-1'>Add</button>
        </div>
    )
}

export default Activitycontainer;