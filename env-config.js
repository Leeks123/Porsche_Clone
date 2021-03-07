const debug = process.env.NODE_ENV !== 'production';
const name = 'Porsche_Clone';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
};
