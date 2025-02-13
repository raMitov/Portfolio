import React from 'react'

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                        <a href="/" className="text-neutral-400
                        font-bold text-xl hover:text-white transition-colors">
                            Radoslav
                        </a>
                    <button>
                        <img src={"/4918906_align_checklist_format_list_menu_icon.svg"} alt='menu'
                        className='w-10 h-10'/>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Navbar
