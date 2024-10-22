import {
  Container,
  Footer,
  Header,
  NProgressProvider,
} from "@/components/shared";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jemmes | Главная",
};

import "./globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-background">
        <NProgressProvider>
          <Header />
          {children}
          <Container className="mt-20">
            <Footer />
          </Container>
        </NProgressProvider>
      </body>
    </html>
  );
};

export default RootLayout;
