import image from '../../../assets/SAVE_20210514_205503-fotor-2023121023542.jpg'
import { TbNotes } from "react-icons/tb";
const Card = () => {
    return (
        <div className='bg-white px-2'>
            <div>
                {/* image and name */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <img className='w-[30px] rounded-full' src={image} alt="" />
                        <p className='font-semibold'>Client Name</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-[30px] rounded-full' src={image} alt="" />
                        <p className='font-semibold'>Sadik Istiak</p>
                    </div>
                </div>
                {/* text */}
                <div className='flex justify-between items-center'>
                    <p className='text-xs'>Lorem ipsum, dolor sit amet cur...</p>
                    <button className="flex items-center btn btn-xs"><TbNotes></TbNotes>1/2</button>
                </div>
            </div>
        </div>
    );
};

export default Card;