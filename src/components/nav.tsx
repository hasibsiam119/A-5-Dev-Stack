import logo from "./../assets/logo-text.png"
// export interface NavProps {
//     prop: string
// }


const Nav = () => {
    
    return (
        <div className="flex justify-between container mx-auto m-2 p-2 items-center sticky">
            <div>
            <img src={logo} alt="Logo" />
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="text-pink-600"><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <button className="btn btn-ghost">Sign In</button>
                <button className="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
            </div>
        </div>
    )
}

export default Nav;