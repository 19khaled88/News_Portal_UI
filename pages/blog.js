import Layout from '@/components/Layout'
import { fetcher } from 'lib/api'
import React from 'react'

export default function Blog({newsResponse}){   
  const func=(newsResponse)=>{
    const array =[]
      newsResponse.blogImageType.map((e,index)=>{
        if(!e.image){
          array.push(
            <p key={index}>{e}</p>
          )
        }
        if(e.image){
          array.push(<img key={index} src={e.image} alt=" No Image" width="5%" style={{borderRadius:'40px'}}/>)
        }
      })
 
    return array
  }
return (
    <Layout>
      <div>
        <h1 style={{textAlign:'center',fontWeight:'400',fontSize:'25px'}}>Use Our Compilation Of Most Famous Museums</h1>
        <p style={{textAlign:'center'}}>Oka Tomoaki | 23 February, 2018</p>
        <div style={{margin:'30px auto',width:'70%',textAlign:'justify'}}>{newsResponse.blogText1[0]}</div>
        <div>{<img  src={newsResponse.blogImage1[0]} alt="No Image" width="100%" />}</div>
        <div style={{margin:'30px auto',width:'70%',textAlign:'justify'}}>{newsResponse.blogText2[0]}</div>
        <div style={{display:'flex', flexDirection:'row', height:'350px',gap:'15px'}}>
          <img style={{flex:1}} src={newsResponse.blogImage2} alt="No Image" width="100%"/>
          <span style={{flex:1}}>
            <h1>{newsResponse.blogText3.title}</h1>
            <p>{newsResponse.blogText3.info}</p>
          </span>
        </div>
        <div style={{margin:'30px auto',width:'70%',textAlign:'justify'}}>{newsResponse.blogText4}</div>
        <div>
          <h1 style={{textAlign:'center'}}>{newsResponse.blogTitle}</h1>
          <span style={{display:'flex',flexDirection:'row',gap:'20px'}}>
            {
              newsResponse.blogImages.map((e,index)=>(
                <span key={index}>
                  {<img  src={e} alt="No image" width="100%"/>}
                </span>
              ))
            }
          </span>
        </div>
        <div>
          <h1 style={{margin:'30px auto',width:'70%',textAlign:'justify',fontWeight:'400',fontSize:'18px'}}>{newsResponse.blogText5}</h1>
        </div>
        <div style={{textAlign:'center',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'10px',width:'30%',margin:'auto'}}>
          {
            newsResponse.icon.map((e,index)=>(
              <p key={index} style={{margin:'auto',width:'70px',height:'30px',color:'white',backgroundColor:'burlywood',fontSize:'20px'}}>{e}</p>
            ))
          }
        </div>
        <div style={{paddingTop:'30px',textAlign:'center',width:'40%',textAlign:'center',margin:'auto'}}>
          {
            func(newsResponse)
          }
        </div>
        <div style={{fontSize:'30px',fontWeight:'600',textAlign:'center',margin:'20px'}}>
          {newsResponse.blogtext6}
        </div>
        <div style={{display:'flex',flexDirection:'row',width:'60%',margin:'auto',gap:'15px'}}>
          <span style={{flex:1}}>
            <img  src={newsResponse.blogTextImge2.image} alt="no Image" width="100%" />  
            <p>Blog</p>
          </span>
          <span style={{flex:2}}>
            {
              newsResponse.blogText7.map((e,index)=>(<p key={index}>{e}</p>))
            }
          </span>
        </div>
        <div style={{display:'flex',flexDirection:'row',width:'60%',margin:'auto',gap:'15px'}}>
          <span style={{flex:1}}>
            <img  src={newsResponse.blogTextImge3.image} alt="No image" width="100%"/>
            <p>Blog</p>
          </span>
          <span style={{flex:2}}>
            {
              newsResponse.blogText8.map((e,index)=>(<p key={index}>{e}</p>))
            }
          </span>
        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
    const newsResponse = await fetcher(`http://localhost:3000/api/news/blog`)
  
    return {
      props: {
        newsResponse,
      },
      revalidate: 1,
    }
  }

