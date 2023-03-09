import Link from "next/link";
import { chakra, LinkProps } from "@chakra-ui/react";

// This is a wrapper around the Chakra Link component that allows us to use
// Next.js's Link component as the underlying implementation.
const ChackraNextLink: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const OptimizedLink = chakra(Link, {
    shouldForwardProp: (prop) => ["href", "children"].includes(prop),
  });

  return (
    <OptimizedLink href={href ? href : ""} {...props}>
      {children}
    </OptimizedLink>
  );
};

export default ChackraNextLink;
