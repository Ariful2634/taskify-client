import image from '../../../assets/SAVE_20210514_205503-fotor-2023121023542.jpg'
import image1 from '../../../assets/image.png'
import { TbNotes } from "react-icons/tb";
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import FileUpload from '../Modal/FileUpload';
import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';





const Card = () => {


    // const [getFile, setGetFile] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:5000/getUploadFile')
    //         .then(res => {
    //             setGetFile(res.data.getFile);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching uploaded files:', error);
    //         });

    // }, [])
    

    const {  data: getFile = [] } = useQuery({
        queryKey: ['getFile'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/getUploadFile')
            return res.data.getFile

        }

    })

    console.log(getFile)


    return (
        <div className='bg-white px-2 rounded w-full  py-2'>
            <div className='space-y-3'>
                {/* image and name */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <img className='w-[35px] rounded-full' src={image1} alt="" />
                        <p className='font-semibold'>Client Name</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-[30px] rounded-full' src={image} alt="" />
                        <p className='font-semibold'>Sadik Istiak</p>
                    </div>
                </div>
                {/* text */}
                <div className='flex justify-between items-center'>
                    <p className='text-[13px]'>Lorem ipsum, dolor sit amet cur...</p>
                    <button className="flex items-center btn btn-xs"><TbNotes></TbNotes>1/2</button>
                </div>

                {/* image comment */}
                <div className='flex items-center justify-between'>
                    <img className='w-[35px] rounded-full' src={image1} alt="" />
                    <img className='w-[30px] rounded-full' src={image} alt="" />
                    <button className="flex items-center btn btn-circle btn-xs">12+</button>
                    <p className='flex items-center gap-1'><FaRegComments></FaRegComments>15</p>
                    <button className="btn btn-xs mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}> <GrAttachment />{getFile.length}</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>

                            <FileUpload></FileUpload>
                        </div>
                    </dialog>
                    <p className='flex items-center gap-1'><FaRegCalendarAlt></FaRegCalendarAlt>30-12-2022</p>

                </div>
            </div>
        </div>
    );
};

export default Card;