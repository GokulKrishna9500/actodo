
import Todoitem from "./Todoitem"

function Todolist(props) {

   const list = props.list
   const setList = props.setList

    return (
        <div className='flex-grow bg-yellow-100 border rounded-md p-2'>
            <h1 className='text-2xl font-medium'>Today's Activity</h1>
            {
                list.length === 0? <p>You haven't added anything yet.</p> : ""
            }
            {
                list.map(function (item, index) {
                    return (
                        <Todoitem id={item.id} activity={item.activity} list={list} setList={setList} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default Todolist