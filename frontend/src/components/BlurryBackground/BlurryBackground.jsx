import styles from '@/components/BlurryBackground/BlurryBackground.module.css'
import PropTypes from 'prop-types';

const BlurryBackground = ( { content, closeFunction }) => {
    return (
        <>
            <div
                className={styles.background}
                onClick={closeFunction}
            >
                {content}
            </div>
        </>
    );
};

BlurryBackground.propTypes = {
    content: PropTypes.node,
    closeFunction: PropTypes.func
}


export default BlurryBackground;

