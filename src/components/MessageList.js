import React, { useState } from 'react'
import TakeMessage from './TakeMessage'
import DisplyMessage from './DisplyMessage'

export default function MessageList() {
  const [messageList,setMessageList]=useState([])
  function add(s){
        setMessageList([...messageList,s])
  }
return (
  <div>
      <TakeMessage onSubmit={add}/>
       {
          messageList.map((m)=>(
               <DisplyMessage  key={m.text} showMessage={m.text}/>
        ))
      }
  </div>
)
}
    
