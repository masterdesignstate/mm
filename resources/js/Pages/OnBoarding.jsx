import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextArea from "@/Components/TextArea.jsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Cancel01Icon, Image01Icon, ImageUploadIcon } from "@hugeicons/react";
import { Button } from "@/Components/ui/Button.jsx";
import GoBack from "@/Components/Shared/GoBack.jsx";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
);

export default function OnBoarding({
    auth,
    profile,
    existingDp,
    existingGallery,
    canNotEdit,
}) {
    console.log(canNotEdit);

    const csrf_token = usePage().props.csrf_token;

    const [uploading, setUploading] = useState(false);
    const [dp, setDp] = useState(existingDp);
    const [gallery, setGallery] = useState(existingGallery);
    const pondRef = useRef(null);

    const { data, setData, post, progress, processing, errors, reset } =
        useForm({
            uname: profile.uname ?? "",
            tag_line: profile.tag_line ?? "",
            date_of_birth: profile.date_of_birth ?? "1993-08-01",
            zip: profile.zip ?? "",
            bio: profile.bio ?? "",
            dp: null,
            gallery: [],
        });

    useEffect(() => {
        if (existingDp.length > 0) {
            setData("dp", existingDp[0].source);
        }
    }, []);

    const [pics, setPics] = useState([]);
    const [dpUrl, setDpUrl] = useState("");
    const [uploadDp, setUploadDp] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        console.log(document.querySelector("input[name=dp]").value);
        setData("dp", document.querySelector("input[name=dp]").value);
        post(route("on-boarding"), {});
    };

    const handleDpChange = (e) => {
        setData("dp", e.target.files[0]);
        setDpUrl(URL.createObjectURL(e.target.files[0]));
        console.log(dpUrl);
    };
    const removeImage = (index) => {
        const newImages = [...data.gallery];
        const newPreviews = [...previews];

        newImages.splice(index, 1);
        newPreviews.splice(index, 1);

        setData("gallery", newImages);
        setPreviews(newPreviews);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto my-8 flex max-w-4xl items-center justify-center">
                <form onSubmit={submit} className="w-full">
                    <div className="grid w-full items-center gap-8 px-4 lg:grid-cols-2 lg:px-0">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h2 className="text-bpurple-500 dark:text-white">
                                {auth.user.name}
                            </h2>

                            <div className="relative w-full rounded-lg lg:w-[300px]">
                                {!uploadDp ? (
                                    <AspectRatio
                                        ratio={10 / 14}
                                        className="overflow-hidden rounded-3xl border-8 border-bc-600 bg-bc-50"
                                    >
                                        <div className="flex h-full w-full items-center justify-center">
                                            <img
                                                src={profile.dp}
                                                alt="Image"
                                                className="h-full object-cover"
                                            />
                                        </div>
                                        <div
                                            className="absolute right-0 top-0 flex size-12 items-center justify-center rounded-full bg-bpurple-500 text-white"
                                            onClick={() => setUploadDp(true)}
                                        >
                                            <ImageUploadIcon size={24} />
                                        </div>
                                    </AspectRatio>
                                ) : (
                                    <div className="relative">
                                        <div className="w-full">
                                            <FilePond
                                                maxFileSize="2MB"
                                                ref={pondRef}
                                                files={dp}
                                                onupdatefiles={setDp}
                                                server={{
                                                    url: route("dp-upload"),
                                                    method: "POST",
                                                    headers: {
                                                        "X-CSRF-TOKEN":
                                                            csrf_token,
                                                    },
                                                    remove: (source, load, error) => {
                                                        const image = existingDp[0]
                                                        console.log(image);

                                                        router.delete(
                                                            route("file.remove"),
                                                            {
                                                                data: {
                                                                    fake: "Testing",
                                                                    key: image,
                                                                },
                                                                onSuccess: () => {
                                                                    window.location = window.location
                                                                    router.reload({only:['exitingGallery']})
                                                                    load(); // Remove from UI
                                                                },
                                                                onError: (err) => {
                                                                    error(
                                                                        "Failed to delete image",
                                                                    );
                                                                },
                                                            },
                                                        );
                                                    },
                                                    load: (
                                                        source,
                                                        load,
                                                        error,
                                                    ) => {
                                                        fetch(source, {
                                                            method: "GET",
                                                            mode: "cors",
                                                        })
                                                            .then(
                                                                (response) => {
                                                                    if (
                                                                        !response.ok
                                                                    ) {
                                                                        throw new Error(
                                                                            `HTTP error! Status: ${response.status}`,
                                                                        );
                                                                    }
                                                                    return response.blob();
                                                                },
                                                            )
                                                            .then((blob) => {
                                                                const fileName =
                                                                    source
                                                                        .split(
                                                                            "/",
                                                                        )
                                                                        .pop();
                                                                const file =
                                                                    new File(
                                                                        [blob],
                                                                        fileName,
                                                                        {
                                                                            type: blob.type,
                                                                        },
                                                                    );
                                                                load(file);
                                                            })
                                                            .catch((err) => {
                                                                console.error(
                                                                    "FilePond Load Error:",
                                                                    err,
                                                                );
                                                                error(err);
                                                            });
                                                        setUploading(false);
                                                    },
                                                    revert: (
                                                        uniqueId,
                                                        load,
                                                        error,
                                                    ) => {
                                                        router.post(
                                                            route(
                                                                "file.remove",
                                                            ),
                                                            { key: uniqueId },
                                                            {
                                                                onSuccess:
                                                                    () => {
                                                                        load(); // Remove from UI
                                                                    },
                                                                onError: (
                                                                    err,
                                                                ) => {
                                                                    error(
                                                                        "Failed to delete image",
                                                                    );
                                                                },
                                                            },
                                                        );
                                                    },
                                                }}
                                                name="dp"
                                                labelIdle='<span class="filepond--label-actio">Click to upload your profile picture </span>'
                                                onaddfilestart={() => {
                                                    // setUploading(true);
                                                    console.log(
                                                        "Uploading Started",
                                                    );
                                                }}
                                                onprocessfile={() => {
                                                    console.log(
                                                        "Uploading Completed",
                                                    );
                                                    setData("dp",document.querySelector("input[name=dp]").value)
                                                    setUploading(false);
                                                }}
                                            />
                                        </div>
                                        <InputError message={errors.dp} />
                                    </div>
                                )}
                            </div>
                            <div className="block w-full">
                                <div className="profile-gallery mx-auto w-full">
                                    <FilePond
                                        maxFileSize="2MB"
                                        className="h-auto"
                                        files={gallery}
                                        onupdatefiles={setGallery}
                                        allowMultiple={true}
                                        maxFiles={4}
                                        server={{
                                            url: route("gallery-item-upload"),
                                            method: "POST",
                                            headers: {
                                                "X-CSRF-TOKEN": csrf_token,
                                            },
                                            load: (source, load, error) => {
                                                fetch(source, {
                                                    method: "GET",
                                                    mode: "cors",
                                                })
                                                    .then((response) => {
                                                        if (!response.ok) {
                                                            throw new Error(
                                                                `HTTP error! Status: ${response.status}`,
                                                            );
                                                        }
                                                        return response.blob();
                                                    })
                                                    .then((blob) => {
                                                        const fileName = source
                                                            .split("/")
                                                            .pop();
                                                        const file = new File(
                                                            [blob],
                                                            fileName,
                                                            { type: blob.type },
                                                        );
                                                        load(file);
                                                    })
                                                    .catch((err) => {
                                                        console.error(
                                                            "FilePond Load Error:",
                                                            err,
                                                        );
                                                        error(err);
                                                    });
                                            },
                                            revert: (uniqueId, load, error) => {
                                                router.post(
                                                    route("file.remove"),
                                                    { key: uniqueId },
                                                    {
                                                        onSuccess: () => {
                                                            load(); // Remove from UI
                                                        },
                                                        onError: (err) => {
                                                            error(
                                                                "Failed to delete image",
                                                            );
                                                        },
                                                    },
                                                );
                                            },
                                            remove: (source, load, error) => {
                                                const image = existingGallery.find(item=>item.source === source)
                                                router.delete(
                                                    route("file.remove"),
                                                    {
                                                        data: {
                                                            fake: "Testing",
                                                            key: image,
                                                        },
                                                        onSuccess: () => {
                                                            window.location = window.location
                                                            router.reload({only:['exitingGallery']})
                                                            load(); // Remove from UI
                                                        },
                                                        onError: (err) => {
                                                            error(
                                                                "Failed to delete image",
                                                            );
                                                        },
                                                    },
                                                );
                                            },
                                        }}
                                        name="gallery"
                                        labelIdle='<span class="">Click to upload your gallery images. Max 4 items</span>'
                                        onaddfilestart={() => {
                                            // setUploading(true);
                                            console.log("Uploading Started");
                                        }}
                                        onprocessfile={() => {
                                            console.log("Uploading Completed");
                                            setUploading(false);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="w-full space-y-2">
                                {!canNotEdit && (
                                    <div className="rounded-full bg-bc-600 p-2 px-6 text-sm text-white">
                                        Note: Choose you username, date of birth
                                        and zip carefully. You will not be able
                                        to change them later.
                                    </div>
                                )}
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="uname"
                                        value="Username"
                                    />

                                    <TextInput
                                        id="uname"
                                        type="text"
                                        name="uname"
                                        disabled={canNotEdit}
                                        value={data.uname}
                                        className="mt-1 block w-full px-6 disabled:bg-bc-50 dark:disabled:bg-bc-600"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("uname", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.uname}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel htmlFor="motto" value="Motto" />

                                    <TextInput
                                        id="motto"
                                        type="text"
                                        name="tag_line"
                                        value={data.tag_line}
                                        className="mt-1 block w-full"
                                        autoComplete="tag_line"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("tag_line", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.tag_line}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="age"
                                        value="Date of Birth"
                                    />

                                    <TextInput
                                        id="age"
                                        type="date"
                                        min="0"
                                        name="age"
                                        disabled={canNotEdit}
                                        value={data.date_of_birth}
                                        className="mt-1 block w-full disabled:bg-bc-50 dark:text-white dark:disabled:bg-bc-600"
                                        autoComplete="age"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "date_of_birth",
                                                e.target.value,
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.date_of_birth}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel htmlFor="zip" value="Zip" />

                                    <select
                                        id="zip"
                                        name="zip"
                                        disabled={canNotEdit}
                                        value={data.zip}
                                        autoComplete="zip"
                                        onChange={(e) =>
                                            setData("zip", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-full border-gray-300 px-6 py-4 text-sm text-bc-200 focus:border-bc-600 focus:ring-bc-600 disabled:bg-bc-50 dark:bg-transparent dark:text-bc-50 dark:disabled:bg-bc-600"
                                    >
                                        <option value="" disabled>
                                            Select Zip from Dropdown
                                        </option>
                                        <option value="78701">78701</option>
                                        <option value="78702">78702</option>
                                        <option value="78703">78703</option>
                                        <option value="78704">78704</option>
                                        <option value="78705">78705</option>
                                        <option value="78717">78717</option>
                                        <option value="78723">78723</option>
                                        <option value="78724">78724</option>
                                        <option value="78727">78727</option>
                                        <option value="78728">78728</option>
                                        <option value="78729">78729</option>
                                        <option value="78731">78731</option>
                                        <option value="78732">78732</option>
                                        <option value="78734">78734</option>
                                        <option value="78735">78735</option>
                                        <option value="78739">78739</option>
                                        <option value="78741">78741</option>
                                        <option value="78744">78744</option>
                                        <option value="78745">78745</option>
                                        <option value="78746">78746</option>
                                        <option value="78747">78747</option>
                                        <option value="78748">78748</option>
                                        <option value="78749">78749</option>
                                        <option value="78750">78750</option>
                                        <option value="78752">78752</option>
                                        <option value="78753">78753</option>
                                        <option value="78754">78754</option>
                                        <option value="78757">78757</option>
                                        <option value="78758">78758</option>
                                        <option value="78759">78759</option>
                                    </select>

                                    {/*<TextInput*/}
                                    {/*    id="zip"*/}
                                    {/*    type="number"*/}
                                    {/*    min="0"*/}
                                    {/*    name="zip"*/}
                                    {/*    disabled={canNotEdit}*/}
                                    {/*    value={data.zip}*/}
                                    {/*    className="mt-1 block w-full disabled:bg-bc-50 dark:disabled:bg-bc-600"*/}
                                    {/*    autoComplete="zip"*/}
                                    {/*    isFocused={true}*/}
                                    {/*    onChange={(e) =>*/}
                                    {/*        setData("zip", e.target.value)*/}
                                    {/*    }*/}
                                    {/*/>*/}

                                    <InputError
                                        message={errors.zip}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="w-full">
                                    <InputLabel htmlFor="bio" value="Bio" />

                                    <TextArea
                                        id="bio"
                                        name="bio"
                                        cols={14}
                                        maxLength={160}
                                        className="mt-1 block min-h-24 w-full resize-none rounded-3xl px-6 py-4 text-sm text-bc-200"
                                        autoComplete="bio"
                                        isFocused={true}
                                        value={data.bio}
                                        onChange={(e) =>
                                            setData("bio", e.target.value)
                                        }
                                    ></TextArea>

                                    <InputError
                                        message={errors.bio}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="!mt-6 flex items-center justify-start">
                                    <Button
                                        className="bg-bpurple-500 px-12 py-6 text-xl text-white"
                                        disabled={uploading || processing}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
