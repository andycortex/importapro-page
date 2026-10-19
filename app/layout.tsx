import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImportaPro | Cotiza e importa mejor',
  description: 'Calcula el costo real de tus importaciones y compra con confianza.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const clean = (el) => {
                    if (!el || !el.attributes) return;
                    for (let i = el.attributes.length - 1; i >= 0; i--) {
                      const n = el.attributes[i].name;
                      if (n.startsWith('bis_') || n.startsWith('__processed_')) {
                        el.removeAttribute(n);
                      }
                    }
                  };
                  const obs = new MutationObserver((mutations) => {
                    for (const m of mutations) {
                      if (m.type === 'attributes') {
                        const n = m.attributeName;
                        if (n && (n.startsWith('bis_') || n.startsWith('__processed_'))) {
                          m.target.removeAttribute(n);
                        }
                      } else if (m.type === 'childList') {
                        m.addedNodes.forEach((node) => {
                          if (node.nodeType === 1) {
                            clean(node);
                            if (node.querySelectorAll) node.querySelectorAll('*').forEach(clean);
                          }
                        });
                      }
                    }
                  });
                  obs.observe(document.documentElement, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
