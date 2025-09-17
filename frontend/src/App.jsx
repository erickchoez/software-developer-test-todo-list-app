import React, { useState, useEffect } from 'react'
import { Container, Box, Typography, Select, MenuItem, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import api from './services/api'

export default function App(){
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('order')
  const [open, setOpen] = useState(false)

  const fetchTasks = async ()=>{
    try{
      const res = await api.get('/tasks', { params: { status: filter, sortBy: sort } })
      setTasks(res.data)
    }catch(err){ console.error(err) }
  }

  useEffect(()=>{ fetchTasks() }, [filter, sort])

  return (
    <Container maxWidth="sm" sx={{ p:2 }}>
      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:2 }}>
        <Typography variant="h5">To Do</Typography>
        <Box>
          <Select value={filter} onChange={(e)=>setFilter(e.target.value)} displayEmpty>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="complete">Complete</MenuItem>
          </Select>
          <Select value={sort} onChange={(e)=>setSort(e.target.value)} sx={{ ml:1 }}>
            <MenuItem value="order">Custom Order</MenuItem>
            <MenuItem value="due_date">Due Date</MenuItem>
          </Select>
        </Box>
      </Box>

      <TaskList tasks={tasks} onChange={fetchTasks} />

      <Fab color="primary" onClick={()=>setOpen(true)} sx={{ position:'fixed', right:16, bottom:16 }}>
        <AddIcon />
      </Fab>

      <TaskForm open={open} onClose={()=>{ setOpen(false); fetchTasks() }} />
    </Container>
  )
}
