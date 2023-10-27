import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

    return (
        <main className={styles.main}>
          {/* <div className={styles.log} >
            <Image 
             
              src="/batma.jpg"
              alt="/batma.jpg"
              width={180}
              height={37}
              priority
            />
          </div> */}
    
          <div className={styles.grid}>
            
          <Link href={{
            pathname:"/batman",
          }}>
            
             <Image
              className={styles.product}
              src='/batma.jpg'
              alt='/batma .jpg'
              width={170}
              height={235}
              priority
              />
              
              
              <h2>
                batman toy <span>-&gt;</span>
              </h2>
              <p>Official Child's Batman Costume includes printed padded jumpsuit with muscle chest detail, half belt print</p>
              
            </Link>
            
    
            <Link href={{
            pathname:"/mouse",
          }}>
              <Image
               className={styles.product}
               src='/mouse.jpg'
               alt='/mouse.jpg'
               width={170}
               height={235}
               priority
              />
              <h2>
                Wireless mouse <span>-&gt;</span>
              </h2>
              <p>Smooth, precise and affordable wireless optical 3-button mouse with USB-A nano receiver for laptop, desktop and netbook PCs</p>
            </Link>
    
            <Link href={{
            pathname:"/bottle",
          }}>
             <Image
               className={styles.product}
               src='/bottle.jpg'
               alt='/bottle.jpg'
               width={170}
               height={235}
               priority
              />

              <h2>
                Bottle <span>-&gt;</span>
              </h2>
              <p>This Insulated Thermal bottle is made from high-quality 304 stainless steel Advanced vacuum insulation technology keeps beverage hot or cold for over 6 hours.
You can keep it in your kids sports bag or backpack for a hike outdoors, or take it to yoga class, without worrying about leaks.</p>
            </Link>
    
            <Link href={{
            pathname:"/cloth",
          }}>

<Image
               className={styles.product}
               src='/cloth.jpg'
               alt='/cloth.jpg'
               width={200}
               height={235}
               priority
              />
              <h2>
                Cloths <span>-&gt;</span>
              </h2>
              <p>
              Feast your eyes on our cotton marvels, where breathability meets fashion.
              </p>
            </Link>
          </div>
        </main>
      )
}

