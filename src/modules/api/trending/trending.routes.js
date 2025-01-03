/**
 * @fileoverview This file defines the main router for managing trending books. It sets up the route
 * for trending books and applies the corresponding route handler. The router uses the Express framework
 * to define and organize the routes.
 */

import express from 'express';

import trendingBooksRoutes from './trendingBooks/trendingBooks.routes.js';
import routesConstants from '../../../constant/routes.constants.js';
import trendingWritersRoutes from './trendingWriters/trendingWriters.routes.js';
import trendingPublicationsRoutes from './trendingPublications/trendingPublications.routes.js';
import trendingSubjectsRoutes from './trendingSubjects/trendingSubjects.routes.js';

const router = express.Router();

router.use(`/${routesConstants.trendingBooks.routes}`, trendingBooksRoutes);
router.use(`/${routesConstants.trendingWriters.routes}`, trendingWritersRoutes);
router.use(
    `/${routesConstants.trendingPublications.routes}`,
    trendingPublicationsRoutes
);
router.use(
    `/${routesConstants.trendingSubjects.routes}`,
    trendingSubjectsRoutes
);

export default router;
