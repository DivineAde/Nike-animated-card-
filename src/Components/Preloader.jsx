import React, { useRef, useEffect, useState} from 'react';
import gsap, {Power4, Sine} from 'gsap'


const Preloader = () => {
  let loading_screen = useRef(null);
  let loading_1 = useRef(null);
  let loading_2 = useRef(null);
  let loading_3 = useRef(null);
  let loading_4 = useRef(null);
  let loading_5 = useRef(null);
  let loading_6 = useRef(null);
  let loading_7 = useRef(null);
  let loading_8 = useRef(null);
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.from(loading_1, {
      opacity: 0,
      duration: 0.5,
      skewX: 10,
      y: -200,
      ease: Sine.easeInOut,
    });
    timeline.from(
      loading_2,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      loading_3,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      loading_4,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      loading_5,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      loading_6,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(loading_2, {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      ease: Sine.easeInOut,
      x: -200,
    });
    timeline.to(
      loading_5,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );
    timeline.to(
      loading_3,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -300,
      },
      "-=.2"
    );
    timeline.to(
      loading_6,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );
    timeline.to(
      loading_4,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -300,
      },
      "-=.2"
    );
    timeline.to(loading_1, {
      fontSize: "2vmax",
      ease: Sine.easeInOut,
    });
  });
  return (
    <div ref={(el) => (loading_screen = el)} className='text-slate-50 uppercase' >
      <div className='fixed top-0 left-0 h-screen w-full z-50 bg-[#101010]'>
        <div>
          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_1 = el) } className='font-semibold text-[#e7e7e7] text-[6vmax] md:text-[10.1vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>

          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_2 = el) } className='font-semibold text-[#01ff01] text-[6.1vmax] md:text-[10.2vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>

          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_3 = el) } className='font-semibold text-[#fc1f1f] text-[6.2vmax] md:text-[10.3vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>

          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_4 = el) } className='font-semibold text-[#8cf7f7] text-[6.3vmax] md:text-[10.4vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>

          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_5 = el) } className='font-semibold text-[#4254f8] text-[6.4vmax] md:text-[10.5vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>

          <div className='flex absolute top-1/2 items-center justify-center w-full'>
            <div ref={(el) => (loading_6 = el) } className='font-semibold text-[#ac00ac] text-[6.5vmax] md:text-[10.6vmax] mix-blend-difference leading-none'>
              TOPG.DEV
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
