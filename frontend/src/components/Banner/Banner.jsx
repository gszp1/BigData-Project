
import PropTypes from 'prop-types';
import Logo from '@/components/Logo/Logo.jsx';
import Header from '@/components/Header/Header.jsx';
import styles from '@/components/Banner/Banner.module.css'

const Banner = ({ bannerText, subText }) => {
    return (
        <>
            <div className={styles.banner}>
                <Logo/>
                <Header
                    text={bannerText}
                    subText={subText}
                />
            </div>
        </>
    )    
};

Banner.propTypes = {
    bannerText: PropTypes.string.isRequired,
    subText: PropTypes.string
};



export default Banner;


