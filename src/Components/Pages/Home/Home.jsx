import Completed from "../TaskComponents/Completed";
import Doing from "../TaskComponents/Doing";
import Incomplete from "../TaskComponents/Incomplete";
import OverDoing from "../TaskComponents/OverDoing";
import ToDo from "../TaskComponents/ToDo";
import UnderReview from "../TaskComponents/UnderReview";


const Home = () => {
    return (
        <div className="grid lg:grid-cols-6 mt-8 gap-5 ">
            <Incomplete></Incomplete>
            <ToDo></ToDo>
            <Doing></Doing>
            <UnderReview></UnderReview>
            <Completed></Completed>
            <OverDoing></OverDoing>
        </div>
    );
};

export default Home;