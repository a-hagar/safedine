import Logo from './logoComponent';

const Navbar = () => {
    return(
        <nav>
            <div className="max-w-6x1 mx-auto px-10 py-5 my-2">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center text-gray-700 hover:text-gray-900">
                            <Logo className='mt-2'/>
                            <h1 className="font-bold text-3xl pt-8">SafeDine</h1>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="/about" className="pt-8 px-2">About</a>
                        
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar