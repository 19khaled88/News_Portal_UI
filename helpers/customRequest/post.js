export const postRequest =async(url,type,body,token)=>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': type,
          Authorization: 'Bearer ' + token,
        },
          body:body
      })
      return response
}
export const imageUpdateRequest =async(url,body,token)=>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
         
          Authorization: 'Bearer ' + token,
        },
         body
      })
      return response
}
