const express = require('express');
const router = express.Router();
const commentService = require('./comment.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    commentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    commentService.getAll()
        .then(customers => res.json(customers))
        .catch(err => next(err));
}

function getById(req, res, next) {
    commentService.getById(req.params.id)
        .then(customer => user ? res.json(customer) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    commentService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    commentService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}