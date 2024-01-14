"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navbarLink/NavLink";

const links = [

    {
       title: "Home",
       path: "/",
    },
    {
        title: "About",
        path: "/about",
     },
     {
        title: "Contact",
        path: "/contact",
     },
     {
        title: "Blog",
        path: "/blog",
     },
];

const Links = () =>{



const [open, setOpen] = useState(false);

    //Temporario ----Opcional----
    const session = true;
    const isAdmin = true;


    return(
        <div className={styles.container}>
            <div className={styles.links}>   
                {
                    links.map(
                        (
                            link =>(
                                <NavLink item={link} key={link.title} />

                            )
                        )
                    )
                }

                {/* ----Opcional---- Validar o user  está logado e se é Admin  */}

                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{title: "Admin", path: "/adim"}}/> }
                            <button className={styles.logout}>Sair</button>          
                                
                        </>  
                                

                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}}/>
                    )
                }
            
            </div>
            <button className= {styles.menuButon} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                       <NavLink item ={link} key={link.title}/>

                     ))}
                     </div>

            }
        </div>
    );
};

export default  Links;