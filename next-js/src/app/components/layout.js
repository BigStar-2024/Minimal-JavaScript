'use client';

import PropTypes from 'prop-types';
// components
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
