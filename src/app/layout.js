import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "100 900",
});


export const metadata = {
  title: "Trip Planning",
  description: "Tailored Trip planning around life's specice moment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
