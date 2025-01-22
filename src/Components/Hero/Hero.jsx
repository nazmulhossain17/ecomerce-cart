'use client'
import { motion } from 'framer-motion';

import styles from './Hero.module.css';
import Button from './Button';


const Hero = () => {

  return (
    <section>
      
      <div className={styles.heroSection}>
      <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <div className={styles.heroWrapper}>
        
          <h1 className={styles.heroHeading}>
            <div className={styles.headingLine}>
              <span>Explore</span>
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-950 to-indigo-500 text-transparent bg-clip-text animate-gradient">Online</span>
            </div>
            <span>EComerce</span>
          </h1>
          
          
        
      </div>
      </motion.div>
    </div>
      <div className={styles.infoSection}>
            <div className={styles.statWrapper}>
              <div className={styles.statCircle}>
                500
              </div>
              <span className={styles.statText}>
                Satisfied Customers
              </span>
            </div>
            
            <div className='flex items-center justify-between gap-7'>
            {/* <p className={styles.description}>
             We build engaging websites, brands & innovative e-commerce solutions.
            </p> */}
              <div className={styles.description}>
              <span className="">Enhance your online presence with engaging websites, and innovative e-commerce solutions for success.</span>
            </div>

            
            <Button className={styles.caseStudiesButton}>
              Case Studies
            </Button>
          
            </div>
          </div>
          
    </section>
  )
}

export default Hero;