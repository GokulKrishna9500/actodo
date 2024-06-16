function Card(props){
    return (
        <div style={{backgroundColor:props.bgcolor}} className='p-5 text-center flex-grow border rounded-md'>
            <h1 className='text-2xl'>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card