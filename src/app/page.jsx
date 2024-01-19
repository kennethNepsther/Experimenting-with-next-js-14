import Image from 'next/image';
import styles from './home.module.css';

const Home = () =>{
  return(
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>HUMANS TO MARS</h1>
          <p className={styles.desc}>
              Advancing human exploration of Mars and beyond no later than the 2030s,
              for a sustainable and inclusive future for us all 
           </p>
        

          <div className={styles.buttons}>
            <button className={styles.button}>Learn more</button>
            <button className={styles.button}>Contact</button>
          </div>

          <div className={styles.brands}>
            <Image src="/brands.png" alt='' fill className={styles.brandImage} />

          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt='' fill className={styles.heroImage} />
        </div>
      </div>
  )
}

export default  Home