import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/footer";
import NextAuthProvider from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Matrix",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden px-[10%] bg-black">
        <NextAuthProvider>
          <NavigationBar></NavigationBar>
          {children}
          <Footer></Footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
