import { useGetAllRoomsQuery } from "../../redux/features/room/roomSlice";

const DemoData = () => {
    const { data: response, error, isLoading } = useGetAllRoomsQuery({});
    return (
        <div className="items-center justify-center w-7/12">
            <h1>hi demo data</h1>
        </div>
    );
};

export default DemoData;