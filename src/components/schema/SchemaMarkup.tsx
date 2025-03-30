
import React, { useEffect } from 'react';
import { generateOrganizationSchema, schemaToString } from '@/utils/schema';

/**
 * Global Schema Markup component
 * Adds the organization schema to all pages
 */
const SchemaMarkup = () => {
  useEffect(() => {
    // Add global schema markup (organization)
    const existingScript = document.getElementById('schema-script-global');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'schema-script-global';
      script.type = 'application/ld+json';
      script.innerHTML = schemaToString(generateOrganizationSchema());
      document.head.appendChild(script);
    }

    return () => {
      // We don't remove the global schema when unmounting
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SchemaMarkup;
