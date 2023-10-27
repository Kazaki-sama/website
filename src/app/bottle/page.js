import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './bottle.module.css';
const bottle=()=>{
 return( 
    <div>
    <blockquote >
    <Link href={{
    pathname:"/",
    }}className={styles.w}>Go back</Link>
   </blockquote>
 
 <div className={styles.body}>
    <blockquote className={styles.container}>
    <Image className={styles.a}
              src='/bottle.jpg'
              alt='/bottle .jpg'
              width={170}
              height={235}
              priority
              />        
              <p>This Insulated Thermal bottle is made from high-quality 304 stainless steel Advanced vacuum insulation technology keeps beverage hot or cold for over 6 hours.
You can keep it in your kids sports bag or backpack for a hike outdoors, or take it to yoga class, without worrying about leaks.</p>
    <Link href='httpsvscode-file://vscode-app/c:/Users/kz/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html://www.daraz.com.np/products/thermos-double-wall-vacuum-insulated-stainless-steel-water-bottle-travel-black-i108662955-s1029347660.html?spm=a2a0e.searchlist.sku.1.73584885SEk32J&search=1' >
       
        <h3 className={styles.text}>Visit</h3>
        </Link> 
        </blockquote>
    </div>
    </div>)
}

export default bottle; 