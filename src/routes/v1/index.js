const { Router } = require('express');
const memberRoute = require('./memberRoute');
const bookRoute = require('./bookRoute');

const router = Router();

const defaultRoute = [
  {
    path: '/member',
    route: memberRoute,
  },
  {
    path: '/book',
    route: bookRoute,
  },
];

defaultRoute.forEach((routeParam) => {
  router.use(routeParam.path, routeParam.route);
});

module.exports = router;
