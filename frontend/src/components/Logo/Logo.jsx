import styles from '@/components/Logo/Logo.module.css' 

const Logo = () => {
    return (
        <>
            <img
                src='/frontend/src/assets/images/Page-Icon.png'
                className = {styles.logo}
            />
        </>
    )
}

export default Logo;
