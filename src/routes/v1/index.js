const { Router } = require('express');
const memberRoute = require('./memberRoute');

const router = Router();

const defaultRoute = [
  {
    path: '/member',
    route: memberRoute,
  },
];

defaultRoute.forEach((routeParam) => {
  router.use(routeParam.path, routeParam.route);
});

module.exports = router;
