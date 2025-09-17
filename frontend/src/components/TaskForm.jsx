import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'
import api from '../services/api'
import addDays from 'date-fns/addDays'

export default function TaskForm({ open, onClose }){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const suggested = addDays(new Date(), 3).toISOString().slice(0,10)
  const [dueDate, setDueDate] = useState(suggested)

  const submit = async ()=>{
    await api.post('/tasks', { title, description, due_date: dueDate })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Title" value={title} onChange={(e)=>setTitle(e.target.value)} sx={{ mt:1 }} />
        <TextField fullWidth label="Description" value={description} onChange={(e)=>setDescription(e.target.value)} sx={{ mt:1 }} multiline rows={3} />
        <TextField fullWidth type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} sx={{ mt:1 }} InputLabelProps={{ shrink: true }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={submit} variant="contained">Create</Button>
      </DialogActions>
    </Dialog>
  )
}
