import axios from 'axios'



const TASK_API_BASE_URL="http://localhost:8080/todo/task/displaytask"

class TaskService{
    getTasks(){
        return axios.get(TASK_API_BASE_URL)
    }

    deleteTask(taskId){
        return axios.delete("http://localhost:8080/api/v1/deletetask" + '/' +taskId)
    }

    createTask(taskList){
        return axios.post("http://localhost:8080/api/v1/savetask",taskList)
    }

    getTaskById(taskId){
        return axios.get("http://localhost:8080/api/v1/taskbyid" + '/' +taskId)
    }

    updateTask(taskList,taskId){
        return axios.put("http://localhost:8080/api/v1/updatetask" + '/' +taskId,taskList)
    }

    registerUser(register){
        return axios.post("http://localhost:8080/register",register)
    }

    loginUser(login){
        return axios.post("http://localhost:8080/login",login)
    }
}

export default new TaskService()