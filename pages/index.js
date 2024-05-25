import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import DrAkshay from '../components/home/DrAkshay';
import Contact from '../components/home/Contact';
import LabTabs from '../components/home/LabTabs';
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      {/* <HomeHero /> */}

      {/* <SlideBasicThree data={heroPhotoList}></SlideBasicThree> */}
      <LabTabs></LabTabs>
      {/* <Clinicinfo /> */}
      <Dentalservices></Dentalservices>
      {/* <Hero></Hero> */}

      <DrAkshay></DrAkshay>
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
      {/* <Faq /> */}
      <Contact></Contact>


      {/* <Degreesection /> */}

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

