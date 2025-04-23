import { css } from '@emotion/react';
import { MeshGradient, GodRays } from '@paper-design/shaders-react';
import { ArrowDownIcon, GlobeIcon } from '../components/Icon';

const styles = {
  grid: css`
    display: grid;
    width: 840px;
    margin-bottom: 12px;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'a a b'
      'c d d';
    cursor:
      url('/images/pointer.svg') 24 24,
      auto;

    @media (max-width: 867px) {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-areas:
        'a'
        'b'
        'c'
        'd';
    }
  `,
  area: css`
    position: relative;
    background: var(--colors-white);
    border-radius: 24px;
    height: 272px;
    transition: opacity 200ms ease;
  `,
  areaA: css`
    display: flex;
    flex-direction: column;
    grid-area: a;
  `,
  areaB: css`
    grid-area: b;
    text-decoration: none;
    cursor: inherit;
    &:hover {
      opacity: 0.94;
    }
  `,
  areaC: css`
    grid-area: c;
    text-decoration: none;
    cursor: inherit;
    &:hover {
      opacity: 0.92;
    }
    canvas {
      width: 272px;
      @media (max-width: 867px) {
        width: 100%;
        height: 100%;
      }
    }
  `,
  areaD: css`
    grid-area: d;
    display: flex;
    flex-direction: column;
    svg {
      width: 600px;
      height: 400px;
      @media (max-width: 867px) {
        width: 100%;
        height: 100%;
      }
    }
  `,
};

const appleStyles = {
  gradient: css`
    background-size: 140%;
    @media (max-width: 867px) {
      background-size: 200%;
    }
  `,
};

function Apple() {
  return (
    <div css={[styles.area, styles.areaA]}>
      <div
        css={appleStyles.gradient}
        style={{
          width: '100%',
          height: 272,
          borderRadius: 24,
          backgroundImage: `url('/images/projects/apple/gradient.webp')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow:
            'inset 0 0 12px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1), inset 0 2px 5px rgba(0, 0, 0, 0.15)',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: 0,
            padding: '25px 0',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            fontSize: 20,
            letterSpacing: '-0.5px',
            fontWeight: 700,
            color: 'var(--colors-text-secondary)',
            color: 'transparent',
            background:
              'linear-gradient(to top, var(--colors-grey-50) 33%, var(--colors-grey-200) 77%)',
            backgroundClip: 'text',
          }}
        >
          Apple
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: 0,
            padding: '25px 0',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            fontSize: 20,
            letterSpacing: '-0.5px',
            fontWeight: 700,
            color: 'var(--colors-text-secondary)',
            color: 'transparent',
            background:
              'linear-gradient(to top, var(--colors-grey-50) 33%, var(--colors-grey-200) 77%)',
            backgroundClip: 'text',
          }}
        >
          Foundation Models
        </p>

        <div
          style={{
            padding: 20,
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: 34,
            lineHeight: 1.25,
            textAlign: 'center',
            textShadow: 'rgba(104, 64, 154, 0.33) 0px 1px 2.5px',
          }}
        >
          System Intelligence
          <br />
          Machine Learning
        </div>
      </div>
    </div>
  );
}

const photographyStyles = {
  photo: css`
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      filter: blur(0.5px);
      border-radius: 24px;
      z-index: 1;
    }

    &:hover:before {
      filter: blur(0px);
    }

    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.125); /* Soft white overlay */
      pointer-events: none;
      border-radius: 24px;
      box-shadow:
        inset 0 0 12px rgba(255, 255, 255, 0.1),
        inset 0 0 20px rgba(255, 255, 255, 0.03),
        inset 0 0 30px rgba(255, 255, 255, 0.03),
        inset 0 2px 5px rgba(0, 0, 0, 0.15);
      z-index: 2;
  `,
  text: css`
    position: relative;
    background: linear-gradient(
      to bottom,
      #ffffff 16%,
      #6695bd 50%,
      #fff 60%,
      #6695bd 92%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: 400;
    letter-spacing: -1px;
    transform: perspective(280px) rotateX(6deg);
    z-index: 5;

    &:before {
      background: none;
      content: 'Photography Portfolio';
      left: 0;
      top: 0;
      z-index: 0;
      position: absolute;
      filter: blur(3px);
    }
    &:after {
      background: none;
      content: 'Photography Portfolio';
      left: 0;
      top: 0;
      z-index: 0;
      position: absolute;
      text-shadow:
        -1px 0 1px #fbf3ffe1,
        2px 2px 5px rgba(0, 0, 0, 0.1),
        -2px -2px 5px rgba(0, 0, 0, 0.1);
    }
  `,
};

function PhotographyPortfolio() {
  return (
    <a
      css={[styles.area, styles.areaB]}
      href="https://photos.agarun.com/"
      target="_blank"
      rel="noopener noreferer"
    >
      <div
        style={{
          width: '100%',
          height: 272,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          fontSize: 31,
          textAlign: 'center',
          lineHeight: 1.2,
          fontWeight: 700,
          backgroundImage: `url('/images/projects/photography/1.webp')`,
          filter: 'brightness(1.15)',
          backgroundPosition: '0% 80%',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          borderRadius: 24,
        }}
        css={photographyStyles.photo}
      >
        <GlobeIcon
          style={{
            fill: 'white',
            color: 'white',
            width: 52,
            height: 52,
            zIndex: 293012390,
            position: 'relative',
            bottom: 24,
            opacity: 0.96,
            filter: `
          drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.4))
          drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.3))
          drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.2))
          drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1))
        `,
            fontFamily: 'var(--font-family-monospace)',
          }}
        />
        <span css={photographyStyles.text}>
          Photography
          <br />
          Portfolio
        </span>
      </div>
    </a>
  );
}

function GenerativeArt() {
  return (
    <a
      css={[styles.area, styles.areaC]}
      href="https://photos.agarun.com/"
      target="_blank"
      rel="noopener noreferer"
      style={{
        gridArea: 'c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/images/projects/ronivonu/220729.webp')`,
        backgroundPosition: 'center',
        backgroundSize: '190%',
        backgroundRepeat: 'no-repeat',
        fontSize: 38,
        fontWeight: 500,
        textDecoration: 'none',
        cursor: 'inherit',
        color: 'white',
        fontFamily: 'var(--font-family-monospace)',
        lineHeight: 1,
        textAlign: 'center',
        textShadow: `0 0 7px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.4),
    0 0 21px rgba(255, 255, 255, 0.3),
    0 0 42px rgba(0, 128, 255, 0.2),
    0 0 82px rgba(0, 128, 255, 0.1),
    0 0 92px rgba(0, 128, 255, 0.1),
    0 0 102px rgba(0, 128, 255, 0.05),
    0 0 151px rgba(0, 128, 255, 0.05)`,
        boxShadow:
          'inset 0 0 12px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1), inset 0 2px 5px rgba(0, 0, 0, 0.15)',
      }}
    >
      generative
      <br />
      artist
      <ArrowDownIcon
        width="52"
        height="52"
        style={{
          position: 'absolute',
          left: 'calc(50% - 26px)',
          bottom: 21,
          opacity: 0.96,
          filter: `
          drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.4))
          drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.3))
          drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.2))
          drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1))
        `,
        }}
      />
      <GodRays
        colorBack="#000000"
        color1="#f0f0f0"
        color2="#f0f0f0"
        color4="#f0f0f0"
        color3="#f0f0f0"
        offsetX={272 / 4}
        style={{
          mixBlendMode: 'screen',
          position: 'absolute',
          left: 0,
          borderRadius: 24,
        }}
      />
    </a>
  );
}

