import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import s from "./Slider.module.sass"

type SliderType = {
    arrayElements: any[]
}

const Slider: React.FC<SliderType> = props => {
    const {arrayElements} = props


    const [width, setWidth] = useState<number>(0)

    const carousel= useRef<HTMLHeadingElement>(null)

    useEffect(()=> {
        if (carousel.current !== null) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }
    }, [])



    return (
            <div className={s.carouselBlock}>
                <span className={s.arrowLeft}/>
                <motion.div ref={carousel} className={s.carousel}>
                    <motion.div className={s.innerCarousel}
                                drag={"x"}
                                dragConstraints={{right: 0, left: -width}}
                    >
                        {arrayElements.map((element => {
                            return (<motion.div key={element.key} className={s.item}>
                                {element}
                            </motion.div>)
                        }))}
                    </motion.div>
                </motion.div>
                <span className={s.arrowRight}/>
            </div>
    );
};

export default Slider;