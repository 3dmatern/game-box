import React from "react";

import styles from "./WorkplaceBox.module.css";

const WorkplaceBox = ({ movePacks, onDrop, onDragOver, onTouchEnd }) => {
    return (
        <ul
            id="box"
            onDrop={onDrop}
            onDragOver={onDragOver}
            onTouchEnd={onTouchEnd}
            className={styles.workplace_box}
        >
            {movePacks?.map((pack, index) => (
                <li
                    key={pack.id}
                    className={styles.workplace_pack}
                    style={{
                        position: "absolute",
                        top: `${pack.y}px`,
                        left: `${pack.x}px`,
                        zIndex: index,
                    }}
                >
                    <img
                        src={pack.src}
                        alt="pack"
                        style={{ rotate: `${pack.rotate}deg` }}
                        className={styles.workplace_img}
                    />
                </li>
            ))}
        </ul>
    );
};

export default WorkplaceBox;
