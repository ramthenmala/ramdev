import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type HighLightCode = {
  children?: React.ReactNode;
  language?: string;
};

export const HighLightCode = ({ children, language }: HighLightCode) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};
