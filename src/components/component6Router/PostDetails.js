import React from "react";
import { useContext } from "react";
import { PostContext } from "./contexts/PostContext";

import { useParams ,Link} from "react-router-dom";


export default function PostDetails(){
    // يعني هذه مصفوفة بها كل البيانات Context هنا اولا استدعينا البيانات العامة بهذا الشكل لانها
    const postsValue = useContext(PostContext);

    //تبع البيانات المرادة Id الذي ارسلناه بنهاية الرابط يعني Id من خلالها نستطيع معرفة ال 
    // postId واخذنا ال destructuring  نلاحظ هنا اننا عملنا 
    const {postId} = useParams();

    //الخاص بالبيانات الذي بالمصفوفة Idالذي اختراناه مع ال  Id هنا عملنا مقرانة بين ال
    // ونلاحظ هنا عملنا مساواه ثنائية فقط == لان انواع البيانات مختلفة
    // الى رقم +postId أو نحول قيمة ال 
    const post = postsValue.find((p)=> { return p.id === +postId});

    // else المدخل او المختار غير موجود من ضمن البيانات فراح يعرض ال id هنا عملنا شرط انه اذا كان 
    // خاطئ فراح يعرض صفحة بيضاء id واذا كنا ما عملنا هذا الشرط فانه اذا ادخلنا 
    // وتعني اي شي تقبل /:postId ولن يعرض حتى صفحة 404 التي انشأناها لانها لن تشمل هذا الخطأ والسبب هو 
    if(post){
    return(
        <>
            <Link to="/posts">
                <h3 style={{textAlign:"center"}}>Go back </h3>
            </Link>

            <div className="postDetails">
                <h2>Id is {post.id} : {post.title}</h2>
                <p>{post.body}</p>
            </div>
        </>
        );
    }
    else {
        return(<>
            <h2 style={{textAlign:"center",color:"red"}}> The post with id {postId} is not exist</h2>
        </>)
    }
    
}