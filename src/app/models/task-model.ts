import { ROLE } from '../../@clean/shared/domain/enums/role-enum'

interface TaskModelProps {
  taskId: number
  title: string
  deliveryDate: string
  responsible: ROLE
}

export class TaskModel {
  taskId: number
  title: string
  deliveryDate: string
  responsible: ROLE

  constructor (props: TaskModelProps) {
    this.taskId = props.taskId
    this.title = props.title
    this.deliveryDate = props.deliveryDate
    this.responsible = props.responsible
  }

  static empty (): TaskModel {
    return new TaskModel({
      taskId: 0,
      title: '',
      deliveryDate: '',
      responsible: ROLE.STUDENT
    })
  }
}
