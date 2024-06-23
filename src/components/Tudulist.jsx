import React,{useState} from 'react'
import './Tudulist.css'
import PropsImg from './PropsImg/PropsImg';

function Tudulist() {
    const [name, setName]=useState([]);
    const[ data, setData]=useState([])
    const[sade,setTata]=useState([])
    const [dade,setDatu]=useState([])
    const [file,setFile] = useState("")
    const [das,setDas]=useState([])
    const sab=(e)=>{
        e.preventDefault();
        let user ={name,sade,dade,das};
        setData([...data,user]) 
        setName("")
        setTata("")
        setDatu("")
        setDas("")
    }
    const deleteData=(index)=>{
        const dal =data.filter((_,i)=> i !== index)
        setData(dal)
    }
let user=data?.map((el,index)=>(
    <div className='data' key={index}>
         <div className='name_frist'>
         <h4 className='firist'>FirstName</h4>
         <p className='name'>{el.name}</p>
         </div>
        <div className='name_frist'>
        <h4>LastName</h4>
        <p>{el.sade}</p>
        </div>
        <div className='name_frist'>
        <h4>Group</h4>
        <p className='dos'>{el.dade}</p>
        </div>
       <div className='name_frist'>
        <h4 className="">Does work?</h4>
        <p className='dos'>{el.das}</p>
       </div>
        {
       <PropsImg files={file } />
        }
        <button className='dalet' onClick={()=>deleteData(index)} >Delete</button>
    </div>
))

  return (
    <div className='container'>
        <form action="">
            <input className='input_search' type="text" placeholder='search' />
        </form>
   <form onSubmit={sab}>
   <input className='input_tap'  required  value={name} onChange={(e)=>setName(e.target.value)}  type="text"placeholder='FirstName'  />
   <input className='input_tap'  required value={sade} onChange={(e)=> setTata(e.target.value)} type="text"placeholder='LastName' />
   <input className='input_tap'  required value={dade} onChange={(e)=> setDatu(e.target.value)} type="text"placeholder='Group' />
   <input className='input_tap' type="text"  required value={das}   onChange={(e)=>setDas(e.target.value)} placeholder='Does work?'/>
   {/* <input onChange={(e) =>setFile(e.target.files)} type="file" multiple  accept='image/*' /> */}

   {
     
   }
   <button className='qushish'>add</button>

   </form>

  { user}
    </div>
  )
}

export default Tudulist