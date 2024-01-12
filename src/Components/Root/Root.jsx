import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="overflow-x-auto w-[2300px] px-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;