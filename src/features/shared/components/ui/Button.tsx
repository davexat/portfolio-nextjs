import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "button" | "a";
    href?: string;
  };

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ as, href, children, className = "", ...props }, ref) => {
    const Element = as ?? (href ? "a" : "button");

    return (
      <Element
        ref={ref as any}
        className={`${className} cursor-pointer`}
        {...(href ? { href } : {})}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

export default Button;