const mskStyles = {
  company: css`
    position: absolute;
    top: 60px;
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
    font-size: 22px;
    letter-spacing: -0.5px;
    font-weight: 600;
    color: transparent;
    background: linear-gradient(
      to top,
      var(--colors-grey-700) 33%,
      var(--colors-grey-500) 77%
    );
    background-clip: text;
    z-index: 2;
    @media (max-width: 867px) {
      top: 30px;
      padding: 25px;
      text-align: center;
      background: linear-gradient(
        to top,
        var(--colors-grey-700) 0%,
        var(--colors-grey-500) 25%,
        var(--colors-grey-700) 50%,
        var(--colors-grey-500) 75%
      );
      background-clip: text;
      line-height: 1.33;
    }
  `,
  star: css`
    transform: scaleX(2);
    @media (max-width: 867px) {
      transform: scaleX(1);
    }
  `,
};

function MSK() {
  return (
    <div css={[styles.area, styles.areaD]}>
      <div
        style={{
          padding: 20,
          color: 'white',
          width: '100%',
          display: 'flex',
          height: 272,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MeshGradient
          color1="#f1caf6"
          color2="#d6cdf7"
          color3="#b6d1f8"
          color4="#f2f2f2"
          speed={0.125}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 272,
            borderRadius: 24,
            zIndex: 0,
          }}
        />
        <p css={mskStyles.company}>Memorial Sloan Kettering Cancer Center</p>
        <p
          style={{
            position: 'absolute',
            bottom: 56,
            padding: '25px 0',
            display: 'flex',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexGrow: 1,
            fontSize: 19,
            letterSpacing: '-0.5px',
            fontWeight: 600,
            color: 'transparent',
            background:
              'linear-gradient(to top, var(--colors-grey-700) 33%, var(--colors-grey-500) 77%)',
            backgroundClip: 'text',
            zIndex: 2,
          }}
        >
          Pathology Software &#10022; Technical Lead
        </p>
        <p
          css={mskStyles.star}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            filter: 'blur(14px)',
            fontSize: 360,
            zIndex: 1,
            color: 'rgba(255, 255, 255, 0.57)',
          }}
        >
          &#10022;
        </p>
        <svg
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            opacity: 0.57,
            filter: 'blur(10px)',
            overflow: 'hidden',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <defs>
            <filter
              id="layer-blur"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>
          <ellipse
            cx="300"
            cy="200"
            rx="140"
            ry="110"
            fill="none"
            stroke="white"
            strokeWidth="1"
            filter="url(#layer-blur)"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="170"
            ry="80"
            fill="none"
            stroke="white"
            strokeWidth="1"
            filter="url(#layer-blur)"
          />
          <ellipse
            cx="300"
            cy="200.5"
            rx="256"
            ry="54"
            fill="rgba(255, 255, 255, 0.125)"
            stroke="white"
            strokeWidth="1"
            style={{ filter: 'blur(1.75px)' }}
          />
        </svg>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <div css={styles.grid}>
      <Apple />
      <PhotographyPortfolio />
      <GenerativeArt />
      <MSK />
    </div>
  );
}

export default Highlights;
