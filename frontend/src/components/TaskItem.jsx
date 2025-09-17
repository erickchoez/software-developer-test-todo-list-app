import React from 'react'
import { ListItem, ListItemText, IconButton, Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import api from '../services/api'

export default function TaskItem({ task, onChange }){
  const changeStatus = async (newStatus) => { await api.put(`/tasks/${task.uuid}`, { status: newStatus }); onChange(); }
  const remove = async () => { await api.delete(`/tasks/${task.uuid}`); onChange(); }

  return (
    <ListItem secondaryAction={<div><IconButton onClick={()=>changeStatus(task.status === 'pending' ? 'in progress' : task.status === 'in progress' ? 'complete' : 'complete')}>Change</IconButton><IconButton edge="end" onClick={remove}><DeleteIcon /></IconButton></div>}>
      <ListItemText primary={task.title} secondary={<div>{task.description}<Chip label={task.status} size="small" sx={{ ml:1 }} /></div>} />
    </ListItem>
  )
}
