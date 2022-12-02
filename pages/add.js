import React, {useState} from 'react'
import {ToastContainer,toast} from 'react-toastify'
// import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
// import { API_URL } from '@/config/BaseUrl'
import styles from '@/styles/Form.module.css'

export default function Add() {
    const [values, setValues] = useState({
        name:"",
        detail:"",
        date:"",
        time:""
    })
    const {name,detail,date,time} = values
    const handleSubmit=(e)=>{
        e.preventDefault()
        const checkEmptyField =Object.values(values).some((element)=>element === "")
    }
    const handleInputChange=(e)=>{
       const {name,value} = e.target 
       setValues({...values, [name]:value})
    }
   
  return (
    <div>
      <Layout>
        <ToastContainer />
        <h1>Add News</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className={styles.form}>
            <div className={styles.grid}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name="name" type="text" id="name" value={name}  placeholder="enter name" onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='date'>Date</label>
                    <input name="date" type="date" id="date" value={date} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='time'>Time</label>
                    <input name="time" type="time" id="time" value={time} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='detail'>Detail</label>
                    <textarea name="detail" type="text" id="detail" value={detail} onChange={handleInputChange}></textarea>
                </div>
                <button type='submit' className='btn' value='submit'>Submit</button>
            </div>
            
        </form>
      </Layout>
    </div>
  )
}
