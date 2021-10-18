import './Navbar.css'

const Navbar = (props) => {

    return (
        <div className="nav">
            <h4>Logo</h4>
            <ul> 
            {
                props.userLogged
                ?
                <button onClick={props.logout} className="logout">Logout</button>
                :
                <button onClick={props.login} className="login">Login</button>
            }
            </ul>
        </div>
    )
}

export default Navbar
