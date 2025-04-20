import WishCard, { Wish } from "./WishCard";


export default async function Home() {
  const reqeust = await fetch(process.env.BACKEND_URL, {
    cache:"no-cache"
  })
  const wishs:Wish[] = await reqeust.json();

  return (
   <div className="flex"> { wishs.map((wish:Wish,i)=>(<WishCard key={i} data={wish} />)) }</div>
  );
}
