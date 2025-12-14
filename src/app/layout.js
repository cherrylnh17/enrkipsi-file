import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SecureFile - Amankan File Pribadi Anda ",
    template: "%s | Aplikasi Enkripsi File Aman",
  },
  description:
    "Aplikasi enkripsi dan dekripsi file berbasis web yang aman dan mudah digunakan menggunakan algoritma AES-256-GCM. Seluruh proses dilakukan langsung di browser untuk menjaga privasi data.",
  keywords: [
    "enkripsi file",
    "dekripsi file",
    "aes 256 gcm",
    "keamanan data",
    "enkripsi file online",
    "kriptografi",
  ],
  authors: [{ name: "Luqman Nur Hakim" }],
  creator: "Luqman Nur Hakim",
  openGraph: {
    title: "Aplikasi Enkripsi File Aman",
    description:
      "Enkripsi dan dekripsi file secara aman menggunakan AES-256-GCM langsung di browser tanpa mengunggah file ke server.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
