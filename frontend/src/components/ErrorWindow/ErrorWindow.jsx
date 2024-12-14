import styles from "@/components/ErrorWindow/ErrorWindow.module.css"
import Window from "@/components/Window/Window.jsx"
import BlurryBackground from "@/components/BlurryBackground/BlurryBackground.jsx";
import PropTypes from "prop-types";

const ErrorWindow = ({message, setShowError}) => {
    const closeWindow = () => {
        setShowError(false);
    };

    return (
        <>
            <BlurryBackground
                closeFunction={closeWindow}
                content={
                <>
                    <Window
                        closeWindow={closeWindow}
                            content={
                                <>
                                    <p className={styles.header}>
                                        Something Went Wrong!
                                    </p>
                                    <p className={styles.message}>
                                        {message}
                                    </p>
                                </>
                            }
                    />
                        
                </>}
            />
        </>
    )
};

ErrorWindow.propTypes = {
    message: PropTypes.string.isRequired,
    setShowError: PropTypes.func.isRequired
}

export default ErrorWindow;