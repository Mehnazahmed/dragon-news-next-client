export const getcardDetails=async(id)=>{
    const res = await fetch(`https://the-dragon-news-server-gamma-indol.vercel.app/news/${id}`,{cache:'no-store',});
    return  res.json();
}