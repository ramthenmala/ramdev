import highlight from 'highlight.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { createRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

const HighLightCode = ({ children, language }) => {
  const code = createRef();

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  }, [code]);
  return (
    <pre>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default HighLightCode;
