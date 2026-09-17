import logo from "./../assets/logo-text.png"



const Nav = () => {

    return (
        <div className="sticky top-0 z-50">
            <div className="flex gap-3 justify-around bg-white p-5 md:hidden">
                <div><label className="btn btn-circle swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label></div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <button className="btn btn-ghost">Sign In</button>
                    <button className="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
                </div>
            </div>
            <div className="flex justify-between max-w-7xl mx-auto p-2 items-center  bg-white sticky top-0 z-50 max-md:hidden " >
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li className="text-pink-600 font-semibold"><a href="#">Home</a></li>
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
        </div>

    )
}

export default Nav;