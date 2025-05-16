import ProductsCard from "./ProductCards.jsx"
import z200 from '../assets/z200.jpg'
import product3 from '../assets/product3.jpg'
const products=[
    {
        id:'1',
        name:"Z-100 Wireless",
        price:20000,
        image:z200
    },
    {
        id:'2',
        name:"Z-100 Wireless",
        price:1000,
        image:product3
    },
    {
        id:'3',
        name:"Z-100 Wireless",
        price:5999,
        image:z200
    },
    {
        id:'4',
        name:"Z-100 Wireless",
        price:4999,
        image:z200
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