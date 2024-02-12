export const getAllNews= async()=>{
    const res = await fetch('https://the-dragon-news-server-gamma-indol.vercel.app/all-news',{next:{revalidate:30,}});
    
    return  res.json();
}

// export const getAllNews = async () => {
//     try {
//         const res = await fetch('http://the-dragon-news-server-be4xj4mhe-mehnazahmed.vercel.app/all-news', { next: { revalidate: 30 } });

//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         return res.json();
//     } catch (error) {
//         console.error('Error in getAllNews:', error);
//         // Handle the error or rethrow it if needed
//         throw error;
//     }
// }https://the-dragon-news-server-gamma-indol.vercel.app/all-news
