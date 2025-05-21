import ProductsCard from "./ProductCards.jsx"
import newheadphone from '../assets/newheadphone.png'
const products=[
    {
        id:'1',
        name:"Z-100 Wireless",
        price:20000,
        image:newheadphone
    },
    {
        id:'2',
        name:"Z-100 Wireless",
        price:1000,
        image:newheadphone
    },
    {
        id:'3',
        name:"Z-100 Wireless",
        price:5999,
        image:newheadphone
    },
    {
        id:'4',
        name:"Z-100 Wireless",
        price:4999,
        image:newheadphone
    }
]

function ProductSection(){

    return(
        <>
<section className="py-12 px-6 bg-[#037e7e] rounded-3xl mt-1 " data-aos="fade-up">
<h2 className="text-3xl font-bold text-center mb-8">
    Top Selling Products
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
  {products.map((product)=>(
    <ProductsCard key={product.id} product={product} />
  ))}  
</div>
</section>
        </>
    )
}
export default ProductSection;