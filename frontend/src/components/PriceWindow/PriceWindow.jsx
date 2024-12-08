import PropTypes from 'prop-types';
import styles from '@/components/PriceWindow/PriceWindow.module.css'

const PriceWindow = ({ price }) => {
    return (
    <>
        <div className={styles.background}>
            <div className={styles.window}>
                <p className={styles.window_text}>
                    Estimated price of your car:
                </p>
                <br/>
                <p className={styles.price_field}>
                    {price}
                </p>
            </div>
        </div>
    </>
    );
};

PriceWindow.propTypes = {
    price: PropTypes.number.isRequired
}

export default PriceWindow;