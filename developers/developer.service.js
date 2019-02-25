const db = require('_helpers/db');
const Developer = db.Developer;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Developer.find();
}

async function getById(id) {
    return await Developer.findById(id);
}

async function create(devParam) {
    // validate
    if (await Developer.findOne({ email: devParam.email })) {
        throw 'Developer email "' + devParam.email + '" is already taken';
    }

    const developer = new Developer(devParam);

    // save developer
    await developer.save();
}

async function update(id, devParam) {
    const developer = await Developer.findById(id);

    // validate
    if (!developer) throw 'Developer not found';
    if (developer.email !== devParam.email && await Developer.findOne({ email: devParam.email })) {
        throw 'Developer email "' + devParam.email + '" is already taken';
    }

    // copy devParam properties to developer
    Object.assign(developer, devParam);

    await developer.save();
}

async function _delete(id) {
    await Developer.findByIdAndRemove(id);
}