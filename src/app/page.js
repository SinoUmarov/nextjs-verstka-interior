import React from 'react'
import img1 from '../../public/images/mockup-white-wall-loft-style-house-with-sofa-accessories-room-3d-rendering 1.png'
import img2 from '../../public/images/Group 2 (2).png'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import img3 from '../../public/images/image-asset-removebg-preview 1.png'
import img4 from '../../public/images/desk-lamp-marble-table 1.png'
import img5 from '../../public/images/picture-frame-by-velvet-armchair-removebg-preview 1.png'
import img6 from '../../public/images/GUEST_7d88546c-eb7a-47ae-ae7e-7d30a56a8051-removebg-preview 1.png'
import img7 from '../../public/images/images__22_-removebg-preview 1.png'
import img8 from '../../public/images/images__20_-removebg-preview 1.png'
import img9 from '../../public/images/mockup-white-wall-loft-style-house-with-sofa-accessories-room-3d-rendering 1.png'
import img10 from '../../public/images/1655320691_Emily_Dining_Chair_Light_Grey_PU_Chrome_front_three_quarter-removebg-preview 1.png'

export default function Page() {
  return (
    <>
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header>
          <nav className="flex flex-wrap items-center justify-between bg-[#D3CBC5] p-4 w-full">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <Image src={img2} alt="Logo" width={120} height={40} />
            </div>
            
            <ul className="hidden md:flex gap-6 text-[#1B1A1A]">
              <li className="hover:text-gray-600 cursor-pointer">Home</li>
              <li className="hover:text-gray-600 cursor-pointer">Pages</li>
              <li className="hover:text-gray-600 cursor-pointer">Services</li>
              <li className="hover:text-gray-600 cursor-pointer">Projects</li>
              <li className="hover:text-gray-600 cursor-pointer">Blog</li>
              <li className="hover:text-gray-600 cursor-pointer">Contact us</li>
            </ul>
            
            <div className="flex items-center gap-4">
              <SearchIcon className="cursor-pointer" />
              <ShoppingCartIcon className="cursor-pointer" />
              <button className="md:hidden">☰</button>
            </div>
          </nav>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 w-full h-auto">
              <Image 
                src={img1} 
                alt="Interior design" 
                layout="responsive"
                width={1350}
                height={600}
                className="object-cover"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 sm:w-1/2">
              <h1 className="text-lg sm:text-xl">INTERIOR</h1>
              <h2 className="text-3xl sm:text-5xl font-bold my-2">Home Designs Made Easy</h2>
              <p className="text-xl">
                $416.00 <span className="text-gray-600 text-sm">Starting</span>
              </p>
              <button className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>
        </header>

        {/* Product Carousel */}
        <section className="py-10">
          <h2 className="sr-only">Product Collection</h2>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
              {[img3, img4, img5].map((img, index) => (
                <div key={index} className="bg-gray-100 p-4 w-full sm:w-64 text-center rounded-lg">
                  <h3 className="text-lg font-medium mb-2">
                    {index === 0 ? "New Chair Collection 2022" : 
                     index === 1 ? "Lamp Desk" : "Modern Chair Collection 2022"}
                  </h3>
                  <button className="border border-black px-4 py-1 mb-4 hover:bg-gray-200">
                    Shop Now
                  </button>
                  <div className="h-48 flex items-center justify-center">
                    <Image 
                      src={img} 
                      alt="Product" 
                      width={200} 
                      height={200}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex mt-6">
              <button className="mx-2 text-2xl">&#x276E;</button>
              <button className="mx-2 text-2xl">&#x276F;</button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <p className="uppercase text-sm text-gray-500">Professional Team</p>
              <h2 className="text-2xl sm:text-3xl font-bold">The Best New Arrivals</h2>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <div className="flex flex-wrap gap-2">
                {['Desk', 'Bedroom', 'Lighting', 'Accessories'].map((item, index) => (
                  <button 
                    key={index}
                    className={`px-3 py-1 rounded ${index === 0 ? 'bg-black text-white' : 'bg-transparent'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {img: img6, title: "Blue chair", price: "15.00", oldPrice: "20.00", rating: 5},
              {img: img3, title: "Blue chair", price: "12.00", oldPrice: "19.00", rating: 4},
              {img: img5, title: "Coral vase", price: "15.00", oldPrice: null, rating: 4},
              {img: img6, title: "Coffee table set", price: "15.00", oldPrice: null, rating: 5},
              {img: img7, title: "Decorative vase", price: "25.00", oldPrice: null, rating: 4},
              {img: img8, title: "Coral vase", price: "12.00", oldPrice: "20.00", rating: 5},
              {img: img6, title: "Gray sofa", price: "15.00", oldPrice: "29.00", rating: 4},
              {img: img10, title: "Black chair", price: "15.00", oldPrice: "20.00", rating: 4}
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="h-48 flex items-center justify-center">
                  <Image 
                    src={item.img} 
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <h3 className="mt-4 font-medium">{item.title}</h3>
                <p className="my-2">
                  {item.oldPrice && <del className="text-gray-500">${item.oldPrice}</del>} 
                  <span className="font-bold ml-2">${item.price}</span>
                </p>
                <div className="flex justify-center space-x-2">
                  <span>♡</span>
                  <span>👁</span>
                  <span>🛒</span>
                </div>
                <div className="text-yellow-400 mt-2">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Products */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <p className="uppercase text-sm text-[#c49b6c]">Popular Product</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Top Special Product</h2>
            </div>
            <button className="border border-black px-4 py-2 mt-4 sm:mt-0 hover:bg-gray-100">
              See More Product
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {img: img5, title: "Blue chair", price: "15.00", oldPrice: "20.00", rating: 5},
              {img: img6, title: "Blue chair", price: "12.00", oldPrice: "19.00", rating: 4},
              {img: img3, title: "Coral vase", price: "15.00", oldPrice: null, rating: 4},
              {img: img5, title: "Coffee table set", price: "15.00", oldPrice: null, rating: 5}
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="h-48 flex items-center justify-center">
                  <Image 
                    src={item.img} 
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <h3 className="mt-4 font-medium">{item.title}</h3>
                <p className="my-2">
                  {item.oldPrice && <del className="text-gray-500">${item.oldPrice}</del>} 
                  <span className="font-bold ml-2">${item.price}</span>
                </p>
                <div className="flex justify-center space-x-2">
                  <span>♡</span>
                  <span>👁</span>
                  <span>🛒</span>
                </div>
                <div className="text-yellow-400 mt-2">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {icon: "🚚", title: "Free Shipping", desc: "Orders over $139"},
                {icon: "↩️", title: "Free Returns", desc: "Within 25 Days"},
                {icon: "🔒", title: "100% Secure", desc: "Secure Payment"},
                {icon: "🏷️", title: "Best Price", desc: "Guaranteed Gifts"}
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-bold text-lg">{item.icon} {item.title}</p>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase">Recent Articles</p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
              Read Our Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {img: img5, date: "21 Nov", comments: 3, title: "Things to Know When Choosing the Perfect Sofa"},
              {img: img4, date: "21 Nov", comments: 4, title: "Things to Know When Choosing the Perfect Sofa"},
              {img: img3, date: "21 Nov", comments: 2, title: "Things to Know When Choosing the Perfect Sofa"}
            ].map((article, index) => (
              <article key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 relative">
                  <Image 
                    src={article.img} 
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="mr-4">{article.date}</span>
                    <span>{article.comments} Comments</span>
                  </div>
                  <h3 className="text-lg font-medium mb-4">{article.title}</h3>
                  <button className="text-sm font-semibold border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">
                    See more articles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#e5dfd8] py-12 mt-12 rounded-t-3xl md:rounded-t-[150px]">
          <div className="text-center px-4">
            <div className="flex justify-center mb-8">
              <Image src={img2} alt="Logo" width={200} height={60} />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Join Now For Early Access</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Your email address"
                className="border rounded-lg px-4 py-2 flex-grow"
              />
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-6 border-t border-gray-300">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © Copyright 2025. Designed & Developed by <span className="font-semibold">YourName</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.89-2.38 8.6 8.6 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9 12.14 12.14 0 01-8.8-4.47 4.28 4.28 0 001.32 5.72A4.2 4.2 0 012 9.71v.05a4.28 4.28 0 003.43 4.19 4.27 4.27 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.67 8.67 0 0022.46 6z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}