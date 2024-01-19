import styles from './footer.module.css';


const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>NepstherTI</div>
            <div className={styles.text}>
                Space Renaissance International &copy; all rights  reserved
            </div>     
                
        </div>
    )
}

export default  Footer