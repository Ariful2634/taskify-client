import Card from "../Reusable/Card";


const Incomplete = () => {
    return (
        <div className="overflow-y-auto rounded bg-gray-300 w-[350px] px-1 h-[90vh] space-y-5">
            <div className="flex justify-between items-center mt-4 p-2">
                <h2>Incomplete</h2>
                <button className=" btn btn-xs">0</button>
            </div>
            {/* card */}
            <Card></Card>
            {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> */}
        </div>
    );
};

export default Incomplete;