import Card from "../Reusable/Card";


const Incomplete = () => {
    return (
       <div className="bg-gray-300 rounded">
         <div className="flex justify-between items-center mt-3 mb-3 p-2 ">
                <div className="flex items-center gap-1">
                    <div className="w-[17px] h-[20px] bg-red-600  rounded-s-lg"></div>
                    <h2 className="font-semibold">Incomplete</h2>
                </div>
                <button className=" btn btn-xs">0</button>
            </div>
         <div className="overflow-y-auto   w-[350px] px-1 h-[90vh] mb-4 space-y-4">
           
            {/* card */}
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
       </div>
    );
};

export default Incomplete;