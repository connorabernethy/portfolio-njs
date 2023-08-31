import Content from '@/components/v2/Content'
import Nav from '@/components/v2/Nav'
import Socials from '@/components/v2/Socials'
import TestCard from '@/components/v2/TestCard';

import { useRef } from 'react'

export default function Home(props: any) {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const handleClickAb = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const handleClickProj = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const experienceRef = useRef<null | HTMLDivElement>(null);
  const handleClickExp = () => {
    experienceRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const certificationRef = useRef<null | HTMLDivElement>(null);
  const handleClickCert = () => {
    certificationRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="body leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Connor Abernethy
                </h1>
                <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                  Full-Stack Software Developer & Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  ASU Honors Graduate with a passion for software and fitness.
                </p>
                <Nav clickFunctions={[handleClickAb, handleClickExp, handleClickProj, handleClickCert]}></Nav>
                <Socials></Socials>
              </div>
            </header>
            <Content about={aboutRef} projects={projectsRef} experience={experienceRef} certifications={certificationRef}/>
          </div>
        </div>
    </div>
    // <main
    //   className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
    //     <Nav about="About" projects="Projects" contact="Contact"></Nav>
    //     <div className="body-container">
    //       <div>
    //         <h1 className="name leaguespartan">Connor Abernethy</h1>
    //         <p className="description leaguespartan">Full-stack Software Developer & Engineer</p>
    //       </div>
    //       <div className="spline">
    //         <SplineObject/>
    //       </div>
    //     </div>
    // </main>
  )
}
