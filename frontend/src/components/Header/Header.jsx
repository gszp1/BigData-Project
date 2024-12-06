import PropTypes from 'prop-types'
import styles from '/src/components/Header/Header.module.css'

const Header = ({ text }) => {
    return (
        <>  
            <div className={styles.component}>
                <br/>
                <h1 className={styles.header}>
                    {text}      
                </h1>
                <br/>
            </div>
        </>
    )
};

Header.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header;