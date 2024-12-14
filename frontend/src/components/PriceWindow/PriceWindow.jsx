import PropTypes from 'prop-types';
import styles from '@/components/PriceWindow/PriceWindow.module.css'
import Window from '@/components/Window/Window.jsx'
import BlurryBackground from '@/components/BlurryBackground/BlurryBackground';

const PriceWindow = ({ price, currencySign, setShowWindow }) => {
    const closeWindow = () => {
        setShowWindow(false);
    };
    
    return (
    <>  
        <BlurryBackground
            closeFunction={closeWindow}
            content={
                <>
                    <Window
                        closeWindow={closeWindow}
                        content={
                        <>
                            <p className={styles.window_text}>
                                Estimated price of your car
                            </p>
                            <p className={styles.price_field}>
                                {`${price}  ${currencySign}`}
                            </p>
                        </>
                        }
                    />
                </>
            }
        />
    </>
    );
};

PriceWindow.propTypes = {
    price: PropTypes.number.isRequired,
    currencySign: PropTypes.string.isRequired,
    setShowWindow: PropTypes.func.isRequired
}

export default PriceWindow;