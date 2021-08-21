import Logo from './logoComponent';

const Navbar = () => {
    return(
        <nav>
            <div class="max-w-6x1 mx-auto px-10 py-5 my-2">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
                        <div>
                            <a href="/" class="flex items-center text-gray-700 hover:text-gray-900">
                            <Logo class='mt-2'/>
                            <h1 class="font-bold text-3xl pt-8">SafeDine</h1>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1">
                        <a href="/about" class="pt-8 px-2">About</a>
                        <a href="/contact" class="pt-8">Contact</a>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar