export const getCategoryNews =async(category)=>{
    const res =await fetch(`https://the-dragon-news-server-gamma-indol.vercel.app/news?category=${category}`,{cache:'no-store'})
    return res.json();
}