import PropTypes from 'prop-types';
import styles from '@/components/PriceWindow/PriceWindow.module.css'
import Window from '@/components/Window/Window.jsx'

const PriceWindow = ({ price, currencySign, setShowWindow }) => {
    const closeWindow = () => {
        setShowWindow(false);
    };
    
    return (
    <>
        <div 
            className={styles.background}
            onClick={closeWindow} 
        >
            <Window
                closeWindow={closeWindow}
                onClick={(e) => e.stopPropagation()}
                content={
                <>
                    <p className={styles.window_text}>
                        Estimated price of your car
                    </p>
                    <br/>
                    <p className={styles.price_field}>
                        {`${price}  ${currencySign}`}
                    </p>
                </>
                }
            />
        </div>
    </>
    );
};

PriceWindow.propTypes = {
    price: PropTypes.number.isRequired,
    currencySign: PropTypes.string.isRequired,
    setShowWindow: PropTypes.func.isRequired
}

export default PriceWindow;