import { useLocation } from "react-router-dom"
function Header() {

    const data = useLocation()
    return (
        <div>
            <h1 className='text-3xl font-medium'>Hello {data.state.user} !!!</h1>
            <p>Welcome! I help you to manage your activities ;)</p>
        </div>
    )
}

export default Header