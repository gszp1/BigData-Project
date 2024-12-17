import PropTypes from "prop-types";
import styles from "@/components/TextField/TextField.module.css"

const TextField = ({text}) => {
    return (
        <>
            <p className={styles.text}>
                {text}
            </p>
        </>
    )
};

TextField.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextField;