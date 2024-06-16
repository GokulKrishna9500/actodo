import Todolist from "./Todolist";
import Activitycontainer from "./Activitycontainer";
import { useState } from "react";


function TodoContainer() {

    const [list, setList] = useState([
        {
            id: 1,
            activity: "Wake up at 6AM"
        },
        {
            id: 2,
            activity: "Take a bath"
        },
        {
            id: 3,
            activity: "Have a healthy breakfast"
        }
    ])

    return (
        <div className='flex flex-grow gap-7 flex-wrap'>
          <Activitycontainer list={list} setList={setList}/>
          <Todolist list={list} setList={setList}/>
        </div>
    )
}

export default TodoContainer;