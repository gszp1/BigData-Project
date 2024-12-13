import styles from "@/components/ErrorWindow/ErrorWindow.jsx"
import Window from "@/components/Window/Window.jsx"
import PropTypes from "prop-types";

const ErrorWindow = ({errorMessage, closeFunction}) => {
    return (
        <>
            <Window
                closeWindow={closeFunction}
                content={
                    <>
                        <p className={styles.header}>
                            Something Went Wrong!
                        </p>
                        <p className={styles.message}>
                            {errorMessage}
                        </p>
                    </>
                }
            />
        </>
    )
};

ErrorWindow.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    closeFunction: PropTypes.func.isRequired
}

export default ErrorWindow;