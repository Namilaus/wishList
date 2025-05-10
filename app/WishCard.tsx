'use client';

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";



export type Wish = {
    desc:string,
    Assigned?:string,
    link:string,
    link2?:string
  }


export default function WishCard({data}: {data:Wish}) {
  const [reserve, setReserve] = useState('');
  const router = useRouter();
  
  function handleLink(link?:string){
    window.open(link)
    
  }
  
  async function handleReserve(){
    //TODO
    const desc = data.desc;
    const name = reserve; // API accepts desc and name
    
    const url:string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log(url)
    
    const res = await fetch(url! ,{
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({desc, name})
    });
    
    const status = await res.status;
    if(status != 200 ){
      router.push("./TRY-AGAIN")
    }
    router.refresh();

  }
  
  function handleInput(event:any){
  setReserve(event.target.value)
  }

  return (
    
    <div className="card bg-base-100  m-2 shadow-sm p-3 gap-3 justify-between font-bold">
        <div>{data.desc}</div>
        <div className="flex gap-1">
            {data.Assigned && (<p className=" text-green-400"> Reserved By {data.Assigned}</p>)}
            {!data.Assigned && (<><input onChange={handleInput} type="text" placeholder="Want to reserve?" className="input input-primary"></input> <button onClick={handleReserve} className="btn btn-primary">Reserve Item</button></>)}
        </div>
        <div className="flex gap-2">
        <button onClick={() => handleLink(data.link)} className="btn btn-primary">  Link </button>
        {data.link2 && (<button onClick={() => handleLink(data.link2)} className="btn btn-secondary">Link 2</button>)}
        </div>
    </div>
  )
}
