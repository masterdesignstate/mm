import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import background from '../../../public/img/white-background.png'
import grid from '../../../public/img/Grid.png'

export default function GuestLayout({ children }) {
    return (
        <div className="flex h-screen flex-col items-center bg-white pt-6 justify-between  " style={{backgroundImage: `url(${grid})`}}>
            <div className="mt-8">
                <Link href="/">
                    <ApplicationLogo className="w-72 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="">
                {children}
            </div>
            <div className="bg-repeat-x w-full h-52" style={{backgroundImage: `url(${background})`}} >
                {/*<img src="img/white-background.png" className="object-cover w-full" alt=""/>*/}
            </div>
        </div>
    );
}
