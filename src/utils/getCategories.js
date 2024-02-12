

export const getAllCategories=async()=> {
 const res =await fetch('https://the-dragon-news-server-gamma-indol.vercel.app/categories');
 return res.json();
};
