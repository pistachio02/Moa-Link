import React, { useState, useEffect } from 'react'
import {Card, UrlComponentWrap } from '../style/Styled'
import * as BiIcons from 'react-icons/bi'
import axios from 'axios';

function Music() {
    const [urlList, setUrlList] =useState([]);
  
    
    const deleteHandler = async (id) => {
        try {
            await axios.post('https://localhost:4000/deleteurl', { id : id })
        } catch (error) {
            throw error;
        }
    }
  
    const fetchData = async () => {
        try {
            const response = await axios.get('https://localhost:4000/music')
            const url = response.data.data
            setUrlList(url)
        } catch (error) {
            throw error;
        }
    }

    useEffect(() =>{
        fetchData()
    },[fetchData])


    return (
        <div>
            <UrlComponentWrap>
            {
            urlList !== undefined &&

            urlList.map((el) => (

              <Card>
           <div className = 'icons'>
              <BiIcons.BiTrash className = 'trash' key={el.id} onClick = {() => deleteHandler(el.id)}/>
              </div>
              <div className = 'title'>{el.title}</div>
                  <div className = 'des'>{el.description}</div>
                  <div className = 'url' onClick = {() => window.open(`${el.url}`, '_blank')}>Move to Url !</div>
                 </Card>
                ))}
            
        </UrlComponentWrap>
      
  </div>
    )
}

export default Music