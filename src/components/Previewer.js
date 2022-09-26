import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export const Preview = ({ markdown }) => {

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: parser.render(markdown)
      }}
      id="preview"
    />
  );
};