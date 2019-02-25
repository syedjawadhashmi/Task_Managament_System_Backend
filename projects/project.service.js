const db = require('_helpers/db');
const Project = db.Project;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Project.find();
}

async function getById(id) {
    return await Project.findById(id);
}

async function create(projectParam) {
    // validate
    if (await Project.findOne({ name: projectParam.name })) {
        throw 'Project name "' + projectParam.name + '" is already taken';
    }

    const project = new Project(projectParam);

    // save project
    await project.save();
}

async function update(id, projectParam) {
    const project = await Project.findById(id);

    // validate
    if (!project) throw 'Project not found';
    if (project.name !== projectParam.name && await Project.findOne({ name: projectParam.name })) {
        throw 'Project name "' + projectParam.name + '" is already taken';
    }

    // copy projectParam properties to project
    Object.assign(project, projectParam);

    await project.save();
}

async function _delete(id) {
    await Project.findByIdAndRemove(id);
}