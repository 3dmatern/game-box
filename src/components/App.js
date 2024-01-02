import styles from "./App.module.css";

function App() {
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
                <ul className={styles.workplace_box} />
            </div>
            <div className={styles.conveyor}>
                {Array.from({ length: 17 }).map((item) => (
                    <div className={styles.conveyor_roller} key={item} />
                ))}
                {/* <ul className={styles["conveyor_packs-output"]}>
                    {Array.from({ length: 17 }).map((item) => (
                        <li key={item} className={styles.conveyor_pack} />
                    ))}
                </ul> */}
            </div>

            <div className={styles.elipse_1} />
            <div className={styles.elipse_2} />
        </main>
    );
}

export default App;
