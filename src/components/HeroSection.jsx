
import { Link } from "react-router-dom"
import hero from '../assets/hero.mp4'
function HeroSection(){
    return(
        <>
        <section className="relative w-full h-screen overflow-hidden rounded-3xl pt-16 shadow-2xl"
         data-aos="fade-up" > 
        <video src={hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover top-0 left-0 "
        >


        </video>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        >
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20">
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight  drop-shadow-lg">Discover Your Style...</h1>
         <p className="mt-4 text-white text-lg">Customize your product with your comfort</p>
         <p>World's best earphone company</p>   
          <Link
              to="/products"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-green-800 transition duration-200"          
              >Shop Now</Link>
                </div>  
           
            </div>   
         <div className="flex-1 hidden md:block">

         </div>
              </div>  
        </div>

        </section>
        </>
    )
}
export default HeroSection;