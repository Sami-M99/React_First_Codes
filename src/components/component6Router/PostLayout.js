import { Outlet } from "react-router-dom";

// "/posts" يظهر بكل الصفحات المشتركة من الرابط الأب Layout نستخدمة كتنسيق مشترك  Component هذا ال 
export default function PostLayout(){
    return(
        <div>
            <h3 style={h3Style}>Header Layout</h3>
            {/*  تعني الشي الذي راح يتغير بتغير الرابط المختار خلافا على النسيق الثابت  Outlet   */}
            <Outlet />
            
            <h3 style={h3Style}>Footer Layout</h3>
        </div>
    );
}

let h3Style ={
    backgroundColor : "cadetblue",
    textAlign: "center"
}