export default interface TaskModel {
    id: string,
    title: string,
    description?: string
    dueDate: string,
    finished: boolean
}
