export const metadata = {
  title: "Gorgeous Candles",
  description: "Luxury coconut soy candles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
