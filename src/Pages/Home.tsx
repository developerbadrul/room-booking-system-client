import DemoData from "../components/UI/DemoData";
import Advantage from "../components/UI/Home/Adventage";
import Advertisement from "../components/UI/Home/Advertisement";
import Banner from "../components/UI/Home/Banner";
import FeatureService from "../components/UI/Home/FeatureService";
import TestimonialSection from "../components/UI/Home/TestimonialSection";

const Home = () => {



    return (
        <>
            <Banner />
            <Advertisement />
            {/* <DemoData/> */}
            <FeatureService/>
            <TestimonialSection/>
            <Advantage/>
        </>
    );
};

export default Home;
