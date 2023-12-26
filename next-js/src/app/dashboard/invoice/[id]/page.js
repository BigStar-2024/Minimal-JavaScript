import PropTypes from 'prop-types';
// _mock
import { _invoices } from 'src/_mock/_invoice';
// sections
import { InvoiceDetailsView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Invoice Details',
};

export default function InvoiceDetailsPage({ params }) {
  const { id } = params;

  return <InvoiceDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _invoices.map((invoice) => ({
    id: invoice.id,
  }));
}

InvoiceDetailsPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};
