import Banner from "/src/components/Banner/Banner.jsx";
import TextField from "/src/components/TextField/TextField.jsx";
import styles from "/src/components/PageLayout/PageLayout.module.css";

const PageLayout = () => {
    return(
    <>
        <div className={styles.component}>
            <div className={styles.layout}>
                <Banner
                    bannerText={'CarWorthy'}
                    subText={"Your Online Used Car Price Predictor"}
                />
                <TextField
                    text={"Place holder"}
                
                />
            </div>
        </div>
    </>
    )
};


export default PageLayout;