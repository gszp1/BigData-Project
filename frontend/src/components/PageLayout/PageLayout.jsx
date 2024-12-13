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
        engineCapacity: "",
        engineHorsepower: "",
        fuelType: "",
        engine: "",
        transmission: "",
        extCol: "",
        intCol: "",
        accident: "",
    });
    const [errorLabels, setErrorLabels] = useState({
        brand: "aa",
        modelYear: "bb",
        milage: "cc",
        engineCapacity: "",
        engineHorsepower: "",
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
    const [showError, setShowError] = useState(false);

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
                    errorLabel={errorLabels["brand"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Production Year"}
                    propertyName={"modelYear"}
                    errorLabel={errorLabels["modelYear"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Milage (miles)"}
                    propertyName={"milage"}
                    errorLabel={errorLabels["milage"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Fuel Type"}
                    propertyName={"fuelType"}
                    errorLabel={errorLabels["fuelType"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Engine Capacity (L)"}
                    propertyName={"engineCapacity"}
                    errorLabel={errorLabels["engineCapacity"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Engine Horsepower (HP)"}
                    propertyName={"engineHorsepower"}
                    errorLabel={errorLabels["engineHorsepower"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Transmission Type"}
                    propertyName={"transmission"}
                    errorLabel={errorLabels["transmission"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Exterior Color"}
                    propertyName={"extCol"}
                    errorLabel={errorLabels["extCol"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Interior Color"}
                    propertyName={"intCol"}
                    errorLabel={errorLabels["intCol"]}
                />
                <InputField
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Accident History"}
                    propertyName={"accident"}
                    errorLabel={errorLabels["accident"]}
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