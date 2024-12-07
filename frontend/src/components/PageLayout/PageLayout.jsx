import Header from "/src/components/Header/Header.jsx";
import TextField from "/src/components/TextField/TextField.jsx";
import styles from "/src/components/PageLayout/PageLayout.module.css";

const PageLayout = () => {
    return(
    <>
        <div className={styles.component}>
            <div className={styles.layout}>
                <Header text={"CarWorthy"}/>
                <TextField text={"Place holder"}/>
            </div>
        </div>
    </>
    )
};


export default PageLayout;