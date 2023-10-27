import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './batman.module.css';
const batman=()=>{
 return( 
        <div>
            <blockquote >
            <Link href={{
            pathname:"/",
            
          }} className={styles.w}>Go back</Link>
          </blockquote>
 <div className={styles.body}>
    
    <blockquote className={styles.container}   >
    
    <Image className={styles.a}              
            src='/batma.jpg'
              alt='/batma .jpg'
              width={170}
              height={235}
              priority
              /> 
              <p>Official Child's Batman Costume includes printed padded jumpsuit with muscle chest detail, half belt print
Soft half face mask with elastic fastening and detachable cape, comic look Batman
Official Rubies' Licensed Product, please note this item will be delivered in Rubies' Packaging
Rubies' Official Licensed product tested to all required European and UK standards, including EN71 and REACH
UK designed and sized product, please refer to sizing chart image for reference</p>


    <Link href='https://www.amazon.co.uk/dp/B07GSLMLK9/ref=cm_gf_akb_d_p0_e0_qd0_tubb6ToXLkVinHcD8Ong'     >
       visit
        </Link> 
        
        </blockquote>
        </div>
    </div>)
}

export default batman; 