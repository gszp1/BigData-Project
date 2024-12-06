import Header from "../Header/Header.jsx";
import styles from "./PageLayout.module.css";

const PageLayout = () => {
    return(
    <>
        <div className={styles.layout}>
            <Header text={"Place holder"}></Header>
        </div>
    </>
    )
};


export default PageLayout;