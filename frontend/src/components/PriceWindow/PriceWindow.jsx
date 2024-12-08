import PropTypes from 'prop-types';
import styles from '@/components/PriceWindow/PriceWindow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
            <div
                className={styles.window}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.button_container}>
                    <button 
                        className={styles.exit_button}
                        onClick={closeWindow}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <p className={styles.window_text}>
                    Estimated price of your car
                </p>
                <br/>
                <p className={styles.price_field}>
                    {`${price}  ${currencySign}`}
                </p>
            </div>
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