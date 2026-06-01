import "./globals.css";

export const metadata = {
  title: "Esmail Ali | IT Developer & Full Stack Developer",
  description: "IT Portfolio showcasing skills and projects in Full Stack Web Development, Flutter Mobile Apps, and IoT systems.",
  keywords: [
    "Esmail Ali", 
    "IT Developer", 
    "Full Stack Developer", 
    "Web Developer", 
    "Mobile Developer",
    "Flutter Developer", 
    "Laravel Developer", 
    "Nu3eed", 
    "Shrinkly", 
    "Alwahbani",
    "Yemen Developer",
    "Sana'a"
  ],
  authors: [{ name: "Esmail Ali" }],
  creator: "Esmail Ali",
  openGraph: {
    title: "Esmail Ali | IT Developer & Full Stack Developer",
    description: "IT Portfolio showcasing skills and projects in Full Stack Web Development, Flutter Mobile Apps, and IoT systems.",
    url: "https://Esmail514.github.io",
    siteName: "Esmail Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esmail Ali | IT Developer & Full Stack Developer",
    description: "IT Portfolio showcasing skills and projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
