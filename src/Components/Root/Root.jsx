import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="overflow-x-auto w-[2300px]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;