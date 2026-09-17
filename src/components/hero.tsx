import heroImg from "./../assets/banner-stack.png"

const Hero = () => {

    return (
        <div className="flex justify-between container mx-auto my-9 max-md:flex-col max-md:p-5">
            <div className="my-8">
                <h1 className="font-extrabold text-[60px] max-md:font-bold max-md:text-5xl max-md:text-center">Build Your Ideal <br />
                    <span className="brand-gradient-text ">Development Stack</span></h1>
                <p className="w-[60%] my-9 max-md:text-center max-md:w-full">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="my-9 flex gap-5  max-md:justify-around ">
                    <button className="px-7 py-4 rounded-md text-white brand-gradient">
                        Explore Technologies
                    </button>
                    <button className="px-7 py-4 rounded-md text-black outline-2">Learn More</button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero;