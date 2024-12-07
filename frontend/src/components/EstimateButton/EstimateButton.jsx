import PropTypes from 'prop-types';
import styles from '@/components/EstimateButton/EstimateButton.module.css'
import {useServerInfo} from '@/ServerContext.jsx';
import axios from 'axios';

const EstimateButton = ({carData}) => {
    const {serverInfo, setServerInfo} = useServerInfo();

    const sendData = async () => {
    
    } 
    
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
    carData: PropTypes.array.isRequired,
}


export default EstimateButton;