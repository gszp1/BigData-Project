import Banner from "/frontend/src/components/Banner/Banner.jsx";
import ParagraphTitle from "/frontend/src/components/ParagraphTitle/ParagraphTitle.jsx";
import TextField from "/frontend/src/components/TextField/TextField";
import EstimateButton from "/frontend/src/components/EstimateButton/EstimateButton.jsx";
import styles from "/frontend/src/components/PageLayout/PageLayout.module.css";

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
                    text={'Looking to buy or sell a used car? Knowing its true market value is crucial. ' + 
                        'With CarWorthy, you can get an accurate price estimate for your car by entering a few simple details. ' +
                        'Our advanced prediction model analyzes key factors to give you a fair and competitive price in just seconds.'
                    }
                />
                <ParagraphTitle
                    title={"Our Model Does the Magic"}
                />
                <TextField
                    text={"Using cutting-edge machine learning and data of thousands of used car listings, " +
                         "CarWorthy calculates the most accurate price based on market trends."
                        }
                />
                <ParagraphTitle
                    title={"Get Your Price Estimate"}
                />
                <TextField
                    text={"Receive an instant, detailed report with the estimated price range, helping you make informed decisions."}
                />
                <ParagraphTitle
                    title={"Ready to get your estimate?"}
                />
                <TextField
                    text={"If you entered all important data, click button below to get estimated price of your vehicle."}
                />
                <EstimateButton/>
            </div>
        </div>
    </>
    )
};


export default PageLayout;