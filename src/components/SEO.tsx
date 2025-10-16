import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'web development, react developer, web automation, business software, odisha developer',
  canonical,
  ogImage = '/og-image.jpg',
}: SEOProps) {
  const fullTitle = `${title} | Jagan Web Solutions`;
  const siteUrl = 'https://jaganwebsolutions.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      <meta name="author" content="Jagan Web Solutions" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
