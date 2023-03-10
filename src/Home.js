import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const{ data:blogs,ispending,errors} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {errors && <div>{errors}</div>}
            {ispending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;