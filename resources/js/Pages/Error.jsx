import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/Button.jsx";

export default function Error({ message }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head title="Access Denied" />
            <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
            <p className="text-lg text-gray-700 mt-4">{message || 'You do not have permission to view this page.'}</p>
            <Button asChild>
            <a href={route('filament.admin.pages.dashboard')} >Go Back</a>
            </Button>
        </div>
    );
}
