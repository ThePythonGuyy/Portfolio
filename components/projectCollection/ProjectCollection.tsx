"use client"
import { projects } from "@/data";
import styles from "./projectCollection.module.scss";
import { PinContainer } from "../ui/3d-pin";


export default function ProjectCollection() {
  function vwToPixels(vw:any):Number {
    var viewportWidth = window.innerHeight;
    return (vw / 100) * viewportWidth;
  }
  
  // Example usage
  var tenVwInPixels = vwToPixels(10);
  console.log(tenVwInPixels);
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        A small selection of <span>recent projects</span>
      </h1>
      <div className={styles.projContainer}>
        {projects.map((project) => (
          <div className={styles.projectCard}>
            <PinContainer title="" href={project.link}>
              <div className={styles.CardImgContainer}>
                <div>
                  <img src="/bg.png" alt="bg img" />
                  <img src={project.img} alt={project.title} />
                </div>
              </div>
              <div className={styles.titleDes}>
                <h1 className={styles.projTitle}>{project.title}</h1>
                <p className={styles.projDes}>{project.des}</p>
              </div>

              <div className={styles.projAddInfo}>
                <div >
                  {project.iconLists.map((icon) => (
                    <div key={icon} >
                      <img src={icon} alt={icon} />
                    </div>
                  ))}
                </div>
                <div>
                  <p><span>Check Live Site</span> <img src="/icons/arrow.svg" alt="arrow" /></p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
