import Card from "../Reusable/Card";


const Doing = () => {
    return (
        <div className="bg-gray-300 rounded">
            <div className="flex justify-between items-center mt-3 mb-3 p-2">
                <div className="flex items-center gap-1">
                    <div className="w-[17px] h-[20px] bg-yellow-300  rounded-s-lg"></div>
                    <h2 className="font-semibold">Doing</h2>
                </div>
                <button className=" btn btn-xs">0</button>
            </div>
            <div className="overflow-y-auto rounded  w-[350px] mb-4 px-1 h-[90vh] space-y-4">
            
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

export default Doing;