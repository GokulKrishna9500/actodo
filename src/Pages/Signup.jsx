import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props){
    const users = props.users
    const setUsers = props.setUsers

    const navigate = useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUsername(e){
        setEusername(e.target.value)
    }

    function handlePassword(e){
        setEpassword(e.target.value)
    }

    function addUser(){
        setUsers([...users,{username:eusername, password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
        <div className="bg-white p-5 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi !!!</h1>
            <p>Sign Up here.</p>

            <div className="my-3">
                <input value={eusername}
                onChange={handleUsername}
                 className="border border-green-600 rounded-md p-1 my-1 " type="text" placeholder="Username"></input><br />
                <input value={epassword}
                onChange={handlePassword}
                className="border border-green-600 rounded-md p-1 my-1" type="text" placeholder="Password"></input><br />
                <input className="border border-green-600 rounded-md p-1 my-1" type="text" placeholder="Conform Password"></input><br />
                <button 
                onClick={addUser}
                className="bg-green-200 p-1 my-1 w-24 border border-green-600 rounded-md">Sign Up</button>

                <p>Already have a account? <Link className="text-orange-600 font-medium underline" to={"/"}>Login</Link> </p>
            </div>
        </div>
    </div>
    )
}

export default Signup;