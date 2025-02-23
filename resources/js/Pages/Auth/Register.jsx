import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <h1 className="text-4xl my-8 px-4 font-bold text-center uppercase">Register</h1>
            <div className="w-[90%] max-w-96 lg:w-90 h-2 mx-auto">
            </div>
            <form onSubmit={submit} className=" w-[90%] max-w-96 lg:w-90 mx-auto">
                <div>
                    <InputLabel htmlFor="name" value="Name"/>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="E-mail"/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password"/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    {/*<PrimaryButton className="ms-4" disabled={processing}>*/}
                    {/*    Register*/}
                    {/*</PrimaryButton>*/}
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <button className="bg-bpurple-500 text-white w-full py-4 rounded-full" disabled={processing}>Create Account
                    </button>
                    {/*<PrimaryButton className="ms-4" disabled={processing}>*/}
                    {/*    Log in*/}
                    {/*</PrimaryButton>*/}
                </div>
                <div className="text-center my-4 w-2/3 mx-auto">
                    By continuing, you agree to our
                    <Link href={route('tos')} className="mx-2 text-pink-400">
                        Terms of Service
                    </Link>

                </div>
            </form>
        </GuestLayout>
    );
}
