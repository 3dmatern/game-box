import React from "react";

import styles from "./ConveyorList.module.css";

const ConveyorList = ({
    packs,
    onDragStart,
    onTouchStart,
    playSoundGetPack,
    playSoundGetCanned,
}) => {
    return (
        <ul className={styles["conveyor_packs-output"]}>
            {packs?.map((pack, index) => (
                <li
                    key={pack.id}
                    id={pack.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, pack)}
                    onTouchStart={(e) => onTouchStart(e, pack)}
                    onMouseDown={
                        pack.type === "pack"
                            ? playSoundGetPack
                            : playSoundGetCanned
                    }
                    className={styles.conveyor_pack}
                    style={{
                        position: "absolute",
                        top: `${pack.y}px`,
                        left: `${pack.x}px`,
                        transform: `translate(${
                            pack.x < 50 ? 100 : pack.x > 400 ? -150 : -50
                        }%, ${pack.y < 50 ? 100 : pack.y > 800 ? -100 : -50}%)`,

                        zIndex: index,
                    }}
                >
                    <img
                        src={pack.src}
                        alt="pack"
                        style={{ rotate: `${pack.rotate}deg` }}
                        className={styles.conveyor_img}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ConveyorList;
