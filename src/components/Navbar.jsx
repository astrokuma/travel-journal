import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    
    return(
        <nav className='flex gap-2 p-4 justify-center bg-rose-500 text-white font-semibold text-xl'>The Travel Journal
            <PaperAirplaneIcon className="h-5 w-5 self-center" />
        </nav>
    )
}