import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Edgar Anderson — Backend Developer",
  description: "Backend developer in Chihuahua, Mexico. Focused on Node.js, NestJS, TypeScript, and practical software.",
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
