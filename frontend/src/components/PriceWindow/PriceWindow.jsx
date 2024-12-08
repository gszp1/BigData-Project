import PropTypes from 'prop-types';
import styles from '@/components/PriceWindow/PriceWindow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const PriceWindow = ({ price, currencySign }) => {
    return (
    <>
        <div className={styles.background}>
            <div className={styles.window}>
                <div className={styles.button_container}>
                    <button className={styles.exit_button}>
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
    currencySign: PropTypes.string.isRequired
}

export default PriceWindow;