import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Utkarsh Ahuja",
  description: "Hire experienced Full Stack Developer (React, Node.js, TypeScript, MongoDB, Docker, AWS). Open for freelance projects & jobs. Expert in MERN Stack, UI/UX, cloud computing, & more. Explore my portfolio!",
  keywords: "Full Stack Developer New Delhi India, React Developer, Node.js Developer, TypeScript Developer, MongoDB Developer, Docker Expert, AWS, Open Source, Collaboration, Web Developer, Software Engineer, MERN Stack, JavaScript Developer, UI/UX, Serverless Architectures, Cloud Computing, DevOps, Software Development, Tech Blogger, Code Mentor, API Integration, PWA, Responsive Web Design, Scalable Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="description" content="Utkarsh Ahuja | Full Stack Developer in New Delhi, India | Expert in React, Node.js, TypeScript, MongoDB, Docker, AWS. Open for freelance projects & jobs. Explore my portfolio!" />
      <meta name="keywords" content="Full Stack Developer New Delhi India, React Developer, Node.js Developer, TypeScript Developer, MongoDB Developer, Docker Expert, AWS, Open Source, Collaboration, Web Developer, Software Engineer, MERN Stack, JavaScript Developer, UI/UX, Serverless Architectures, Cloud Computing, DevOps, Software Development, Tech Blogger, Code Mentor, API Integration, PWA, Responsive Web Design, Scalable Applications" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Utkarsh Ahuja | Full Stack Developer in New Delhi, India | React, Node.js, TypeScript" />
      <meta name="twitter:description" content="Hire experienced Full Stack Developer (React, Node.js, TypeScript, MongoDB, Docker, AWS). Open for freelance projects & jobs. Expert in MERN Stack, UI/UX, cloud computing, & more. Explore my portfolio!" />
      <meta name="twitter:image" content="https://i.ibb.co/562Ffhj/utkarsh.png" />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
