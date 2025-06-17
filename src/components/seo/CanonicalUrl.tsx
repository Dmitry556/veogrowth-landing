import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  path: string;
}

const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ path }) => {
  const baseUrl = 'https://veogrowth.com';
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalUrl;