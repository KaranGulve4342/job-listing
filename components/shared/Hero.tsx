import SearchForm from "./SearchForm"

const Hero = () => {
  return (
    <div id="home" className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]">
        <div className="flex flex-col items-center h-full justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
            <div className="text-center flex-col gap-3">
                <h1 className="text-6xl font-extrabold text-black">
                    Land The{" "}
                    <span className="text-purple-600 font-extrabold">
                        Dream Job
                    </span>
                    , You Deserve
                </h1>
                <span className="font-thin">
                    1,00,000 jobs listed here! Your dream job is waiting
                </span>
            </div>
            <SearchForm />
        </div>
    </div>
  )
}

export default Hero