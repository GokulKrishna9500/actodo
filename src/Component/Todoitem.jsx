function Todoitem(props) {

    const list = props.list
    const setList = props.setList

    const handleDelete = (removeId)=>{
        var removeItem =  list.filter(function(item){
             if(item.id === removeId){
                 return false;
             }
             else{
                 return true;
             }
         })
         setList(removeItem);
     }

    return (
        <div className="flex justify-between my-1">
            <p>{props.index+1}. {props.activity}</p>
            <button className="bg-red-500 text-white px-1 border rounded-md" onClick={() => { handleDelete(props.id) }}>Delete</button>
        </div>

    )
}

export default Todoitem