import React, {useState} from "react";

export default function ListState(){
     
    const [cardToggle, setCardToggle] = useState(true);
    const [search, setSearch] = useState("");
    /* كلست useState هنا استخدمنا مفهوم ال */
    const [boys,setBoys] = useState([{
        name: "Sami.M1",
        age: 58,
        admin: true,
        email: "sami1.m@gmail.com"
      }, {
        name: "Sami.M2",
        admin: true,
        email: "sami2.m@gmail.com"
      }, {
        name: "Sami.M3",
        age: 35,
        admin: false,
        email: "sami3.m@gmail.com"
      }, {
        name: "Sami.M4",
        age: 44,
        admin: false,
        email: "sami4.m@gmail.com"
        }]);
    
    /* CSS هنا عملنا تعديلات  */ 
    let mainButtonStyle = {display: "block", margin: "auto", padding:"10px", fontWeight:"bold", cursor:"pointer", width:"fit-content", boxSizing: "content-box"} 
    /* هنا عملنا الستايل اذا كان ترو يضهر الكورت والا يخيهن  */ 
    let cardsStyle = cardToggle ? {margin:"50px" , display:"flex", gap:"20px", flexWrap: "wrap"} : {display: "none"};
    let cardStyle = {backgroundColor:"moccasin", margin: " 10px auto", width: "fit-content" , padding:"10px 150px 10px 50px",  position: "relative"}
    let colseButtonStyle = {backgroundColor:"red", borderRadius:"50%", width: "fit-content", padding:"5px 10px", position: "absolute", top:"-5%", right: "-2%", color:"white", cursor:"pointer"}


    /* x دالة لحذف الكرت عند الضغط على  */
    function deleteCard (e, i){
        /* بامكاننا استخدام هذه الطرية بالدالة  أو كتابتها على طول تحت */
        let newCards = boys.filter((element, index) => {return index !== i});
        setBoys(newCards)
    }

    /* search بحيث تضهر الاسماء المشابهة للتي تم البحث عنها في  boys هذه الدالة ستحل محل اللست  */
    function handling(){
        if(search !== 0){
            return boys.filter((element) => element.name.includes(search))
        }
        return boys;
    }

    console.log(boys) 

    return(
        <>
            <button 
                style={mainButtonStyle} 
                onClick={() => setCardToggle(!cardToggle)}>
                    {cardToggle === true ? "Hide Cards" : "Show Cards"}
            </button>
            <br/>
            <input 
                type="text"
                placeholder="Search Names"
                style={mainButtonStyle}
                /* search هنا جعلنا القيمة هي الموجودة بالاستست  */ 
                value={search}
                /* search وهنا نغير القيمة تلقائيا فتتبغر يالاستيت  */
                onChange={(event) => setSearch(event.target.value)}
            />

            <div style={cardsStyle} >
            {/* لكي تضهر فقط الكروت التي نبحث عنها boys بدلا من  handling() هنا استخدمنا الدالة */}
            {/* لكي تنفذ تلقائيا كل مرة دون استدعاء  handling() ونلاحط اننا استخدمنا الدالة مع الأقواس */}
            {handling().map(({name,age,admin,email},index) => (
                <div key={index} style={cardStyle}>
                    <p>Name : {name}</p>
                    <p>Age : {age || 18}</p>
                    <p>State : {admin === true ? 'Admin' : 'User'}</p>
                    <p>Email : {email}</p>
                    {/* هذا زر حذف الكرت */}
                    <div 
                        className="close" 
                        style={colseButtonStyle} 
                        /* هنا الطريقة الأولى باستدعاء الدالة التي بالاعلى */ 
                        // onClick= {(el) => {deleteCard(el, index)}}
                        /* وهنا كتبناها على طول من دون دوال */
                        // onClick={() => setBoys(boys.filter((element , i) => { return index !== i}))}
                        /* في البحث فراح يتغير ترتيب الاندكس على البحث ويحذف كروت غلط handling() هنا غيرنا طريقة الحذف بالمقارنة مع الأسم لانه بسبب استخدام  */
                        onClick={() => setBoys(boys.filter((element) => { return name !== element.name}))}
                    >x</div>
                </div>
            ))}
            </div>
        </>
    );
}
