import Banner from "@/components/Banner/Banner.jsx";
import ParagraphTitle from "@/components/ParagraphTitle/ParagraphTitle.jsx";
import TextField from "@/components/TextField/TextField";
import EstimateButton from "@/components/EstimateButton/EstimateButton.jsx";
import styles from "@/components/PageLayout/PageLayout.module.css";
import InputField from "@/components/InputField/InputField.jsx";
import ErrorWindow from "@/components/ErrorWindow/ErrorWindow.jsx";
import InputList from "@/components/InputList/InputList.jsx";
import PriceWindow from "@/components/PriceWindow/PriceWindow.jsx";
import axios from 'axios';
import { useState } from 'react';
import {useServerInfo} from '@/ServerContext.jsx';


const PageLayout = () => {
    const {serverInfo} = useServerInfo();
    const [carParameters, setCarParameters] = useState({
        brand: "",
        modelYear: "",
        milage: "",
        engineCapacity: "",
        engineHorsepower: "",
        fuelType: "",
        transmission: "",
        extCol: "",
        intCol: "",
        accident: "",
    });
    const [errorLabels, setErrorLabels] = useState({
        brand: "",
        modelYear: "",
        milage: "",
        engineCapacity: "",
        engineHorsepower: "",
        fuelType: "",
        transmission: "",
        extCol: "",
        intCol: "",
        accident: "",
    });
    const [carPrice, setCarPrice] = useState(0);
    const [showPrice, setShowPrice] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const accidentTypes = ["", "None reported", "At least 1 accident or damage reported"];

    const sendData = async () => {
        let data = {...carParameters};
        if(!validateInput()) {
            setErrorMessage("Values in fields are invalid. Please adjust their values according to error labels.");
            setShowError(true);
            return;
        }

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
            setCarPrice(response.data.price);
            setShowPrice(true);
        } catch (error) {
            if (error.response && error.response.status == 500) {
                setErrorMessage(error.data.message);
            } else {
                setErrorMessage(error.message || "Unexpected error occurred during request hadling.");   
            }
            setShowError(true);
        }
    }

    const validateInput = () => {
        let localErrorLabels = {
            brand: "",
            modelYear: "",
            milage: "",
            engineCapacity: "",
            engineHorsepower: "",
            fuelType: "",
            transmission: "",
            extCol: "",
            intCol: "",
            accident: "",
        }
        let isValid = true;

        const checkRequired = (fieldValue, fieldName, errorMessage) => {
            if (!fieldValue.trim()) {
                localErrorLabels[fieldName] = errorMessage;
                isValid = false;
            }
        };

        const checkNumberField = (fieldValue, fieldName, { requiredMessage, notNumberMessage, min, max, invalidMessage }) => {
            if (!fieldValue.trim()) {
                localErrorLabels[fieldName] = requiredMessage;
                isValid = false;
                return;
            }
            
            const numericValue = Number(fieldValue);
            if (isNaN(numericValue)) {
                localErrorLabels[fieldName] = notNumberMessage;
                isValid = false;
                return;
            }
            
            if (min !== undefined && numericValue < min) {
                localErrorLabels[fieldName] = invalidMessage;
                isValid = false;
            }
            
            if (max !== undefined && numericValue > max) {
                localErrorLabels[fieldName] = invalidMessage;
                isValid = false;
            }
        };

        checkRequired(carParameters.brand, 'brand', 'Brand is required');

        checkNumberField(carParameters.modelYear, 'modelYear', {
            requiredMessage: "Model Year is required.",
            notNumberMessage: "Model Year is not a number.",
            min: 1885,
            max: new Date().getFullYear(),
            invalidMessage: "Model year is invalid."
        });

        checkNumberField(carParameters.milage, 'milage', {
            requiredMessage: "Mileage is required.",
            notNumberMessage: "Mileage is not a number",
            min: 0,
            invalidMessage: "Invalid value provided."
        });

        checkNumberField(carParameters.engineCapacity, 'engineCapacity', {
            requiredMessage: "Engine Capacity is required.",
            notNumberMessage: "Engine Capacity is not a number",
            min: 0,
            invalidMessage: "Invalid value provided."
        });

        checkNumberField(carParameters.engineHorsepower, 'engineHorsepower', {
            requiredMessage: "Engine Horsepower is required.",
            notNumberMessage: "Engine Horsepower is not a number",
            min: 0,
            invalidMessage: "Invalid value provided."
        });

        checkRequired(carParameters.transmission, 'transmission', 'Transmission is required');

        checkRequired(carParameters.extCol, 'extCol', 'Exterior Color is required');

        checkRequired(carParameters.intCol, 'intCol', 'Interior Color is required');

        checkRequired(carParameters.fuelType, 'fuelType', "Fuel Type is required");

        setErrorLabels(localErrorLabels);
        return isValid;
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
                <InputList
                    variable={carParameters}
                    setVariable={setCarParameters}
                    labelText={"Accident History"}
                    propertyName={"accident"}
                    errorLabel={errorLabels["accident"]}
                    values={accidentTypes}
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