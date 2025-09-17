import React from 'react'
import { List } from '@mui/material'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onChange }){
  return (
    <List>
      {tasks.map(t => <TaskItem key={t.uuid} task={t} onChange={onChange} />)}
    </List>
  )
}
