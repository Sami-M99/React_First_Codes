import React from "react";
import {Route, Routes, Link} from "react-router-dom";
import Posts from "./Posts";
import People from "./People";
import './RouterStyle.css';
import PostDetails from "./PostDetails";
// Context هنا استدعينا البيانات اذي عملناها عامة على التطبيق ك
import { PostContext } from "./contexts/PostContext";
import NotFound from "./NotFound";
import PostLayout from "./PostLayout";

/*
اولا: نحمل المكتبة من هذا السطر 
npm install react-router-dom --save
BrowserRouter ثانيا: نروح لملف ونستدعي 
{Route, Routes, Link} ثالثا: نستدعي في هذه الصفحة

ليسمح لنا بالتنقل بين الصفحات BrowserRouter ويتم اضافة  index.js وقبل هذه كله نروح لصفحة ال 
*/

// PostContext.Provider value  هنا عملنا مصفوفة فيها البيانات التي راح ننقلها لل
//? يعني تغير ديناميكي للصفحات  Dynamic Routes وعملنا البيانات كمصفوفة لكي نكون 
let postsValue = [
    {
        id:1,
        title: "Title 1",
        body: "hellllllllllo everyone 1111111"
    },
    {
        id:2,
        title: "Title 2",
        body: "hellllllllllo everyone 222222"
    },   
    {
        id:3,
        title: "Title 3",
        body: "hellllllllllo everyone  3333333"
    }
];

export default function RouterComponent(){
    return(
        <div>
            {/* هذه الأسطر في البداية تظهر دائما بكل الصفحات 
            Routes لانها موجودة خارج ال  */}
            <div className="navigationBar">
                <hr></hr>
                {/*  يسمح لنا بالانتقال الى الصفحة المرادة Link  */}
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to={"/People"}>
                    <button>People</button>
                </Link>
                <Link to="/Posts">
                    <button>Posts</button>
                </Link>
            </div>
           {/* واحطناه بالمكونات التي نريد البيانات ان تصل لها يعني هذا هو الملف الأب للبيانات Provider هنا كونا المزود  */}
            <PostContext.Provider value={postsValue}>
                <Routes>
                    {/*  Route تعني الصحة الرئيسية يعني الصفحة الموجود فيها "/"   */}
                    <Route path="/" element={<h2>This is the Home Page</h2>} />
                    <Route path="/People" element={<People />} />

                    {/* Nested Routes - الروابط المتداخلة */}
                    <Route path="/Posts"  element={<PostLayout />}>
                        {/*  "/Posts" تعني اننا نريد الرابط الاب المشترك وهو  index = true  */}
                        <Route index element={<Posts />} />
                        {/* Dynamic Route => :  */}
                        {/*  وهنا لانه رابط ابن من الرابط المشترك فلا نكتب ببدايته / ولانكتب كمان الرابط المشترك  */}
                        <Route path=":postId" element={<PostDetails />} />
                    </Route>

                    {/* 404 Not Found Page , وعلامة النجمة * تعني كل الروابط والامتدادات غير المحددة فوق ارسلهن لصفحة 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PostContext.Provider>
        </div>
    );
}