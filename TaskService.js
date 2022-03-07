class TaskService {
    static inc = 0;
    constructor() {
        this.task = [];
    }
    addTask() {
        const id = ++TaskService.inc;
        this.task.push(id)
        console.log(this.task)
        return id;
    }
    removeTask(id) { 
        const index = this.getIndex(id); 
        if(index != -1) {
            delete this.task[index]

            console.log(this.task)
            return true;
        }

        console.log(this.task)
        return false;
    } 
    getIndex(id) {
        return this.task.findIndex(tid => tid == id);
    }
}

exports.default = TaskService;