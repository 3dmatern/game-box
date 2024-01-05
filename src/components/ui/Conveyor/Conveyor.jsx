import React from "react";

import styles from "./Conveyor.module.css";

import ConveyorList from "./ConveyorList";

const Conveyor = ({ packs, changeDraggedItem }) => {
    const playSoundGetPack = () => {
        const audioElement = new Audio("./getPack.mp3");
        audioElement.play();
    };

    const playSoundGetCanned = () => {
        const audioElement = new Audio("./getCanned.mp3");
        audioElement.play();
    };

    // Drag-and-Drop
    // Функция перетаскиваемого элемента
    const handleDragStart = (e, item) => {
        let img = new Image();
        img.src = packs.find((p) => p.id === item.id).src;
        changeDraggedItem(item);

        e.dataTransfer.setDragImage(img, 108, 205);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", item);
        e.dataTransfer.setData(
            "touchCoords",
            JSON.stringify({ x: e.clientX, y: e.clientY })
        );
    };
    // Функция перетаскивания для сенсорных устройств
    const handleTouchStart = (e, item) => {
        changeDraggedItem(item);

        // Сохраняем координаты касания
        e.dataTransfer.setData(
            "touchCoords",
            JSON.stringify({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        );
    };

    return (
        <div className={styles.conveyor}>
            {Array.from({ length: 17 }).map((item, index) => (
                <div className={styles.conveyor_roller} key={index} />
            ))}

            <ConveyorList
                packs={packs}
                onDragStart={handleDragStart}
                onTouchStart={handleTouchStart}
                playSoundGetPack={playSoundGetPack}
                playSoundGetCanned={playSoundGetCanned}
            />
        </div>
    );
};

export default Conveyor;
