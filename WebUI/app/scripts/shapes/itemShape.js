import { PropTypes } from 'react';

export default {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string,
    tags: PropTypes.string,
  }),
  store: PropTypes.shape({
    name: PropTypes.string,
  }),
  price: PropTypes.shape({
    cost: PropTypes.number,
    currency: PropTypes.string,
  }),
};
