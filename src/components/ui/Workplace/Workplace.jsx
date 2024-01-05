import React, { useState } from "react";

import styles from "./Workplace.module.css";

import { getRandomInt } from "../../../utils/getRandomInt";

import WorkplaceBox from "./WorkplaceBox";

const Workplace = ({ draggedItem, changePacks, changeDraggedItem }) => {
    const [score, setScore] = useState(0);
    const [movePacks, setMovePacks] = useState([]);

    const playSoundDropItem = () => {
        const audioElement = new Audio("./drop.mp3");
        audioElement.play();
    };

    // Drag-and-Drop
    // Функция зоны сброса
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };
    // Функция сброса
    const handleDrop = (e) => {
        e.preventDefault();

        if (draggedItem) {
            playSoundDropItem();
        }

        setScore((prev) =>
            draggedItem
                ? draggedItem.shtamp
                    ? draggedItem.point + prev
                    : prev + draggedItem.point
                : prev
        );
        changePacks();
        setMovePacks((prev) =>
            draggedItem && prev.id !== draggedItem.id
                ? [
                      ...prev,
                      {
                          ...draggedItem,
                          y:
                              e.clientY > 670
                                  ? e.clientY - 250
                                  : e.clientY < 344
                                  ? e.clientY + 100
                                  : e.clientY,
                          x:
                              e.clientX > 800
                                  ? e.clientX - 235
                                  : e.clientX < 180
                                  ? e.clientX + 105
                                  : e.clientX,
                          rotate: getRandomInt(90),
                      },
                  ]
                : prev
        );

        changeDraggedItem(null);
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
            setScore((prev) =>
                draggedItem
                    ? draggedItem.shtamp
                        ? draggedItem.point + prev
                        : prev + draggedItem.point
                    : prev
            );
            changePacks();
            setMovePacks((prev) =>
                draggedItem && prev.id !== draggedItem.id
                    ? [
                          ...prev,
                          {
                              ...draggedItem,
                              y:
                                  e.changedTouches[0].clientY > 670
                                      ? e.changedTouches[0].clientY - 235
                                      : e.changedTouches[0].clientY < 344
                                      ? e.changedTouches[0].clientY + 100
                                      : e.changedTouches[0].clientY,
                              x:
                                  e.changedTouches[0].clientX > 800
                                      ? e.changedTouches[0].clientX - 235
                                      : e.changedTouches[0].clientX < 180
                                      ? e.changedTouches[0].clientX + 105
                                      : e.changedTouches[0].clientX,
                              rotate: getRandomInt(90),
                          },
                      ]
                    : prev
            );
        }
        changeDraggedItem(null);
    };

    return (
        <div className={styles.workplace}>
            <div className={styles.workplace_head}>
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
                <p className={styles.workplace_score}>Score: {score}</p>
            </div>

            <WorkplaceBox
                movePacks={movePacks}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onTouchEnd={handleTouchEnd}
                playSoundDropItem={playSoundDropItem}
            />
        </div>
    );
};

export default Workplace;
