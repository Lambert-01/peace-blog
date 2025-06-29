'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface ClientMarkdownProps {
  content: string;
}

export default function ClientMarkdown({ content }: ClientMarkdownProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {content}
    </Markdown>
  );
} 