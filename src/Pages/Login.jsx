import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const users = props.users


    const navigate = useNavigate()


    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    

    function handleUsername(e){
        setEusername(e.target.value)
    }

    function handlePassword(e){
        setEpassword(e.target.value)
    }

    function checkUser(){

        var userfound = false;

        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword){
                userfound = true
                navigate("/landing", {state:{user:eusername}})
            }
        })

        if(userfound === false){
            alert("Login Failed")
            setRuser(false)
        }
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-5 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi !!!</h1>
                {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please Signup befor login!!</p>}

                <div className="my-3">
                    <input value={eusername}
                     onChange={handleUsername}
                      className="border  border-orange-600 rounded-md p-1 my-1 " 
                      type="text" placeholder="Username"></input><br />
                    <input value={epassword}
                     onChange={handlePassword}
                      className="border  border-orange-600 rounded-md p-1 my-1" 
                      type="text" placeholder="Password"></input><br />
                    <button 
                    onClick={checkUser}
                    className="bg-orange-200 p-1 my-1 w-24 border border-orange-600 rounded-md">Login</button>
                    <p>Don't have an account? <Link className="text-green-600 font-medium underline" to={"/signup"}>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login;