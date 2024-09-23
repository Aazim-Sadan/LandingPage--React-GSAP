import React from 'react'
import { FaFolderTree } from 'react-icons/fa6'

function Footer() {
    return (
        <footer>
            <div className='w-[80%] mx-auto flex justify-around items-center p-4 mb-[20px] bg-slate-100 rounded-xl'>
                <div>
                    <p className='font-bold text-green-500 text-3xl'>Printify</p>
                </div>
                <ul className="menu">
                    <p className='text-l font-bold mt-4 pb-2'>Integrations</p>
                    <li>Spotify</li>
                    <li>ebay</li>
                    <li>Amazom</li>
                    <li>Printify API</li>
                    <li>Woo Commerce</li>
                    <li>Printify Pop-Up Store</li>
                    <li>Wix</li>
                </ul>

                <ul className="menu">
                    <p className='text-l font-bold mt-4 pb-2'>Discover</p>
                    <li>Blog</li>
                    <li>Guides</li>
                    <li>Products</li>
                    <li>Etsy print-on-demand</li>
                    <li>Shopify print-on-demand</li>
                    <li>Brands</li>
                    <li>Pricing</li>
                </ul>

                <ul className="menu">
                    <p className='text-l font-bold mt-4 pb-2'>Start selling</p>
                    <li>Custom T-shirts</li>
                    <li>Custom Hoodies</li>
                    <li>Custom Mugs</li>
                    <li>Custom Socks</li>
                    <li>Custom Backpacks</li>
                    <li>Custom Branding</li>
                    <li>Sell on Etsy</li>
                </ul>

                <ul className="menu">
                    <p className='text-l font-bold mt-4 pb-2'>Printify</p>
                    <li>Print on Demand</li>
                    <li>Print Providers</li>
                    <li>Experts Program</li>
                    <li>Become a Partner</li>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>WWebinars</li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer