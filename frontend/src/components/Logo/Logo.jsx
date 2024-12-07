import styles from '/src/components/Logo/Logo.module.css' 

const Logo = () => {
    return (
        <>
            <img
                src='/src/assets/images/Page-Icon.png'
                className = {styles.logo}
            />
        </>
    )
}

export default Logo;
