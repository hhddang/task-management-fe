const backendUrl = process.env.REACT_APP_BACKEND_URL

const getProjectService = async(project) => {
    const data = await fetch(backendUrl + "/project", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const createProjectService = async(project) => {
    const data = await fetch(backendUrl + "/project/create", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const deleteProjectService = async(project) => {
    const data = await fetch(backendUrl + "/project/delete", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const getTaskService = async(task) => {
    const data = await fetch(backendUrl + "/task", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const createTaskService = async(task) => {
    const data = await fetch(backendUrl + "/task/create", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const updateTaskService = async(task) => {
    const data = await fetch(backendUrl + "/task/update", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

const deleteTaskService = async(task) => {
    const data = await fetch(backendUrl + "/task/delete", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(result => result);
    
    return data
}

export {
    getProjectService, createProjectService, deleteProjectService,
    getTaskService, createTaskService, updateTaskService, deleteTaskService
}