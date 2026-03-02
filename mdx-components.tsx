import BlogLayout from "./components/blog-layout";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { martianNight } from "./lib/utils";


const extractText = (children: any): string => {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }
  if (children?.props?.children) {
    return extractText(children.props.children);
  }
  return "";
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-secondary-foreground my-4 font-semibold text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-secondary-foreground my-4 font-semibold text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-secondary-foreground my-4 font-semibold text-xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-secondary-foreground my-4 font-semibold">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-secondary-foreground my-4 font-semibold">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-secondary-foreground my-4 font-semibold">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className="text-secondary-foreground text-base my-4 leading-7">
        {children}
      </p>
    ),
    b: ({ children }) => <b className="text-primary text-base">{children}</b>,
    li: ({ children }) => <li className="text-primary">{children}</li>,
    image: (props) => (
      <Image
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          margin: "1rem 0",
        }}
        className="rounded-md"
        {...(props as ImageProps)}
      />
    ),
    pre: ({ children, ...props }: any) => {
      // Get the code element's className from children
      const codeElement = children?.props || {};
      const className = codeElement.className || "";
      const codeContent = extractText(codeElement.children);

      const match = /language-(\w+)/.exec(className);
      const language = match ? match[1] : "javascript";

      return (
        <SyntaxHighlighter
          language={language}
          style={martianNight as Record<string, React.CSSProperties>}
          className="rounded-md my-4"
          PreTag="div"
          CodeTag="div"
        >
          {codeContent.replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    },
    code: ({ children, className, ...props }) => {
      if (!className) {
        return (
          <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    BlogLayout,
    ...components,
  };
}
