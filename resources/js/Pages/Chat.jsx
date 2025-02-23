import React, { useCallback, useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TextArea from "@/Components/TextArea.jsx";
import {
    router,
    Link,
    usePoll,
    Head,
    useForm,
    usePage,
} from "@inertiajs/react";
import {
    ArrowLeft01Icon,
    ArrowRight01Icon,
    Image01Icon,
    Message01Icon,
    Search01Icon,
    SmileIcon,
} from "@hugeicons/react";
import FromMessage from "@/Components/Shared/Chat/FromMessage.jsx";
import ToMessage from "@/Components/Shared/Chat/ToMessage.jsx";
import { useDropzone } from "react-dropzone";
import { toast } from "@/hooks/use-toast.js";
import GoBack from "@/Components/Shared/GoBack.jsx";
import EmojiPicker from "emoji-picker-react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { ray } from "node-ray/web";

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
);


const Chat = ({ users, me, messages, partner }) => {

    // console.log(messages);
    const props = usePage().props;
    const {csrf_token} = usePage().props;
    // usePoll(3000, {
    //     only: ['users']
    // })
    const { data, setData, post, progress, processing, errors, reset } =
        useForm({
            from_user_id:me.id,
            to_user_id:partner.id,
            gallery: [],
            message_type:"msg",
            human_time:"",
            message:"",
        });
    const [files, setFiles] = useState([]);

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("msg");
    const [chatMessages, setChatMessages] = useState(messages);

    const [showFileUpload, setShowFileUpload] = useState(false);

    const messagesEndRef = useRef(null);

    const [showSidebar, setShowSidebar] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);

    const [previews, setPreviews] = useState([]);

    const [gallery, setGallery] = useState([]);

    const [imageMessage,setImageMessage] = useState(null)

    useEffect(() => {
        if (partner.profile === null) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, [partner]);

    const onEmojiClick = (emojiData) => {
        setChosenEmoji(emojiData);
        setShowEmojiKeyboard(false);
        setMessage((prev) => prev + emojiData.emoji);
    };

    // const onDrop = (acceptedFiles) => {
    //     // Generate previews for the selected files
    //     const filePreviews = acceptedFiles.map((file) =>
    //         Object.assign(file, {
    //             preview: URL.createObjectURL(file),
    //         }),
    //     );
    //     setFiles(filePreviews); // Update state with file previews
    // };
    //
    // const { getRootProps, getInputProps } = useDropzone({
    //     onDrop,
    //     accept: "image/*", // Only allow images
    //     multiple: true, // Allow multiple files
    // });

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop =
                messagesEndRef.current.scrollHeight;
        }
        Echo.channel(`chat`).listen("MessageSentEvent", (e) => {
            const new_message = e.message;
            if (
                new_message.from_user_id === partner.id &&
                new_message.to_user_id === me.id
            ) {
                console.log(new_message, me.id, partner.id);
                setChatMessages([]);
                const updated_messages = [...chatMessages, new_message];
                setChatMessages(updated_messages);
            }
        });
    }, [chatMessages]);

    const sendMessage = () => {
        const time = new Date();
        if (gallery.length > 0) {
            setMessageType("image")

            setData('message_type',messageType)
            setData('human_time',time
                .toLocaleTimeString()
                .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")),


                post(route('send-message'));

            // const newMessage = {
            //     from_user_id: me.id,
            //     message_type: messageType,
            //     to_user_id: partner.id,
            //     message: "",
            //     gallery: gallery,
            //     human_time: time
            //         .toLocaleTimeString()
            //         .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"),
            // };
            // router.post(route("send-message"), newMessage, {
            //     preserveScroll: true,
            //     onSuccess: () => {
            //         // setChatMessages([]);
            //         // const updated_messages = [...chatMessages, ...newMessage];
            //         // setChatMessages(updated_messages);
            //         setMessage("");
            //         setMessageType("msg")
            //         setShowFileUpload(false);
            //         // window.location.reload();
            //         router.reload()
            //     },
            // });
        } else {
            setChatMessages([...chatMessages, message]);
            const newMessage = {
                from_user_id: me.id,
                message_type: messageType,
                to_user_id: partner.id,
                message: message,
                human_time: time
                    .toLocaleTimeString()
                    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"),
            };
            router.post(route("send-message"), newMessage, {
                preserveScroll: true,
                onSuccess: () => {
                    setChatMessages([]);
                    const updated_messages = [...chatMessages, newMessage];
                    setChatMessages(updated_messages);
                    setMessage("");
                    router.reload({only:['messages']})
                },
            });
        }
    };

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessage();
        }
    };

    const onDrop = useCallback(
        (acceptedFiles) => {
            if (gallery.length + acceptedFiles.length >= 5) {
                // alert("You can only upload up to 4 images.");
                toast({
                    title: "Error",
                    variant: "destructive",
                    description: "You can only upload up to 4 images.",
                });
                return;
            }
            const filteredFiles = acceptedFiles.filter((newFile) => {
                return !gallery.some(
                    (existingFile) =>
                        existingFile.name === newFile.name &&
                        existingFile.size === newFile.size,
                );
            });

            if (filteredFiles.length < acceptedFiles.length) {
                // alert("Duplicate images are not allowed.");
                toast({
                    title: "Error",
                    variant: "destructive",
                    description: "Duplicate images are not allowed.",
                });
                return;
            }
            const newPreviews = acceptedFiles.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));

            console.log(acceptedFiles);
            setGallery([...gallery, ...acceptedFiles]);
            setPreviews([...previews, ...newPreviews]);
        },
        [gallery, previews],
    );

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop,
    });

    const removeImage = (index) => {
        const newImages = [...gallery];
        const newPreviews = [...previews];

        newImages.splice(index, 1);
        newPreviews.splice(index, 1);

        setGallery(newImages);
        setPreviews(newPreviews);
    };
    return (
        <AuthenticatedLayout>
            <Head
                title={
                    partner?.name?.length > 0 ? `${partner.name} Chat ` : "Chat"
                }
            />
            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto my-8 grid max-w-6xl items-start gap-4 px-4 lg:-mt-0 lg:grid-cols-3 lg:px-0">
                <div className={showSidebar ? "" : "hidden lg:block"}>
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl text-bpurple-500">Chat</h2>
                        <div className="flex size-8 items-center justify-center rounded-full border border-gray-400">
                            <Search01Icon size={16} />
                        </div>
                    </div>
                    <ul className="h-[calc(80vh-20px)] space-y-4 divide-y divide-gray-200 overflow-y-auto pr-4">
                        {users.map((user) => (
                            <li key={user.id} className="">
                                <Link
                                    className="flex items-center justify-between pt-4"
                                    href={route("chat", user)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="border-gray size-14 overflow-hidden rounded-full border bg-gray-300">
                                            {user?.profile?.dp && (
                                                <img
                                                    src={user.profile.dp}
                                                    className="rounded-full object-cover object-center"
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="capitalize text-bpurple-500">
                                                {user.name}
                                            </span>
                                            {user?.sent_messages[0]?.message ? (
                                                <span className="text-sm text-gray-600">
                                                    {
                                                        user.sent_messages[0]
                                                            .message
                                                    }
                                                </span>
                                            ) : (
                                                <span className="text-xs text-gray-400">
                                                    Start Chat
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {user?.sent_messages[0]?.human_time ? (
                                            <span className="text-xs text-gray-600">
                                                {
                                                    user.sent_messages[0]
                                                        .human_time
                                                }
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                        {users.length < 10 && (
                            <li className="bg-gray-100 p-4 mt-4 dark:bg-transparent text-gray-500">
                                Note: More people will be available to chat once
                                you and they like each other.
                            </li>
                        )}
                    </ul>
                </div>
                <div
                    className={
                        "col-span-2 h-full " +
                        (showSidebar ? "hidden lg:block" : "")
                    }
                >
                    {partner?.profile === null ? (
                        <div className="flex h-full w-full items-center justify-center dark:bg-bc-900 dark:rounded-3xl dark:border dark:border-bc-50 dark:border-solid  bg-gray-100 p-4 text-gray-500">
                            <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
                                <Message01Icon size={48} />
                                <h3>Start a Chat</h3>
                                <p className="text-base">
                                    Click on the person name in sidebar to begin
                                    your chat.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-full flex-col justify-between rounded-xl border border-bpurple-400">
                            <div className="flex items-center justify-between rounded-t-xl bg-bpurple-500">
                                <div className="flex items-center space-x-2 p-4">
                                    <div className="size-14 overflow-hidden rounded-full bg-gray-300">
                                        {partner?.profile?.dp && (
                                            <img
                                                src={partner.profile.dp}
                                                className="rounded-full object-cover object-center"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-white">
                                            {partner.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 text-white">
                                    <span
                                        className="flex size-8 items-center justify-center rounded-full border"
                                        onClick={() => setShowSidebar(true)}
                                    >
                                        <ArrowLeft01Icon />
                                    </span>
                                </div>
                            </div>
                            <div
                                className="overflow-y-auto"
                                ref={messagesEndRef}
                            >
                                <div className="w-full p-4">
                                    <ul className="flex h-[calc(65vh-20px)] w-full flex-col">
                                        {chatMessages.map((message, index) => (
                                            <li key={index}>
                                                {message.from_user_id ===
                                                    partner.id && (
                                                    <FromMessage
                                                        msg={message}
                                                        dp={
                                                            partner?.profile?.dp
                                                        }
                                                        name={partner.name}
                                                        message={
                                                            message.message
                                                        }
                                                        time={
                                                            message.human_time
                                                        }
                                                    />
                                                )}
                                                {message.from_user_id ===
                                                    me.id && (
                                                    <ToMessage
                                                        msg={message}
                                                        message={
                                                            message.message
                                                        }
                                                        time={
                                                            message.human_time
                                                        }
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4">
                                {previews.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {previews.map((item, index) => (
                                            <div
                                                key={index}
                                                className="relative h-24 w-24 rounded border"
                                            >
                                                <img
                                                    src={item.preview}
                                                    alt="preview"
                                                    className="h-full w-full rounded object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute right-1 top-1 rounded bg-red-500 px-1 text-xs text-white"
                                                    onClick={() =>
                                                        removeImage(index)
                                                    }
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="rounded-b-xl border-t border-gray-400 dark:bg-bc-900 bg-bpurple-50 px-4 py-1">
                                <div className="flex items-center w-full flex-1 justify-between gap-x-4">
                                    {showFileUpload ? (
                                        <div className=" shrink-0 flex-grow">

                                            <FilePond
                                                maxFileSize="2MB"
                                                className="w-full block"
                                                files={imageMessage}
                                                onupdatefiles={setImageMessage}
                                                server={{
                                                    url: route("chat-upload"),
                                                    process:{
                                                        method: "POST",
                                                        headers: {
                                                            "X-CSRF-TOKEN":
                                                            csrf_token,
                                                        },
                                                        ondata:(formData)=>{
                                                            formData.append("to_user", partner.id);
                                                            return formData;
                                                        }

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
                                                    toast({
                                                        title:"Uploaded Successfully"
                                                    })
                                                    window.location = window.location
                                                }}
                                            />
                                        </div>

                                        // <div
                                        //     {...getRootProps()}
                                        //     className="my-4 h-full w-full p-4 text-center"
                                        // >
                                        //     <input {...getInputProps()} />
                                        //     <p>
                                        //         Drag & Drop images here, or
                                        //         click to select files
                                        //     </p>
                                        // </div>
                                    ) : (
                                        <div className="relative flex w-full items-center">
                                            {showEmojiKeyboard ? (
                                                <div className="absolute bottom-0 left-0 flex items-center justify-center bg-gray-100">
                                                    <EmojiPicker
                                                        onEmojiClick={
                                                            onEmojiClick
                                                        }
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    <SmileIcon
                                                        onClick={() => {
                                                            setShowEmojiKeyboard(
                                                                true,
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <TextArea
                                                className="w-full flex-1 flex-grow rounded-none border-none bg-transparent py-1 text-xl shadow-none focus:outline-none focus:ring-0"
                                                onKeyDown={(e) =>
                                                    onEnterPress(e)
                                                }
                                                rows={2}
                                                value={message}
                                                placeholder="Reply..."
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                            ></TextArea>
                                        </div>
                                    )}
                                    <div className="flex items-center space-x-4">
                                        <span
                                            className="text-gray-400"
                                            onClick={() =>
                                                showFileUpload
                                                    ? setShowFileUpload(false)
                                                    : setShowFileUpload(true)
                                            }
                                        >
                                            <Image01Icon size={24} />
                                        </span>
                                        <button
                                            disabled={
                                                !(
                                                    message !== "" ||
                                                    gallery.length !== 0
                                                ) && !processing
                                            }
                                            className="flex size-8 items-center justify-center rounded-full bg-bpurple-500 text-white disabled:bg-gray-300"
                                            onClick={() => sendMessage()}
                                        >
                                            <ArrowRight01Icon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Chat;
