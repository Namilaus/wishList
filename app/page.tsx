import WishCard, { Wish } from "./WishCard";

//
export default async function Home() {
  
  const url:string | undefined = process.env.BACKEND_URL;
  let wishs:Wish[] = [];
  
  if(url){
    const reqeust = await fetch(url , {
      cache:"no-cache"
  })
    wishs = await reqeust.json();
  }

  return (
   <div className="flex"> { wishs.map((wish:Wish,i)=>(<WishCard key={i} data={wish} />)) }</div>
  );
}
