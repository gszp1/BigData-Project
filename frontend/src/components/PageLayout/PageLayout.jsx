import Banner from "/src/components/Banner/Banner.jsx";
// import TextField from "/src/components/TextField/TextField.jsx";
import ParagraphTitle from "/src/components/ParagraphTitle/ParagraphTitle.jsx";
import styles from "/src/components/PageLayout/PageLayout.module.css";
import TextField from "../TextField/TextField";

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
                <TextField
                    text={'Looking to buy or sell a used car? Knowing its true market value is crucial. With AutoValuator, you can get an accurate price estimate for your car by entering a few simple details. Our advanced prediction model analyzes key factors to give you a fair and competitive price in just seconds.'}
                />
            </div>
        </div>
    </>
    )
};


export default PageLayout;