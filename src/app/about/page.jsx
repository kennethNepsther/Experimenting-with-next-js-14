import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () =>{
    return(
        <div className={styles.container}>

            <div className={styles.textContainer}> 
               <h2 className={styles.subTitle}>About Mission</h2>

               <h1 className={styles.title}>
                    The 2024 Humans to Mars Summit
               </h1>
               <p className={styles.desc}>
                    Our Mission: Explore Mars is a global community where innovators, pathfinders, and policymakers of all ages collaborate to establish a human presence on Mars no later than the 2030s.
                    We envision a world where the human drive to explore and discover propels us into a thriving, inclusive, and environmentally responsible existence on Earth and beyond.
                </p>

               <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p> Year of experience</p>
                    </div>

                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p> Year of experience</p>
                    </div>

                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p> Year of experience</p>
                    </div>

               </div>
            </div>

            <div className={styles.imgContainer}> 
                <Image src="/about.png"  alt="pictures" fill  className={styles.img}/>               
            </div>
        </div>
    )
}

export default  AboutPage