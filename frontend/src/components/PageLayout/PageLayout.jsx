import Banner from "@/components/Banner/Banner.jsx";
import ParagraphTitle from "@/components/ParagraphTitle/ParagraphTitle.jsx";
import TextField from "@/components/TextField/TextField";
import EstimateButton from "@/components/EstimateButton/EstimateButton.jsx";
import styles from "@/components/PageLayout/PageLayout.module.css";
import InputField from "@/components/InputField/InputField.jsx";
import { useState } from 'react';
import PriceWindow from "../PriceWindow/PriceWindow";

const PageLayout = () => {
    const [carParameters, setCarParameters] = useState({
        brand: "Opel",
        mileage: 2137,
        year: 2000
    });
    const [carPrice, setCarPrice] = useState(2137);
    const [showPrice, setShowPrice] = useState(true);

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
                    text={"Receive an instant, detailed report with the estimated car price, helping you make informed decisions."}
                />
                <ParagraphTitle
                    title={"Vehicle characteristics"}
                />
                <TextField
                    text={"Enter vechicle parameters in fields below."}
                />


                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Brand"}
                    propertyName={"brand"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Mileage (km)"}
                    propertyName={"mileage"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Production Year"}
                    propertyName={"year"}
                />


                <ParagraphTitle
                    title={"Ready to get your estimate?"}
                />
                <TextField
                    text={"If you entered all important data, click button below to get estimated price of your vehicle."}
                />
                <EstimateButton
                    carData={carParameters}
                />
                { showPrice && (
                    <PriceWindow
                        price={carPrice}
                        currencySign={"$"}
                        setShowWindow={setShowPrice}
                    />
                )}
            </div>
        </div>
    </>
    )
};


export default PageLayout;