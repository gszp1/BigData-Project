import Banner from "@/components/Banner/Banner.jsx";
import ParagraphTitle from "@/components/ParagraphTitle/ParagraphTitle.jsx";
import TextField from "@/components/TextField/TextField";
import EstimateButton from "@/components/EstimateButton/EstimateButton.jsx";
import styles from "@/components/PageLayout/PageLayout.module.css";
import InputField from "@/components/InputField/InputField.jsx";
import ErrorWindow from "@/components/ErrorWindow/ErrorWindow.jsx";
import { useState } from 'react';
import PriceWindow from "@/components/PriceWindow/PriceWindow.jsx";
import {useServerInfo} from '@/ServerContext.jsx';
import axios from 'axios';

const PageLayout = () => {
    const {serverInfo} = useServerInfo();
    const [carParameters, setCarParameters] = useState({
        brand: "",
        modelYear: "",
        milage: "",
        engine_capacity: "",
        engine_horsepower: "",
        fuelType: "",
        engine: "",
        transmission: "",
        extCol: "",
        intCol: "",
        accident: "",
    });

    const [carPrice, setCarPrice] = useState(0);
    const [showPrice, setShowPrice] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(true);

    const sendData = async () => {
        // let data = {...carParameters};
        let data = {temp: "Placeholder"};
        const ip = serverInfo.ip;
        const port = serverInfo.port;
        const address = `http://${ip}:${port}/api/car-price`;
        try {
            const response =  await axios.post(
                address,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.data);
            setCarPrice(response.data.price);
            setShowPrice(true);
        } catch (error) {
            console.error('Error sending data:', error.message);
        }
    }

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
                    labelText={"Model"}
                    propertyName={"model"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Production Year"}
                    propertyName={"modelYear"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Milage (miles)"}
                    propertyName={"milage"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Fuel Type"}
                    propertyName={"fuelType"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Engine Type"}
                    propertyName={"engine"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Transmission"}
                    propertyName={"transmission"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Exterior Color"}
                    propertyName={"extCol"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Interior Color"}
                    propertyName={"intCol"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Accident History"}
                    propertyName={"accident"}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Clean Title"}
                    propertyName={"cleanTitle"}
                />


                <ParagraphTitle
                    title={"Ready to get your estimate?"}
                />
                <TextField
                    text={"If you entered all important data, click button below to get estimated price of your vehicle."}
                />
                <EstimateButton
                    sendData={sendData}
                />
                { showPrice && (
                    <PriceWindow
                        price={carPrice}
                        currencySign={"$"}
                        setShowWindow={setShowPrice}
                    />
                )}
                { showError && (
                    <ErrorWindow
                        message={errorMessage}
                        setShowError={setShowError}
                    />
                )}

            </div>
        </div>
    </>
    )
};


export default PageLayout;