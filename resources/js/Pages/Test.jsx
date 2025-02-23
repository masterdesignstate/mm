import React, { useEffect, useRef, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

// import FilerobotImageEditor, {
//     TABS,
//     TOOLS,
// } from 'react-filerobot-image-editor';
import { CalendarDatePicker } from "@/Components/ui/CalendarDatePicker.jsx";
import { usePage } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
);

const Test = () => {
    // Start New Code

    const csrf_token = usePage().props.csrf_token;
    const [dp, setDp] = useState(null);
    const [gallery,setGallery] = useState([]);

    const pondRef = useRef(null);

    useEffect(() => {
        console.log(pondRef);
    }, []);

    // End Code

    // const [files, setFiles] = useState([]);
    // const [imageToEdit, setImageToEdit] = useState(null);
    // const [editorVisible, setEditorVisible] = useState(false);
    // const [selectedDateRange, setSelectedDateRange] = useState({
    //     from: new Date(new Date().getFullYear(), 0, 1),
    //     to: new Date(),
    // });
    // const openEditor = (file) => {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         setImageToEdit(e.target.result);
    //         setEditorVisible(true);
    //     };
    //     reader.readAsDataURL(file);
    // };
    //
    // const handleSave = (editedImage) => {
    //     setFiles([{ source: editedImage.canvas.toDataURL() }]); // Replace FilePond file
    //     setEditorVisible(false);
    // };

    return (
        <div className="container">

            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>


            <h2>Upload & Edit Image</h2>

            <div className="flex w-full justify-center">
                <div className="App w-[80%]">
                    <FilePond
                        files={dp}
                        onupdatefiles={setDp}
                        server={{
                            url: route("dp-upload"),
                            method: "POST",
                            headers:{
                                "X-CSRF-TOKEN": csrf_token,
                            }
                        }}
                        name="dp"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>
            </div>

            <div className="flex w-full justify-center">
                <div className="profile-gallery w-[30%]  mx-auto h-auto">
                    <FilePond
                        className="h-auto"
                        files={gallery}
                        instantUpload={false}
                        onupdatefiles={setGallery}
                        allowMultiple={true}
                        maxFiles={4}
                        server={{
                            url: route("gallery-item-upload"),
                            method: "POST",
                            headers:{
                                "X-CSRF-TOKEN": csrf_token,
                            }
                        }}
                        name="gallery_item"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>
            </div>
        </div>
    );
};
export default Test;
