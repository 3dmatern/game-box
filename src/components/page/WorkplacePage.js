import Workplace from "../ui/Workplace";

const WorkplacePage = ({ draggedItem, changePacks, changeDraggedItem }) => {
    return (
        <Workplace
            draggedItem={draggedItem}
            changePacks={changePacks}
            changeDraggedItem={changeDraggedItem}
        />
    );
};

export default WorkplacePage;
