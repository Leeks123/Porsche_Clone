const debug = process.env.NODE_ENV !== 'production';
const name = 'Porsche_Clone';

module.exports = {
  // assetPrefix: !debug ? `/${name}/` : '',
  images: {
    loader: 'imgix',
  },
};
