import styles from '@/components/Window/Window.module.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Window =( { content, closeWindow } ) => {
    return (
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
            {content}
        </div>
    );
};

Window.propTypes = {
    content: PropTypes.node,
    closeWindow: PropTypes.func
}

export default Window;