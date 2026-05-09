import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Container } from "@/components/ui/container";
const GlobalWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Container>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default GlobalWrapper;
