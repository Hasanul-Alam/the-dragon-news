export const getAllCategoris = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/categories');
    const categories = await res.json();
    // console.log(categories);
    return categories;
}