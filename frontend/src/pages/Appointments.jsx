import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from '../assets/assets_frontend/assets';

const Appointments = () => {
  
  const {docId} = useParams();

  const [docInfo,setDocInfo] = useState(null);

  const fetchDocInfo = async ()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId]);
  const docInfoo = doctors.find(doc => doc._id === docId)
  return docInfoo && (
    
    <div>
     <div>
      <div><img src={docInfoo.image} alt="" /></div>
     </div>
    </div>
  )
}

export default Appointments