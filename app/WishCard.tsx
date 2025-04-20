export type Wish = {
    desc:string,
    Assigned?:string,
    link:string,
    link2?:string
  }


export default function WishCard({data}: {data:Wish}) {
    
  return (
    
    <div className="card bg-base-100  m-2 shadow-sm p-3 gap-3 justify-between font-bold">
        <div>{data.desc}</div>
        <div className="flex gap-1">
            {data.Assigned && (<p className=" text-green-400"> Reserved By {data.Assigned}</p>)}
            {!data.Assigned && (<><input type="text" placeholder="Want to reserve?" className="input input-primary"></input> <button className="btn btn-primary">Reserve Item</button></>)}
        </div>
        <div className="flex gap-2">
        <a href={data.link}> <button className="btn btn-primary">  Link </button> </a>
        {data.link2 && (<a href={data.link2}> <button className="btn btn-secondary">Link 2</button> </a>)}
        </div>
    </div>
  )
}
