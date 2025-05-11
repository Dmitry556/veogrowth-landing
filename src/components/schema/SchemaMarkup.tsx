
import React, { useEffect } from 'react';
import { 
  generateOrganizationSchema, 
  generateProfessionalServiceSchema, 
  schemaToString 
} from '@/utils/schema';

/**
 * Global Schema Markup component
 * Adds the organization schema to all pages
 */
const SchemaMarkup = () => {
  useEffect(() => {
    // Add global organization schema markup
    const existingOrgScript = document.getElementById('schema-script-organization');
    if (!existingOrgScript) {
      const orgScript = document.createElement('script');
      orgScript.id = 'schema-script-organization';
      orgScript.type = 'application/ld+json';
      orgScript.innerHTML = schemaToString(generateOrganizationSchema());
      document.head.appendChild(orgScript);
    }

    // Add professional service schema markup
    const existingServiceScript = document.getElementById('schema-script-service');
    if (!existingServiceScript) {
      const serviceScript = document.createElement('script');
      serviceScript.id = 'schema-script-service';
      serviceScript.type = 'application/ld+json';
      serviceScript.innerHTML = schemaToString(generateProfessionalServiceSchema());
      document.head.appendChild(serviceScript);
    }

    return () => {
      // We don't remove the global schema when unmounting
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SchemaMarkup;
