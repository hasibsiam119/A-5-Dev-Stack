import logo from "./../assets/logo-text.png"
export const Footer = () => {

    return (
        <>
            <div className="py-10 ">
                <div className="flex justify-center">
                    <img src={logo} alt="" />
                </div>
                <div className="text-center py-4">
                    <p>Curated tools, technologies, and resources for developers
                        building modern software.</p>

                </div>
                <div >
                    <ul className="flex gap-4 justify-center font-bold py-3">
                        <li><a href="#"></a> GitHub</li>
                        <li><a href="#"></a> Twitter</li>
                        <li><a href="#"></a>linkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 container mx-auto  gap-10 py-7 text-gray-500 max-md:hidden">
                <div className="">
                    <img src={logo} alt="" />
                    <p className="my-5">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className="flex gap-4 font-semibold my-5">
                        <a href="#">Github</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <ul>
                        <li className="font-semibold my-4">PRODUCT</li>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-semibold my-4 ">COMPANY</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-semibold my-4">LEGAL</li>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>

                    </ul>
                </div>


            </div>
            <div className="divider container mx-auto"></div>
            <div className="flex justify-between container mx-auto items-center text-gray-500 my-5 max-md:px-5 max-md:my-0 " >
                <div>© 2026 Dev Stack. All rights reserved.</div>
                <div>
                    <ul className="flex gap-4 max-md:gap-2 max-md:px-5 max-md:my-0">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </>
    )
}