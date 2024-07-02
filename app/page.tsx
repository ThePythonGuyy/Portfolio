import Image from "next/image";
import styles from "@/app/home.module.scss";
import Hero from "@/components/hero/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/grid/Grid";
import ProjectCollection from "@/components/projectCollection/ProjectCollection";

import Approach from '@/components/approach/Approach'
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.main}>
        {/* <FloatingNav /> */}
        <Hero />
        <Grid />
        <ProjectCollection />
        <Approach />
        <Footer />
        {/* <div className="mt-20">
        <Grid />

        </div> */}
  
      </div>
    </section>
  );
}
