import Header from "../Header/Header.jsx";
import TextField from "../TextField/TextField.jsx";
import styles from "./PageLayout.module.css";

const PageLayout = () => {
    return(
    <>
        <div className={styles.layout}>
            <Header text={"Place holder"}/>
            <TextField text={"Place holder"}/>
        </div>
    </>
    )
};


export default PageLayout;