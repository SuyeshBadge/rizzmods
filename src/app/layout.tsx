import { ShopifyProvider } from '@shopify/hydrogen-react';
import shopifyClient from '../config/shopify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ShopifyProvider shopifyClient={shopifyClient}>
          {children}
        </ShopifyProvider>
      </body>
    </html>
  );
}

// Add these meta tags to improve mobile performance
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  <meta name="theme-color" content="#000000" />
</head> 