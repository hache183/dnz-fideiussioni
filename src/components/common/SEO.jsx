import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const fullTitle = title 
    ? `${title} - DNZ Fideiussioni Francesco De Nuzzo`
    : 'DNZ Fideiussioni Francesco De Nuzzo - Soluzioni Assicurative su Misura';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Da più di dieci anni, offriamo fideiussioni e coperture assicurative personalizzate per aziende e professionisti in tutta Italia."} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};

export default SEO;

