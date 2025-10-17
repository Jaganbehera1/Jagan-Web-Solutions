import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'person' | 'website' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': ['Organization', 'LocalBusiness'],
          name: 'Jagan Web Solutions',
          url: 'https://jaganwebsolutions.netlify.app',
          logo: 'https://jaganwebsolutions.netlify.app/logo.png',
          image: 'https://jaganwebsolutions.netlify.app/og-image.jpg',
          description: 'Leading Web Developer in Odisha offering professional web development services, web automation, business software development, and intelligent web applications. Serving clients in Bhubaneswar and across Odisha with modern web solutions.',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Odisha',
            addressCountry: 'IN',
            addressLocality: 'Bhubaneswar',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '20.2961',
            longitude: '85.8245'
          },
          areaServed: {
            '@type': 'State',
            name: 'Odisha'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-99999-99999',
            contactType: 'Customer Service',
            email: 'contact@jaganwebsolutions.com',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi', 'or']
          },
          sameAs: [
            'https://linkedin.com',
            'https://github.com',
          ],
          priceRange: '₹₹',
          openingHours: 'Mo-Sa 09:00-18:00',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Development',
                  description: 'Custom website development for businesses in Odisha'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Automation',
                  description: 'Business process automation solutions'
                }
              }
            ]
          }
        };

      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jagan',
          jobTitle: 'Web Developer',
          url: 'https://jaganwebsolutions.netlify.app',
          worksFor: {
            '@type': 'Organization',
            name: 'Jagan Web Solutions',
          },
          knowsAbout: [
            'Web Development',
            'React',
            'Node.js',
            'TypeScript',
            'MongoDB',
            'Firebase',
            'Business Automation',
          ],
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Odisha',
            addressCountry: 'IN',
          },
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Jagan Web Solutions',
          url: 'https://jaganwebsolutions.netlify.app',
          description: 'Professional web development services including automation systems, business dashboards, and e-commerce solutions',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://jaganwebsolutions.netlify.app/projects',
            query: 'required',
          },
        };

      case 'breadcrumb':
        return data;

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
