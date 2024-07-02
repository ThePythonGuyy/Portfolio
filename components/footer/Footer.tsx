import React from 'react'
import styles from './footer.module.scss'
import MagicButton from '../ui/MagicButton'
import { profileLinks } from '@/data'

export default function Footer() {
  return (
   <footer className={styles.footer} id='contact'>
<div className={styles.bgImgCont}>
<img src="/footer-grid.svg" alt="grid" />
</div>
<div className={styles.footerCont}>
    <h1>
        Ready to take <span>digital <br/> presence to the next level?</span>
    </h1>
    <p>Reach out to me today and let&apos; discuss how I can help you achieve your goals.</p>
    <a href="mailto:thepythonguy@outlook.com">
        <MagicButton title="Let's get in touch" icon='/icons/location.svg' position='right' styles={styles.button} />
    </a>
</div>
<div className={styles.footerData}>
    <p> Copyright © 2024 Rahul</p>

    <div>
        {profileLinks.map((profile) => (
            <a href={profile.link} target='_blank'>
                <img src={profile.img} alt={profile.name} className={profile.name === 'LinkedIn' ? '!w-[60%] ' : ''} />
            </a>
        ))}
    </div>
</div>

   </footer>
  )
}
