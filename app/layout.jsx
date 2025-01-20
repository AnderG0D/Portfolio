import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Edgar Anderson",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
