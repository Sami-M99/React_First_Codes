import React from "react";
import { Link } from "react-router-dom";
// نستخدمة لتحديد من راح يستفيد من البيانات من الملفات الأبناء 
import { useContext } from "react";
import { PostContext } from "./contexts/PostContext";


export default function Posts(){
    // Context وهذه طريقة استدعاء البيانات العامة اذا كانت انشائت ك
    const posts = useContext(PostContext);

    return(
        <div>
            <Link to="/">
                <h3 style={{textAlign:"center"}}>Go back to Home page</h3>
            </Link>

            {posts.map((item)=>{
                return(
                    // id هنا تتغير الروابط على حسب ال 
                    <Link to={`/Posts/${item.id}`} key={item.id}>
                    {/*Link نضعه داخل اعلى عنصر موجود لكي يجمع كل الذي تحته فوضعناه داخل ال  key */}
                        <h2 className="postTitle" >
                            {item.title}
                        </h2>
                    </Link>);
                })}

            <h4>If you try to go to wrong path, Like =&gt; http://localhost:3000/PostsErrrror you will get the Not Founf Page</h4>
            <h4>If you try to go to wrong path, Like =&gt; http://localhost:3000/Posts/5 it will show not found post</h4>
        </div>
    );
}