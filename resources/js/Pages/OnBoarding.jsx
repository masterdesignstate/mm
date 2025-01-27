import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextArea from "@/Components/TextArea.jsx"
import {FilePond, registerPlugin} from "react-filepond";
import {useState} from "react";
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import {ray, Ray} from "node-ray/web"

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

Ray.useDefaultSettings()

export default function OnBoarding({auth,profile}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        uname: profile.uname ?? "",
        tag_line: profile.tag_line ?? "",
        age:profile.age ?? "",
        zip:profile.zip ?? "",
        bio:profile.bio ?? "",
    });
    const [dp, setDp] = useState("")
    const [pics, setPics] = useState([])
    const submit = (e) => {
        e.preventDefault();

        post(route('on-boarding'), {

        });
    };
    return (
        <AuthenticatedLayout

        >
            <Head title="Dashboard" />

            <section className="flex items-center justify-center  max-w-4xl mx-auto my-36">

            <div className="grid lg:grid-cols-2 gap-8 w-full px-4 lg:px-0">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h2 className="text-bpurple-500">{auth.user.name}</h2>
                    <div className="w-full  rounded-lg">
                        <FilePond
                            className="h-96"
                            files={dp}
                            onupdatefiles={setDp}
                            allowMultiple={false}
                            server="/api"
                            name="dp" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your Profile Pic or <span class="filepond--label-action">Browse</span>'
                        />
                    </div>
                    <div className="block w-full ">
                        <FilePond
                            files={pics}
                            onupdatefiles={setPics}
                            allowMultiple={true}
                            maxFiles={5}
                            server="/api"
                            name="dp" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your Profile Pic or <span class="filepond--label-action">Browse</span>'
                        />
                    </div>
                </div>
                <div>
                    <form onSubmit={submit} className="w-full">
                        <div className="w-full">
                            <InputLabel htmlFor="uname" value="Username"/>

                            <TextInput
                                id="uname"
                                type="text"
                                name="uname"
                                value={data.uname}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('uname', e.target.value)}
                            />

                            <InputError message={errors.uname} className="mt-2"/>
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="motto" value="Motto"/>

                            <TextInput
                                id="motto"
                                type="text"
                                name="tag_line"
                                value={data.tag_line}
                                className="mt-1 block w-full"
                                autoComplete="tag_line"
                                isFocused={true}
                                onChange={(e) => setData('tag_line', e.target.value)}
                            />

                            <InputError message={errors.tag_line} className="mt-2"/>
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="age" value="Age"/>

                            <TextInput
                                id="age"
                                type="number"
                                min="0"
                                name="age"
                                value={data.age}
                                className="mt-1 block w-full"
                                autoComplete="age"
                                isFocused={true}
                                onChange={(e) => setData('age', e.target.value)}
                            />

                            <InputError message={errors.age} className="mt-2"/>
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="zip" value="Zip"/>

                            <TextInput
                                id="zip"
                                type="number"
                                min="0"
                                name="zip"
                                value={data.zip}
                                className="mt-1 block w-full"
                                autoComplete="zip"
                                isFocused={true}
                                onChange={(e) => setData('zip', e.target.value)}
                            />

                            <InputError message={errors.zip} className="mt-2"/>
                        </div>


                        <div className="w-full">
                            <InputLabel htmlFor="bio" value="Bio"/>


                            <TextArea
                                id="bio"
                                name="bio"
                                className="mt-1 block w-full"
                                autoComplete="bio"
                                isFocused={true}
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                            >
                            </TextArea>

                            <InputError message={errors.bio} className="mt-2"/>
                        </div>


                        <div className="mt-4 flex items-center justify-start">
                            <button className="bg-bpurple-500 text-white min-w-[60%] py-4 rounded-full"
                                    disabled={processing}>Submit
                            </button>

                        </div>

                    </form>
                </div>
            </div>
            </section>

        </AuthenticatedLayout>
    );
}
