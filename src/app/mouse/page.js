import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./mouse.module.css"
const mouse=()=>{
 return( 
    <div>
    <blockquote >
    <Link href={{
    pathname:"/",
    
  }} className={styles.w}>Go back</Link>
  </blockquote>
 
 <div className={styles.body}>
    <blockquote className={styles.container}>
    <Image className={styles.a}
              src='/mouse.jpg'
              alt='/mouse.jpg'
              width={170}
              height={235}
              priority
              />
        <Link href='https://www.amazon.co.uk/AmazonBasics-Wireless-Mouse-Receiver-Black/dp/B005EJH6Z4?ref_=a'>
                <h3 className={styles.text}>Visit</h3>
        </Link> 
        </blockquote>
    </div>
    </div>)
}
export default mouse; 