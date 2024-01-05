import React, { useState } from "react";

import styles from "./App.module.css";

import { getRandomInt } from "../utils/getRandomInt";

import WorkplacePage from "./page/WorkplacePage";
import ConveyorPage from "./page/ConveyorPage";

const initPacks = [
    {
        id: 1,
        src: "./shtampPack.png",
        type: "pack",
        shtamp: true,
        point: 200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 2,
        src: "./regularPack.png",
        type: "pack",
        shtamp: false,
        point: -200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 3,
        src: "./whiteShtampPack.png",
        type: "pack",
        shtamp: true,
        point: 100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 4,
        src: "./whitePack.png",
        type: "pack",
        shtamp: false,
        point: -100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 5,
        src: "./cannedShtampFood.png",
        type: "canned",
        shtamp: true,
        point: 250,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 6,
        src: "./cannedFood.png",
        type: "canned",
        shtamp: false,
        point: -250,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 7,
        src: "./shtampPack.png",
        type: "pack",
        shtamp: true,
        point: 200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 8,
        src: "./regularPack.png",
        type: "pack",
        shtamp: false,
        point: -200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 9,
        src: "./whiteShtampPack.png",
        type: "pack",
        shtamp: true,
        point: 100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 10,
        src: "./whitePack.png",
        type: "pack",
        shtamp: false,
        point: -100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 11,
        src: "./cannedShtampFood.png",
        type: "canned",
        shtamp: true,
        point: 250,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 12,
        src: "./cannedFood.png",
        type: "canned",
        shtamp: false,
        point: -250,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 13,
        src: "./whiteShtampPack.png",
        type: "pack",
        shtamp: true,
        point: 100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 15,
        src: "./shtampPack.png",
        type: "pack",
        shtamp: true,
        point: 200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 14,
        src: "./whiteShtampPack.png",
        type: "pack",
        shtamp: true,
        point: 100,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 16,
        src: "./cannedFood.png",
        type: "canned",
        shtamp: false,
        point: -250,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
    {
        id: 17,
        src: "./shtampPack.png",
        type: "pack",
        shtamp: true,
        point: 200,
        y: getRandomInt(900),
        x: getRandomInt(524),
        rotate: getRandomInt(45),
    },
];

function App() {
    const [packs, setPacks] = useState(initPacks);
    const [draggedItem, setDraggedItem] = useState(null);

    const changePacks = () => {
        setPacks((prev) =>
            prev.filter((p) => (draggedItem ? p.id !== draggedItem.id : p))
        );
    };

    const changeDraggedItem = (item) => {
        setDraggedItem(item);
    };

    return (
        <main className={styles.app}>
            <WorkplacePage
                draggedItem={draggedItem}
                changePacks={changePacks}
                changeDraggedItem={changeDraggedItem}
            />

            <ConveyorPage packs={packs} changeDraggedItem={changeDraggedItem} />

            <div className={styles.elipse_1} />
            <div className={styles.elipse_2} />
        </main>
    );
}

export default App;
