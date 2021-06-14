import http from '../http-common'

const getTasks=()=>{
    return http.get("/task/displaytask")
}

const deleteTask=(taskId)=>{
    return http.delete("/task/deletetask" + '/' +taskId)
}

const createTask=(taskList)=>{
    return http.post("/task/savetask" , taskList)
}

const getTaskById=(taskId)=>{
    return http.get("/task/taskbyid" + '/' +taskId)
}

const updateTask=(taskList,taskId)=>{
    return http.put("/task/updatetask" + '/' +taskId,taskList)
}

const searchTask=(taskName)=>{
    return http.get("/task/searchtask" + '/' +taskName)
}

export default {getTasks,deleteTask,createTask,getTaskById,updateTask,searchTask}