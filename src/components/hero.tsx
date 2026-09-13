import heroImg from "./../assets/banner-stack.png"

const Hero = () => {

    return (
        <div className="flex justify-between container mx-auto my-9">
            <div className="my-8">
                <h1 className="font-extrabold text-[60px]">Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span></h1>
                <p className="w-[60%] my-9">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="my-9 flex gap-5 ">
                    <button className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                        Explore Technologies
                    </button>
                    <button className="btn btn-outline">Learn More</button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero;