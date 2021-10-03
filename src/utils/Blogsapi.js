
const BlogsApi = {
    async search() {   
        const url = `http://localhost:5000/api/posts`
        const response = await fetch(url);
            const jsonResponse = await response.json(); 
            if(jsonResponse){
               return jsonResponse
            }
        }};

export default BlogsApi;