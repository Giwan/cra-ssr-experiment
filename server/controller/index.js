import express from "express";
import path from "path";
import serverRenderer from '../middleware/renderer';

const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer());

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', '..', 'build'),
    { maxAge: '30d' },
));

export default router;