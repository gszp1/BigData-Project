import PropTypes from 'prop-types';
import styles from '@/components/EstimateButton/EstimateButton.module.css'

const EstimateButton = ({carData, setCarData}) => {
    
    const sendData = () => {
    } 
    
    return (
        <>
            <div className={styles.button_container}>
                <button className={styles.button}>
                    Estimate
                </button>
            </div>
        </>
    );
};

EstimateButton.propTypes = {
    carData: PropTypes.array.isRequired,
    setCarData: PropTypes.func.isRequired
}


export default EstimateButton;