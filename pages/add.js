import Layout from '@/components/Layout'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { API_URL } from '@/config/BaseUrl'
import styles from '@/styles/Form.module.css'
import { useRouter } from 'next/router'
import {  imageUpdateRequest, postRequest } from 'helpers/customRequest/post'
export default function Add() {
  const [imageFile, setImageFile] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)
  const [values, setValues] = useState({
    name: '',
    detail: '',
    date: '',
    time: '',
    image: '',
  })
  const router = useRouter()
  const { name, detail, date, time, image } = values

  const handleSubmit = async (e) => {
    e.preventDefault()
    const checkEmptyField = Object.values(values).some(
      (element) => element === '',
    )
    if (checkEmptyField) {
     return toast.error('Not a single field must remain empty')
    }

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY5OTkxMDA2LCJleHAiOjE2NzI1ODMwMDZ9.OYTn9YUB8d3X8Z7N4_kf-1Cj2J8P2dUnZ2LIdGaUL6o'
    const tk =
      '6360cf209d3bb8ca3312b5fe75578bf86cdb5ffeda89f2fd392692b32e98624a2efe6ccf3e21249c26cf7f10f74ad016014537d58f38827d923e1a78f39ac2272c410d13d65132ae6b8a88688747bb51794321a7de2cc39f5949e409747d0cc3087029275a71b50d91401629b1d9cb6b2c71d64f047a5d68284d5d8ea6c3185a'
    const url = `http://localhost:1337/api/news`
    const type ='application/json'
    const body =JSON.stringify({data:{name: name,detail: detail,date: date,time: time + ':00'}}) 
   
    
    const response =await postRequest(url,type,body,token)
    

    if (!response.ok) {
      toast.error('News add not successful')
    } else {
      const news = await response.json()
      const type =''
      const formData = new FormData()
      formData.append("files", image);
      formData.append('ref',  'api::new.new')
      formData.append('refId', news.data.id)
      formData.append('field', 'image')
 
      
      const url = 'http://localhost:1337/api/upload'

      if(news){
        const response = await imageUpdateRequest(url,formData,token)
        if(response.ok){
           router.push(`/news/${news.data.attributes.slug}`)
        }
      }
      
      // router.push(`/news/${sport.data.attributes.slug}`)
     
    }
  }

  const handleInputChange = (e) => {
    // const { name, value } = e.target
    // setValues({ ...values, [name]: value })
    if (e.target.files && e.target.files[0]) {
      const { name, value } = e.target
      const i = e.target.files[0]
      setValues({ ...values, [name]: value, [name]: e.target.files[0] })
      setCreateObjectURL(URL.createObjectURL(i))
    } else {
      const { name, value } = e.target
      setValues({ ...values, [name]: value })
    }
  }
 
    // const uploadToClient = (event) => {
    //   if (event.target.files && event.target.files[0]) {
    //     const i = event.target.files[0]

    //     setImageFile(i)
    //     setCreateObjectURL(URL.createObjectURL(i))
    //   }
    // }

  return (
    <div>
      <Layout>
        <ToastContainer />
        <h1>Add News</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className={styles.form}
        >
          <div
            className=""
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
            }}
          >
            <div className="textinput" style={{ flexGrow: 1 }}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={name}
                  placeholder="enter name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  id="date"
                  value={date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <input
                  name="time"
                  type="time"
                  id="time"
                  value={time}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="detail">Detail</label>
                <textarea
                  name="detail"
                  type="text"
                  id="detail"
                  value={detail}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <img src={createObjectURL} height="300px" width="210px" />
              <input
                type="file"
                onChange={handleInputChange}
                name="image"
                style={{ height: '32px', fontSize: '15px', width: '210px' }}
              />
            </div>
          </div>

          <button type="submit" className="btn" role="button" value="submit">
            Submit
          </button>
        </form>
      </Layout>
    </div>
  )
}
