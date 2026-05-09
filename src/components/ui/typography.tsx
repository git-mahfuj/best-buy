import { cn } from "@/lib/utils";

const headingVariants = {
  h1: "text-4xl font-extra-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-semibold tracking-tight first:mt-0",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  "section-title": "text-3xl font-bold mb-6 border-b pb-2",
  "sub-heading": "text-lg text-muted-foreground font-medium",
};

interface headingProps {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof headingVariants;
}

const Heading = ({ children, className, variant = "h2" }: headingProps) => {
  return <p className={cn(headingVariants[variant], className)}>{children}</p>;
};

export default Heading;
