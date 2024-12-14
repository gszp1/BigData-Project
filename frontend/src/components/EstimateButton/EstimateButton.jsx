import PropTypes from 'prop-types';
import styles from '@/components/EstimateButton/EstimateButton.module.css'

const EstimateButton = ({sendData}) => {
    
    return (
        <>
            <div className={styles.button_container}>
                <button
                    className={styles.button}
                    onClick={sendData}
                >
                    Estimate
                </button>
            </div>
        </>
    );
};

EstimateButton.propTypes = {
    sendData: PropTypes.func.isRequired,
}


export default EstimateButton;