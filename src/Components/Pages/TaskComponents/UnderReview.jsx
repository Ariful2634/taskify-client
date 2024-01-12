import Card from "../Reusable/Card";


const UnderReview = () => {
    return (
        <div className="bg-gray-300 rounded">
            <div className="flex justify-between items-center mt-3 mb-3 p-2">
                <h2 className="font-semibold">Under Review</h2>
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

export default UnderReview;