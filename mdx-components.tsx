import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import CodeHeader from "@/components/ui/code-header";

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
        {...(props as ImageProps)}
      />
    ),
    pre: (props) => <pre {...props} className="rounded-lg border-2" />,
    code: ({ children, ...props }) => (
      <code
        {...props}
        style={{
          padding: "10px",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          fontSize: "0.8rem",
        }}
      >
        {children}
      </code>
    ),
    CodeHeader,
    ...components,
  };
}
