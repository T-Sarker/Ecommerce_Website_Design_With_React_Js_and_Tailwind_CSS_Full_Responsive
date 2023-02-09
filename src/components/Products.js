import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Products = () => {

    const [tabNo, setTabNo] = useState(1)
    return (
        <>
            <div className="text-center">
                <p className='text-2xl font-black'>Products</p>
            </div>
            <div className="tabsWrapper my-8">
                <ul className='w-[50%] flex justify-between mx-auto'>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(1) }}>New Arraival</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(2) }}>Best Selling</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(3) }}>Trendy</li>
                </ul>
                <div className="tabContents">
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 1 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>1Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 2 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>2Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 3 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>3Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
