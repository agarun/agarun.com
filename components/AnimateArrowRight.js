import { motion } from 'motion/react';
import useColorMode from '../lib/hooks/useColorMode';

const hoverColor = 'var(--colors-black)';

export function AnimateArrowRight({ isHovering }) {
  const { colorMode } = useColorMode();
  const defaultColor = colorMode === 'dark' ? '#696d72' : '#d1d5db';

  return (
    <div
      style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <svg
        width="300"
        height="20"
        viewBox="0 0 177 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 10 H177"
          stroke={defaultColor}
          strokeWidth="2"
          strokeDasharray="16 20"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 100%)' }}
          transition={{
            clipPath: {
              duration: 1,
            },
          }}
          style={{
            transform: 'translateY(2px)',
          }}
        />
        <motion.path
          stroke={defaultColor}
          d="M5 12h24 M22 5l7 7-7 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 100%)' }}
          transition={{
            clipPath: {
              delay: 1,
            },
          }}
          style={{
            transform: 'translateX(177px)',
          }}
        />

        <motion.path
          d="M0 10 H177"
          stroke={hoverColor}
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
            pathOffset: 0,
          }}
          animate={{
            pathLength: 0.3,
            pathOffset: 1,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            transform: 'translateY(2px)',
          }}
        />
        <motion.path
          d="M5 12h24 M22 5l7 7-7 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ stroke: defaultColor, clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={{
            stroke: isHovering ? hoverColor : defaultColor,
            clipPath: 'inset(0% 0% 0% 0%)',
            translateX: [177, 177 + 6, 177],
          }}
          transition={{
            delay: isHovering ? 0.6 : 0,
            type: 'spring',
            stiffness: 100,
            damping: 20,
            translateX: {
              delay: 1.33,
              duration: 0.75,
              repeat: Infinity,
              repeatDelay: 0.75,
            },
          }}
          style={{
            transform: 'translateX(177px)',
          }}
        />
      </svg>
    </div>
  );
}

export default AnimateArrowRight;
