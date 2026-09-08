import "./globals.css";

export const metadata = {
  title: "Esmail Ali | Software Engineer & Data Engineer",
  description: "Software Engineer and Data Engineer specializing in scalable backend architectures, high-performance data pipelines, distributed systems, and database engineering.",
  keywords: [
    "Esmail Ali", 
    "Software Engineer", 
    "Data Engineer", 
    "Backend Developer", 
    "Python Developer",
    "ETL Pipelines", 
    "PostgreSQL", 
    "SQL", 
    "Distributed Systems",
    "Cloud Architecture",
    "Docker",
    "Laravel",
    "REST APIs"
  ],
  authors: [{ name: "Esmail Ali" }],
  creator: "Esmail Ali",
  openGraph: {
    title: "Esmail Ali | Software Engineer & Data Engineer",
    description: "Software Engineer and Data Engineer specializing in scalable backend architectures, high-performance data pipelines, and distributed systems.",
    url: "https://Esmail514.github.io",
    siteName: "Esmail Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esmail Ali | Software Engineer & Data Engineer",
    description: "Software Engineer and Data Engineer specializing in scalable backend systems and high-throughput data pipelines.",
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
