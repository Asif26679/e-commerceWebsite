import nextt from '../assets/nextt.png'
import { Link } from 'react-router-dom'
function Feature(){
    return(
        <>
        <section className="w-full bg-[#0f2f2d] py-16 px-6 md:px-20 rounded-3xl mt-0.5" data-aos="fade-up">
       <div className="max-w-7xl mx-auto flex justify-between flex-col-reverse md:flex-row items-center gap-10">
       <div className="md:h-1/4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-lequire">
        Best technolgy with air filetrs
        </h2>
       <h3 className="text-white  text-center text-3xl">
       up to 30% off
       </h3>
       <Link
              to="/products"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-green-800 transition duration-200 font-lequire md:ml-45"          
              >Buy Now</Link>
       </div>
       <div className="md:w-1/2">
        <img src={nextt} alt="" />
       </div>
       </div>
    </section>
        </>
    )
}
export default Feature