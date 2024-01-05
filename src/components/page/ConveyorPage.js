import Conveyor from "../ui/Conveyor";

const ConveyorPage = ({ packs, changeDraggedItem }) => {
    return <Conveyor packs={packs} changeDraggedItem={changeDraggedItem} />;
};

export default ConveyorPage;
