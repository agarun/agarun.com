function Monogram({
  bottom = 'var(--colors-link-alt-dark)',
  leftBottom = 'transparent',
  rightBottom = 'transparent',
  left = 'var(--colors-link-alt)',
  right = 'var(--colors-grey-100)',
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 416" {...props}>
      <path
        d="M194 16L28 112v256l55-32v-64l56-32v64l55-32V16zM83 144l56-32v64l-56 32v-64z"
        fill={left}
      />
      <path d="M305 144l-56 32 56 32v-64z" fill={left} />
      <path d="M305 272l-56 32v64l56-32v-64z" fill={left} />
      <path
        d="M194 16v256l55 32v-64l56 32v64l55 32V112L194 16zm55 160v-64l56 32v64l-56-32z"
        fill={right}
      />
      <path d="M83 144v64l56-32-56-32z" fill={right} />
      <path d="M83 272v64l56 32v-64l-56-32z" fill={right} />
      <path
        d="M139 112l-56 32 56 32v-64zM139 240l-56 32 56 32v-64z"
        fill={leftBottom}
      />
      <path
        d="M249 112v64l56-32-56-32zM249 240v64l56-32-56-32z"
        fill={rightBottom}
      />
      <path d="M194 272l-55 32 55 32 55-32-55-32z" fill={bottom} />
      <path
        d="M83 336l-55 32 55 32 56-32-56-32zM305 336l-56 32 56 32 55-32-55-32z"
        fill={bottom}
      />
    </svg>
  );
}

export default Monogram;
