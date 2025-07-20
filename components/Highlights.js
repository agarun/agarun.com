import { css } from '@emotion/react';
import { MeshGradient, GodRays } from '@paper-design/shaders-react';
import { ArrowDownIcon, GlobeIcon } from '../components/Icon';

const size = 272;

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
    background: var(--colors-static-white);
    border-radius: 24px;
    height: ${size}px;
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
      opacity: 0.89;
    }
  `,
  areaC: css`
    grid-area: c;
    text-decoration: none;
    cursor: inherit;
    &:hover {
      opacity: 0.91;
    }
    canvas {
      width: ${size}px;
      height: 100%;
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
    width: 100%;
    height: ${size}px;
    border-radius: 24px;
    background-image: url('/images/projects/apple/gradient.webp');
    background-position: center;
    background-repeat: no-repeat;
    box-shadow:
      inset 0 0 12px rgba(255, 255, 255, 0.5),
      inset 0 0 20px rgba(255, 255, 255, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.1),
      inset 0 2px 5px rgba(0, 0, 0, 0.15);
    background-size: 140%;
    @media (max-width: 867px) {
      background-size: 220%;
    }
  `,
  textTop: css`
    position: absolute;
    top: 0;
    padding: 25px 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    color: var(--colors-text-secondary);
    color: transparent;
    background: linear-gradient(
      to top,
      var(--colors-grey-50) 33%,
      var(--colors-grey-200) 77%
    );
    background-clip: text;
  `,
  textBottom: css`
    position: absolute;
    bottom: 0;
    padding: 25px 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    color: var(--colors-text-secondary);
    color: transparent;
    background: linear-gradient(
      to top,
      var(--colors-grey-50) 33%,
      var(--colors-grey-200) 77%
    );
    background-clip: text;
  `,
  textCenter: css`
    padding: 20px;
    color: var(--colors-static-white);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 34px;
    line-height: 1.25;
    text-align: center;
    text-shadow: rgba(104, 64, 154, 0.33) 0px 1px 2.5px;
  `,
};

function Apple() {
  return (
    <div css={[styles.area, styles.areaA]}>
      <div css={appleStyles.gradient}>
        <p css={appleStyles.textTop}>Apple</p>
        <p css={appleStyles.textBottom}>Foundation Models</p>
        <div css={appleStyles.textCenter}>
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
    width: 100%;
    height: ${size}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    font-size: 31px;
    text-align: center;
    line-height: 1.2;
    font-weight: 700;
    filter: brightness(1.15);
    background-image: url('/images/projects/photography/1.webp');
    background-position: 0% 80%;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 24px;

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
      background: rgba(255, 255, 255, 0.125);
      pointer-events: none;
      border-radius: 24px;
      box-shadow:
        inset 0 0 12px rgba(255, 255, 255, 0.1),
        inset 0 0 20px rgba(255, 255, 255, 0.03),
        inset 0 0 30px rgba(255, 255, 255, 0.03),
        inset 0 2px 5px rgba(0, 0, 0, 0.15);
      z-index: 2;
    }
  `,
  text: css`
    position: relative;
    background: linear-gradient(
      to bottom,
      var(--colors-static-white) 16%,
      #6695bd 50%,
      var(--colors-static-white) 60%,
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
      <div css={photographyStyles.photo}>
        <GlobeIcon
          style={{
            fill: 'var(--colors-static-white)',
            color: 'var(--colors-static-white)',
            width: 52,
            height: 52,
            zIndex: 999,
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

const generativeArtStyles = {
  link: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/images/projects/ronivonu/220729.webp);
    background-position: center;
    background-size: 190%;
    background-repeat: no-repeat;
    font-size: 38px;
    font-weight: 500;
    text-decoration: none;
    cursor: inherit;
    color: var(--colors-static-white);
    font-family: var(--font-family-monospace);
    line-height: 1;
    text-align: center;
    text-shadow:
      0 0 7px rgba(255, 255, 255, 0.5),
      0 0 10px rgba(255, 255, 255, 0.4),
      0 0 21px rgba(255, 255, 255, 0.3),
      0 0 42px rgba(0, 128, 255, 0.2),
      0 0 82px rgba(0, 128, 255, 0.1),
      0 0 92px rgba(0, 128, 255, 0.1),
      0 0 102px rgba(0, 128, 255, 0.05),
      0 0 151px rgba(0, 128, 255, 0.05);
    box-shadow:
      inset 0 0 12px rgba(255, 255, 255, 0.5),
      inset 0 0 20px rgba(255, 255, 255, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.1),
      inset 0 2px 5px rgba(0, 0, 0, 0.15);
  `,
  icon: css`
    position: absolute;
    left: calc(50% - 26px);
    bottom: 21px;
    opacity: 0.96;
    filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.3))
      drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.2))
      drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1));
  `,
};

function GenerativeArt() {
  return (
    <a
      css={[styles.area, styles.areaC, generativeArtStyles.link]}
      href="https://instagram.com/ronivonu"
      target="_blank"
      rel="noopener noreferer"
    >
      generative
      <br />
      artist
      <ArrowDownIcon width="52" height="52" css={generativeArtStyles.icon} />
      <GodRays
        colorBack="#000000"
        color1="#f0f0f0"
        color2="#f0f0f0"
        color4="#f0f0f0"
        color3="#f0f0f0"
        offsetX={size / 4}
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
  container: css`
    padding: 20px;
    color: var(--colors-static-white);
    width: 100%;
    display: flex;
    height: ${size}px;
    justify-content: center;
    align-items: center;
  `,
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
    position: absolute;
    pointer-events: none;
    filter: blur(14px);
    font-size: 360px;
    z-index: 1;
    color: rgba(255, 255, 255, 0.57);
    @media (max-width: 867px) {
      transform: scaleX(1);
    }
  `,
  role: css`
    position: absolute;
    bottom: 56px;
    padding: 25px 0;
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
    font-size: 19px;
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
    @media (max-width: 500px) {
      bottom: 44px;
      font-size: 17px;
    }
  `,
};

function MSK() {
  return (
    <div css={[styles.area, styles.areaD]}>
      <div css={mskStyles.container}>
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
            height: size,
            borderRadius: 24,
            zIndex: 0,
          }}
        />
        <p css={mskStyles.company}>Memorial Sloan Kettering Cancer Center</p>
        <p css={mskStyles.role}>Pathology Software &#10022; Technical Lead</p>
        <p css={mskStyles.star}>&#10022;</p>
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
            stroke="var(--colors-static-white)"
            strokeWidth="1"
            filter="url(#layer-blur)"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="170"
            ry="80"
            fill="none"
            stroke="var(--colors-static-white)"
            strokeWidth="1"
            filter="url(#layer-blur)"
          />
          <ellipse
            cx="300"
            cy="200.5"
            rx="256"
            ry="54"
            fill="rgba(255, 255, 255, 0.125)"
            stroke="var(--colors-static-white)"
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
