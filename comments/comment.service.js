const db = require('_helpers/db');
const Comment = db.Comment;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Comment.find();
}

async function getById(id) {
    return await Comment.findById(id);
}

async function create(commentParam) {

    const comment = new Comment(commentParam);

    // save comment
    await comment.save();
}

async function update(id, commentParam) {
    const comment = await Comment.findById(id);

    // validate
    if (!comment) throw 'Comment not found';

    // copy commentParam properties to Comment
    Object.assign(comment, commentParam);

    await comment.save();
}

async function _delete(id) {
    await Comment.findByIdAndRemove(id);
}