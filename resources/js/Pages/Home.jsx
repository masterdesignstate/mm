import { Head, Link } from '@inertiajs/react';

export default function Home() {

    return (
        <>
            <Head title="Home" />
            <div className="bg-[#100336] text-white w-screen h-screen flex items-center justify-center">
                Coming Soon
                <div>
                <Link href={route('login')}>Login</Link>
                </div>
            </div>
        </>
    );
}
