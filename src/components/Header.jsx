import React, { useState } from 'react'

const Header = () => {

    const [showSearch, setshowSearch] = useState(true)

    const handleSearch = () => {
        setshowSearch(!showSearch)
    }

    return (
        <div className='flex flex-row justify-between items-center w-full fixed top-0 bg-slate-100 py-1.5 px-3 md:py-3 md:px-6'>
            {showSearch && <div className='w-3/12 md:w-2/12 flex justify-start gap-4 flex-row'>
                <i className="hidden md:block text-2xl ri-menu-fill"></i>
                <img className='sm:w-32 w-60 md:w-28' src='https://imgs.search.brave.com/ZkmciWYxBPpDh_MtRVSqu6hNmBsU9tpAEHN9oo0JKLI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA3LzQ2Lzg0/LzM2MF9GXzUwNzQ2/ODQ3OV9IZnJwVDdD/SW9ZVEJaU0dSUWk3/UmNXZ285OHdvM3Zi/Ny5qcGc' alt='logo'></img>

            </div>}

            <div className='w-6/12'>
                <div className='w-full hidden md:flex relative items-center justify-center '>
                    <input className='w-full  border-black border text-base pl-4 py-1.5 rounded-full' type='text' placeholder='Search'></input>
                    <button className='absolute right-0 px-4'><i className="text-xl  ri-search-line"></i></button>
                </div>
            </div>

            {
                !showSearch && <div onClick={handleSearch} className='cursor-pointer'><i className="text-xl ri-arrow-left-line"></i></div>
            }

            <div className='w-2/12 flex justify-end flex-row gap-5 items-center'>
                {showSearch && <div className="w-2/12 md:hidden" onClick={handleSearch}>
                    <button className=''><i className="text-lg md:text-xl  ri-search-line"></i></button>
                </div>}
                <i className="text-xl md:text-2xl ri-user-fill"></i>

            </div>
        </div>
    )
}

export default Header
