import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () =>{
    return(
        <div>
            <div className={styles.imgConteiner}> 
                {/* <Image src="/about.png"  alt="" fill /> */}

                <Image src="https://images.pexels.com/photos/17322370/pexels-photo-17322370/free-photo-of-maos-internet-refeicao-comida.jpeg"  alt="" fill />
            </div>
        </div>
    )
}

export default  AboutPage