import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "100 900",
});


export const metadata = {
  title: "Across the Valley",
  description: " In a world divided by a vast valley, two souls find themselves caught in the tides of fate.",
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
