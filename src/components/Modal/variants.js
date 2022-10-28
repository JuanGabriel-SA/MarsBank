export const modalVariants = {
    show: {
        display: 'flex',
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: 'circOut'
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'circIn',
        },
        transitionEnd: {
            display: 'none'
        }
    }
}

export const contentVariants = {
    show: {
        display: 'block',
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            ease: 'circOut'
        }
    },
    hidden: {
        opacity: 0,
        x: 200,
        transition: {
            duration: 0.2,
            ease: 'circIn'
        },
        transitionEnd: {
            display: 'none'
        }
    }
}