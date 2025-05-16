import nextt from '../assets/nextt.png'
function Feature(){
    return(
        <>
        <section className="w-full bg-[#0f2f2d] py-16 px-6 md:px-20 rounded-3xl mt-0.5" data-aos="fade-up">
       <div className="max-w-7xl mx-auto flex justify-between flex-col-reverse md:flex-row items-center gap-10">
       <div className="md:h-1/4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Best technolgy with air filetrs
        </h2>
       <p className="text-white text-lg">
       Clear sound 
       </p>
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