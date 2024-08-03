"use client"

import React, { useState } from 'react'

export default function page() {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()

    setMainTask([...mainTask, { title, desc }])

    settitle("")
    setdesc("")
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between mb-8 item-center'>
          <div className='flex items-center justify-between w-2/3 mb-5'>
            <h6 className='text-xl font-semibold '>{t.title}</h6>
            <h6 className='text-xl font-semibold '>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }
            }
            className='px-4 py-2 font-bold text-white bg-blue-600 rounded '>Delete</button>
        </li>
      );
    })
  }
  return (
    <>

      <h1 className='p-5 text-5xl font-bold text-center text-white bg-black'> Dipali Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className='px-4 py-2 m-6 text-2xl border-2 border-zinc-800'
          placeholder='Enter title'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input type="text" className='px-4 py-2 m-6 text-2xl border-2 border-zinc-800'
          placeholder='Enter description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='px-4 py-2 m-5 text-2xl font-bold text-white bg-black rounded'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200 '>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
