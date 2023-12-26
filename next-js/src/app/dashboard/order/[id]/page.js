import PropTypes from 'prop-types';
// _mock
import { _orders } from 'src/_mock/_order';
// sections
import { OrderDetailsView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Order Details',
};

export default function OrderDetailsPage({ params }) {
  const { id } = params;

  return <OrderDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _orders.map((order) => ({
    id: order.id,
  }));
}

OrderDetailsPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};
