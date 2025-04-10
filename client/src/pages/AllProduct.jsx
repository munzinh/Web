import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProduct = () => {

    const { products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        } else {
            setFilteredProducts(products)
        }
    }, [products, searchQuery])

    return (
        <div className='mt-16 flex flex-col max-w-7xl mx-auto'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>Tất cả sản phẩm</p>
                <div className='w-16 h-0.5 bg-[#d70018] rounded-full'></div>
            </div>

            <div className='max-w-7xl mt-6'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5'>
                    {filteredProducts.filter((product) => product.inStock).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProduct