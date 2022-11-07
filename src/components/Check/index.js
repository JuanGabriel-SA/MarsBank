import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './Check.css';
const Check = ({ children, style, animate, toggle, onStart, onClose, ...props }) => {
    const animateCircle = useAnimation();
    const animateCheck = useAnimation();

    async function hide() {
        await animateCheck.start({
            pathLength: 0,
            transition: {
                duration: 0.6,
                ease: 'circIn'
            }
        })
        await animateCircle.start({
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.4,
                ease: 'backIn'
            }
        })
        onClose !== undefined && onClose();
    }

    async function show() {
        await animateCircle.start({
            opacity: 1,
            scale: 0.9,
            transition: {
                duration: 0.4,
                ease: 'backOut'
            }
        })
        animateCheck.start({
            pathLength: 1,
            transition: {
                duration: 0.6,
                ease: [0.26, 0.1, 0.47, 1.1]
            }
        })
    }

    useEffect(() => {
        //O check é animado para mostrar, logo após 1 segundo é animado para ocultar...
        if (animate) {
            onStart !== undefined && onStart();
            show();
            const timer = setTimeout(async () => {
                await hide();
                toggle(false);
            }, 1100)
            return () => clearTimeout(timer);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animate])
    return (
        <svg id="Circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 736.01 736">
            {/*Grupo de paths que inclui o círculo e os detalhes */}
            <motion.g
                initial={{ scale: 0 }}
                animate={animateCircle}
                className='circle-details'
                id="Circle_details"
                data-name="Circle details">
                <path class="cls-1" d="M1305,510c0,172.94-119.3,318-280.09,357.43A368.59,368.59,0,0,1,937,878c-203.24,0-368-164.76-368-368S733.76,142,937,142a366.27,366.27,0,0,1,182.5,48.37C1230.32,253.78,1305,373.17,1305,510Z" transform="translate(-569 -142)" />
                <path class="cls-2" d="M1305,510c-.7,117.27-57,229-136,286-29.12,21-59,41-104,59C945.1,903,831,683.87,831,511s108.66-318,234.59-321c21.13.76,45.36,2.65,66,12C1220,242,1305.84,369.2,1305,510Z" transform="translate(-569 -142)" />
                <path class="cls-3" d="M1119.5,190.5" transform="translate(-569 -142)" />
                <path class="cls-3" d="M960.5,877.5" transform="translate(-569 -142)" />
                <path class="cls-4" d="M1144.06,814.26" transform="translate(-569 -142)" />
                <circle class="cls-5" cx="141.5" cy="190.5" r="11.5" />
                <circle class="cls-5" cx="264" cy="100" r="10" />
                <path class="cls-5" d="M575.1,443S709,473,746,495s-173-38-173-38Z" transform="translate(-569 -142)" />
                <circle class="cls-5" cx="97.5" cy="421.5" r="16.5" />
                <path class="cls-5" d="M769,580.77c-1-2.15,1.47-4.32,4.64-4.19,28.54,1.17,103.58,11.73,179.38,9.73,99.55-2.62,200.33-18,198-16.36-5,17.94-90,24.32-116.88,25.9-2.28.13-2.91,2.28-.91,3.07,95.66,36.9-179.93,22-194.8,22.66-5.06-1.56,1.19-7.34,7.41-12,3.8-2.83,1.64-7.54-3.79-8.21C819.37,598.6,775.34,594.62,769,580.77Z" transform="translate(-569 -142)" />
                <path class="cls-5" d="M938.65,486.44c21.82.88,57-8.78,78.35-22.44,12.42-7.95,12-15,27-18,35.24,20.1-7,41-47,45-26.91,8.05-47.48,17.06-53.33,19C929,509.7,921.58,486.74,938.65,486.44Z" transform="translate(-569 -142)" />
                <path class="cls-5" d="M1068,435s40-9,41-25,24.33-7,22.67,0S1105,444,1089,446,1060,446,1068,435Z" transform="translate(-569 -142)" />
                <path class="cls-5" d="M1167,329c-12,5.42-14-8.7-2-14,44.79-19.8,50.88-39,55-39,2,0,8,9,13,15C1235.33,293.79,1194,316.76,1167,329Z" transform="translate(-569 -142)" />
                <circle class="cls-5" cx="637" cy="265" r="6" />
                <circle class="cls-5" cx="664.5" cy="386.5" r="7.5" />
                <circle class="cls-5" cx="469" cy="540" r="9" />
                <circle class="cls-5" cx="301.5" cy="502.5" r="5.5" />
            </motion.g>
            {/*Path do check */}
            <motion.path
                initial={{ pathLength: 0 }}
                animate={animateCheck}
                id="Check"
                class="cls-6"
                d="M760.63,570.21c23.23,4.12,115.14,165.21,119.08,178.58l.44,1.27a15.72,15.72,0,0,0,13.26,9.76c8.24.76,14.8-6.52,14.1-14.76C902.81,689.68,1057,260,1114,260.47"
                transform="translate(-569 -142)" />
        </svg>
    )
}

export default Check;