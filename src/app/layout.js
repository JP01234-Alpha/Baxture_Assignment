import "./globals.css";

export const metadata = {
  title: "Next js assignment",
  description: "Next js assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
