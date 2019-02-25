const express = require('express');
const router = express.Router();
const projectService = require('./project.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    projectService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    projectService.getAll()
        .then(customers => res.json(customers))
        .catch(err => next(err));
}

function getById(req, res, next) {
    projectService.getById(req.params.id)
        .then(customer => user ? res.json(customer) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    projectService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    projectService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}