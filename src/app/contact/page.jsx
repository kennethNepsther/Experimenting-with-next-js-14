import styles from './contact.module.css';
import Image from "next/image";


const ContactPage = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png"  alt="contact" fill  className={styles.img}/>
            </div>


            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type='text' placeholder='Name and Surname'/>
                    <input type='text' placeholder='E-mail '/>
                    <input type='text' placeholder='Phone number (Optional)'/>
                    <textarea name='' id='' cols='30' rows='10' placeholder='Message'/> 
                    <button>Send</button>
                </form>

            </div>
        </div>
    )
}

export default  ContactPage