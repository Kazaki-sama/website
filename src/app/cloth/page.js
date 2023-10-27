import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './cloth.module.css';
const cloth=()=>{
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
              src='/cloth.jpg'
              alt='/cloth .jpg'
              width={170}
              height={235}
              priority
              />
       
              <p> Feast your eyes on our cotton marvels, where breathability meets fashion. These aren't just clothes; they're your second skin, ensuring you stay cool, collected, and effortlessly stylish, no matter the occasion. From casual chic to boardroom elegance, our cotton creations have got you covered.</p>
 

    <Link href='https://www.daraz.com.np/products/unstitched-fabric-pant-cloth-for-men-12m-i120148403-s1032823288.html?spm=a2a0e.searchlist.sku.1.486f7164nhhHmO&search=1' >
               <h3 className={styles.text}>Visit</h3>
        </Link> 
        </blockquote>
    </div>
    </div>)
}

export default cloth; 