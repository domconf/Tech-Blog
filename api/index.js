const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./controllers/postRoutes');
const commentRoutes = require('./controllers/commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;