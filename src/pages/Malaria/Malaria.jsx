import React, { createRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useNavigate } from 'react-router-dom';
const Malaria = () => {
    const [image, setImage] = useState('');
    const [imageError, setIimageError] = useState('');

    const [cropData, setCropData] = useState("#");
    const cropperRef = createRef();
    const onChange = (e) => {

        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const navigate=useNavigate()
    const getCropData = () => {
        
        // if (typeof cropperRef.current?.cropper !== "undefined") {
        //   setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        // }
        if(!image){
            setIimageError('Upload your report');
        }
        if(image){
            navigate('/malariares');
        }
      };
    //cropper
    return (
        <div className='h-screen' style={{
            background: 'url(./src/assets/malariabg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <Navbar />
            <div className='container m-auto '>
                <div className='flex justify-center py-5'>
                    <div className='bg-[#a1b4d1d5] pt-[20px] px-4 xl:px-[40px] pb-[20px] rounded-lg'>
                        <h1 className='font-sans font-bold text-3xl xl:text-[38px] text-blue text-center'>Upload your report </h1>
                        <div className='bg-[#dfd4d4f6] mt-[20px] p-5 xl:p-[40px]  rounded-lg '>
                            <input onChange={onChange} className='text-blue w-full text-[20px] pb-4' type="file" />
                            <p className='font-sans text-red-600 font-semibold text-sm absolute'>{imageError}</p>
                            <div className=' m-auto overflow-hidden'>
                                <div
                                    className="img-preview w-[286px] xl:w-[300px] h-[200px] float-left"
                                    
                                />
                                </div>
                                <div className='xl:w-[400px] h-[300px] overflow-hidden p-10 m-auto'>
                                    <Cropper
                                        ref={cropperRef}
                                        style={{ height: 400, width: "100%" }}
                                        zoomTo={0.5}
                                        initialAspectRatio={1}
                                        preview=".img-preview"
                                        src={image}
                                        viewMode={1}
                                        minCropBoxHeight={10}
                                        minCropBoxWidth={10}
                                        background={false}
                                        responsive={true}
                                        autoCropArea={1}
                                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                        guides={true}
                                    />
                                
                            </div>
                            <div className='flex justify-end mt-[20px] gap-4'>

                                <button onClick={getCropData} className='bg-blue text-white rounded-lg p-3 font-sans font-semibold text-[20px]'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Malaria