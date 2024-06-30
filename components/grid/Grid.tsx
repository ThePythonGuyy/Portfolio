import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { gridItems } from '@/data'
import styles from './grid.module.scss'

export default function Grid() {
  const gridItemStyles = [
    styles.defaultItemStyles,
    styles.item1,
    styles.item2,
    styles.item3,
    styles.item4,
    styles.item5,
    styles.item6,
  ]
  return (
<section id='about' className={styles.gridContainer}> 
    <BentoGrid className={styles.bentoGrid}>
      {gridItems.map((item) => (
        <BentoGridItem 
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          gridItemStyles={gridItemStyles}
          img={item.img}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
</section>
  )
}
