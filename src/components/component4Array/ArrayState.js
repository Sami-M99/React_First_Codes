import React, { useState } from "react";
import "./ArrayState.css"

/* لمزيد من المعلومات ==> https://react.dev/learn/updating-arrays-in-state */ 

export default function ArrayState(){
    let [names, setNames] = useState(["Ali", "Ahmed", " Sami", "Mohammed", "Saleh"]);
    const [inputValue, setInputValue] = useState("");

    const nameslist = names.map(
        (el,index) => 
            <li key={index}>{el} 
                <div>
                    <button className="deleteButton" onClick={()=> deleteName(index)}>Delete</button> 
                    <button className="editButton" onClick={() => editName(index)}>Edit</button>
                </div>
            </li>
        ); 

    function addName(){
        /* الطريقة التقليدية بعمل نسخة غير مرتبطة بالرفرنس والتعديل عليها */ 
        // const newNames = [...names];
        // newNames.push(inputValue);
        // setNames(newNames); 
        /* هنا الطريقة الأفضل بأرسال جميع الأسماء الموجودة سابقة واضافة الأسم الجديد*/ 
        setNames([...names , inputValue]);
    }

    function deleteName(x){
        /* لانها تعدل على المتغير نفسة splice الطريقة التقليدية بعمل نسخة غير مرتبطة بالرفرنس واستخدام  */
        // const newNames = [...names];
        // newNames.splice(x ,1);
        // setNames(newNames); 
        /* index هنا الطريقة الأفضل بعمل فلترة للعنصر المراد بواسطة الـ */
        let newNames = names.filter((el,index) => index !== x);
        setNames(newNames);
    }

    function editName(x){
        let newNames = names.map((el, index) => {
            return (index === x)? el+'0' : el
        })
        setNames(newNames);
    }

    return(
        <div className="contaner">
            <div>{nameslist}</div>
            <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} />
            <button className="addButton" type="submit" onClick={addName}>Add</button>
        </div>
    );
}
