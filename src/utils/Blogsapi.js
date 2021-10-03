
const BlogsApi = {
    async search() {   
        const url = `https://shaunbagsmessages.herokuapp.com/messageboard/api/posts`
        const response = await fetch(url);
            const jsonResponse = await response.json(); 
            if(jsonResponse){
               return jsonResponse
            }
        }};

export default BlogsApi;