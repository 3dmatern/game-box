import React, { useState } from "react";

import styles from "./App.module.css";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const initPacks = [
    {
        id: 1,
        src: "./shtampPack.png",
        shtamp: true,
        point: 200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 2,
        src: "./regularPack.png",
        shtamp: false,
        point: -200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 3,
        src: "./whiteShtampPack.png",
        shtamp: true,
        point: 100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 4,
        src: "./whitePack.png",
        shtamp: false,
        point: -100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 5,
        src: "./cannedShtampFood.png",
        shtamp: true,
        point: 250,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 6,
        src: "./cannedFood.png",
        shtamp: false,
        point: -250,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 7,
        src: "./shtampPack.png",
        shtamp: true,
        point: 200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 8,
        src: "./regularPack.png",
        shtamp: false,
        point: -200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 9,
        src: "./whiteShtampPack.png",
        shtamp: true,
        point: 100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 10,
        src: "./whitePack.png",
        shtamp: false,
        point: -100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 11,
        src: "./cannedShtampFood.png",
        shtamp: true,
        point: 250,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 12,
        src: "./cannedFood.png",
        shtamp: false,
        point: -250,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 13,
        src: "./whiteShtampPack.png",
        shtamp: true,
        point: 100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 15,
        src: "./shtampPack.png",
        shtamp: true,
        point: 200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 14,
        src: "./whiteShtampPack.png",
        shtamp: true,
        point: 100,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 16,
        src: "./cannedFood.png",
        shtamp: false,
        point: -250,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
    {
        id: 17,
        src: "./shtampPack.png",
        shtamp: true,
        point: 200,
        y: getRandomInt(window.innerHeight),
        x: getRandomInt(570),
        rotate: getRandomInt(45),
    },
];

function App() {
    const [packs, setPacks] = useState(initPacks);
    const [movePacks, setMovePacks] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    // Drag-and-Drop
    // Функция перетаскиваемого элемента
    const handleDragStart = (e, item) => {
        let img = new Image();
        img.src = packs.find((p) => p.id === item.id).src;
        setDraggedItem(item);

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
        setDraggedItem(item);

        // Сохраняем координаты касания
        e.dataTransfer.setData(
            "touchCoords",
            JSON.stringify({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        );
    };

    // Функция зоны сброса
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        console.log({ x: e.clientX, y: e.clientY });
    };
    // Функция сброса
    const handleDrop = (e) => {
        e.preventDefault();
        setPacks((prev) =>
            prev.filter((p) => (draggedItem ? p.id !== draggedItem.id : p))
        );
        setMovePacks((prev) =>
            draggedItem && prev.id !== draggedItem.id
                ? [
                      ...prev,
                      {
                          ...draggedItem,
                          y:
                              e.clientY > 711
                                  ? e.clientY - 185
                                  : e.clientY < 346
                                  ? e.clientY + 100
                                  : e.clientY,
                          x:
                              e.clientX > 831
                                  ? e.clientX - 150
                                  : e.clientX < 164
                                  ? e.clientX + 105
                                  : e.clientX,
                          rotate: getRandomInt(90),
                      },
                  ]
                : prev
        );

        setDraggedItem(null);
    };
    // Функция сброса для сенсорных устройств
    const handleTouchEnd = (e) => {
        e.preventDefault();

        // Получаем координаты касания
        const touchCoords = JSON.parse(e.dataTransfer.getData("touchCoords"));

        // Проверяем, что пермещение было достаточным
        if (
            Math.abs(e.changedTouches[0].clientX - touchCoords.x) > 10 ||
            Math.abs(e.changedTouches[0].clientY - touchCoords.y > 10)
        ) {
            setPacks((prev) => prev.filter((p) => p.id !== draggedItem.id));
            setMovePacks((prev) => [...prev, draggedItem]);
        }
        setDraggedItem(null);
    };

    return (
        <main className={styles.app}>
            <div className={styles.workplace}>
                <div>
                    <h1 className={styles.workplace_title}>
                        Символьная сортировка
                    </h1>
                    <p className={styles.workplace_text}>
                        Выбирай продукцию с изображением круга на упаковке и
                        укладывай её в коробку. Важно не упустить те, где есть
                        символы!
                    </p>

                    <p className={styles.workplace_info}>
                        <span className={styles.info_btn}>лкм</span> Перемещать
                    </p>
                </div>

                <div className={styles.workplace_borderbox}>
                    <ul
                        id="box"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        // onTouchEnd={handleTouchEnd}
                        className={styles.workplace_box}
                    >
                        {movePacks?.map((pack, index) => (
                            <li
                                key={pack.id}
                                className={styles.conveyor_pack}
                                style={{
                                    position: "absolute",
                                    top: `${pack.y}px`,
                                    left: `${pack.x}px`,
                                    // transform: `translate(-50%,-50%)`,

                                    zIndex: index,
                                }}
                            >
                                <img
                                    src={pack.src}
                                    alt="pack"
                                    style={{ rotate: `${pack.rotate}deg` }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.conveyor}>
                {Array.from({ length: 17 }).map((item, index) => (
                    <div className={styles.conveyor_roller} key={index} />
                ))}
                <ul className={styles["conveyor_packs-output"]}>
                    {packs.map((pack, index) => (
                        <li
                            key={pack.id}
                            id={pack.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, pack)}
                            // onTouchStart={(e) => handleTouchStart(e, pack)}
                            className={styles.conveyor_pack}
                            style={{
                                position: "absolute",
                                top: `${pack.y}px`,
                                left: `${pack.x}px`,
                                transform: `translate(${
                                    pack.x < 10
                                        ? 100
                                        : pack.x > window.innerHeight - 200
                                        ? -100
                                        : -50
                                }%, ${
                                    pack.y < 10
                                        ? 100
                                        : pack.y > window.innerHeight - 200
                                        ? -100
                                        : -50
                                }%)`,

                                zIndex: index,
                            }}
                        >
                            <img
                                src={pack.src}
                                alt="pack"
                                style={{ rotate: `${pack.rotate}deg` }}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.elipse_1} />
            <div className={styles.elipse_2} />
        </main>
    );
}

export default App;
