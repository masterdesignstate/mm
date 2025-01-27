import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextArea from "@/Components/TextArea.jsx"
import {FilePond, registerPlugin} from "react-filepond";
import React, {useState} from "react";
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import {ray, Ray} from "node-ray/web"
import ProfileAttribute from "@/Components/Shared/ProfileAttribute.jsx";
import {AspectRatio} from "@radix-ui/react-aspect-ratio";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

Ray.useDefaultSettings()

export default function MyProfile({auth, profile, questions}) {

    // const [dp, setDp] = useState("")
    // const [pics, setPics] = useState([])
    // const submit = (e) => {
    //     e.preventDefault();
    //
    //     post(route('on-boarding'), {
    //
    //     });
    // };
    return (
        <AuthenticatedLayout

        >
            <Head title="My Profile"/>

            <div className="max-w-5xl mx-auto px-4 lg:px-0 flex items-center justify-between my-16">
                <span></span>
                <div>
                    <Link href={route('on-boarding')}>
                        <button className="bg-bpurple-500 text-white rounded-full  px-4 py-2">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <section className="flex items-center justify-center  max-w-4xl mx-auto my-16">
                <div className="grid lg:grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <h2 className="text-bpurple-500">{auth.user.name}</h2>
                        <div className="w-full px-4 lg:px-0 lg:w-[300px]">
                            <AspectRatio ratio={9 / 16}>
                                <div className="w-full bg-gray-300 h-64 rounded-lg">

                                </div>
                                {/*<Image src="..." alt="Image" className="rounded-md object-cover"/>*/}
                            </AspectRatio>
                        </div>
                        <div className="block w-full "></div>
                    </div>
                    <div>
                        <div className="w-full space-y-2 px-4 lg:px-0">
                            <div>
                                <ProfileAttribute label="Username" attribute={profile.uname}/>
                            </div>
                            <div>
                                <ProfileAttribute label="Zip" attribute={profile.zip}/>
                            </div>
                            <div>
                                <ProfileAttribute label="Age" attribute={profile.age}/>
                            </div>

                            <div>
                                <ProfileAttribute label="Motto" attribute={profile.tag_line}/>
                            </div>

                            <div className="">
                                <div className="text-sm">Gender</div>
                                {/*<ul className="flex justify-between">*/}
                                {/*    <li>{questions[1].descriptor1}</li>*/}
                                {/*    <li>{questions[1].descriptor3}</li>*/}
                                {/*</ul>*/}
                                <div className="text-bpurple-500 text-lg">{questions[1].answer.answer}</div>
                            </div>

                            <div className="">
                                <div className="text-sm">Relationship Preference</div>
                                <div className="text-bpurple-500 text-lg">{questions[0].answer.answer}</div>
                            </div>

                            <div>
                                <ProfileAttribute label="Bio" attribute={profile.bio}/>
                            </div>

                            <div className="mt-4 flex items-center justify-start">
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </AuthenticatedLayout>
    );
}
