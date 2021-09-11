import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const styles = {
  copyIcon: css`
    position: relative;
    font-weight: 600;
    color: var(--colors-text-secondary);
    transition: opacity 200ms ease-out;
    &:hover {
      opacity: 0.8;
    }
  `,
  copiedIcon: css`
    padding: calc(var(--spacing) * 0.25) calc(var(--spacing) * 0.5);
    position: absolute;
    left: -12px;
    bottom: 28px;
    font-size: calc(var(--font-size-scale) * 13px);
    color: var(--colors-grey-100);
    background-color: var(--colors-grey-800);
    border-radius: var(--shape-border-radius);
  `,
};

function CopyIconButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    }
  };

  return (
    <button onClick={() => handleCopyText(text)}>
      <span
        css={styles.copyIcon}
        role="img"
        aria-label="copy email address to clipboard"
      >
        📋
        {isCopied && (
          <motion.span
            initial={{ opacity: 0, y: '25%' }}
            animate={{ opacity: 1, y: 0 }}
            css={styles.copiedIcon}
          >
            copied
          </motion.span>
        )}
      </span>
    </button>
  );
}

export default CopyIconButton;
