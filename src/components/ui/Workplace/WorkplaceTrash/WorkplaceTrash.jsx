import React from "react";

import styles from "./WorkplaceTrash.module.css";

const WorkplaceTrash = ({ onDrop, onDragOver, onTouchEnd }) => {
    return (
        <ul
            className={styles.workplace_trash}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onTouchEnd={onTouchEnd}
        />
    );
};

export default WorkplaceTrash;
