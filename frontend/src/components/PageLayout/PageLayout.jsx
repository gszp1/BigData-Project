import Banner from "/src/components/Banner/Banner.jsx";
// import TextField from "/src/components/TextField/TextField.jsx";
import ParagraphTitle from "/src/components/ParagraphTitle/ParagraphTitle.jsx";
import styles from "/src/components/PageLayout/PageLayout.module.css";

const PageLayout = () => {
    return(
    <>
        <div className={styles.component}>
            <div className={styles.layout}>
                <Banner
                    bannerText={'CarWorthy'}
                    subText={'Your Online Used Car Price Predictor'}
                />
                <ParagraphTitle
                    title={'Welcome to CarWorthy - Your Trusted Used Car Price Predictor'}
                />
            </div>
        </div>
    </>
    )
};


export default PageLayout;