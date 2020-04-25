import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <footer>
    <Typography variant="body1">
      Built with{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
      ,{` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.netlify.com/"
      >
        Netlify
      </a>
      , and {` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.mongodb.com/cloud/atlas"
      >
        MongoDB
      </a>
    </Typography>
  </footer>
);

export default Footer;
