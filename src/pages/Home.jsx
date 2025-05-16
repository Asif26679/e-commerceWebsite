import Feature from "../components/Feature";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductSection from '../components/ProductSection'
import Testmonials from '../components/Testimonials'
function Home(){
    return(
        <>
        <HeroSection></HeroSection>
        <Feature></Feature>
        <ProductSection></ProductSection>
        <Testmonials></Testmonials>
        <Footer></Footer>
        </>
    )
}
export default Home;