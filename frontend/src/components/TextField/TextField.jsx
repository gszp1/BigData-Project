import PropTypes from "prop-types";
import styles from "./TextField.module.css"

const TextField = ({text}) => {
    return (
        <>
            <div className={styles.component}>
                <p className={styles.text}>
                    {text}
                </p>
            </div>
        </>
    )
};

TextField.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextField;