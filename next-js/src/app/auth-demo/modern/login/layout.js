'use client';

import PropTypes from 'prop-types';
// components
import AuthModernLayout from 'src/layouts/auth/modern';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <AuthModernLayout>{children}</AuthModernLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
