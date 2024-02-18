import React,{useState} from "react";
import './RequestCard.css'
import AlertModel from "./AlertModel";

export default function RequestCard(){
    // لا يفضل ابدا عمل ستايت اضافية اذا هيا مرتبطة عمل استايت اخرى, فبذلك تزيد لنا عدد مصادر الحقيقة
    //  One source of truth فلازم يكون هنالك مصدر واحد للحقيقة (للمعلومة) فقط 
    // خطأ ==>  const [buttonClass, setButtonClass ]= useState("disabled");
    // لذلك هنا لايصح عمل ستايت للفحص هل المعلومات بالستايت الأخرى ممتلئة ام لا
    // بالزر ونختبر فيه هل المعلمات بالسستايت موجودة ام لا  disabled وانما نسويها بال 

    // لأنه فورم جلعنا كل المتغيرات بستايت واحدة لأنهن مرتبطات ببعض
    const [formInputs, setFormInputs] = useState({
        name : '',
        phoneNumber: '',
        age: '',
        isEmployee: false,
        salary: 'less than 500$'
    })

    // هنا عملنا ستايت ثانية لانها ليس لها ارتباط بالستايت الأولى
    const [messageInfo, setMessageInfo] = useState({
        show: false,
        text: "",
        color: ""
    })

    const isDisabled = formInputs.name === "" || formInputs.phoneNumber === "" || formInputs.age === "";

    function btnClick(){
        if(! isDisabled){
            if(!formInputs.phoneNumber.match(/\d{8}/) || formInputs.phoneNumber.length > 8){
                setMessageInfo({show: true ,text: 'Phone Number must be 8 numbers', color: 'red'})
            }
            else if(+formInputs.age <= 18 || +formInputs.age >= 100){
                setMessageInfo({show: true ,text: 'Age numst be between 18 and 100', color: 'red'})
            }
            else{
                setMessageInfo({show: true ,text: 'The Form Has Been Submitted Successfully', color: '#008900'})            
            }
        }
    }

    // عند الضغط على أي مكان بالشاشة فراح يغلق الرسالة وذلك بعد التأكد انه مفتوحة ام لا 
    function closeAlert(){
        if(messageInfo.show)
            setMessageInfo({...messageInfo, show: false})
    }

    return(
        <div className="card" 
            onClick={closeAlert}>
            <form 
                // لايقاف تحديث الصحفحة عند الضغط على زر الارسال
                onSubmit={(event) => { event.preventDefault();}}>

                <h2>Requesting a Loan</h2>
                <hr></hr>

                <label>Name :</label>
                <input type="text" 
                    value={formInputs.name}
                    onChange={(event)=>{ setFormInputs({...formInputs,name: event.target.value});}}
                />

                <label>Phone Number :</label>
                <input type="phone" 
                    value={formInputs.phoneNumber}
                    onChange={(event)=>{ setFormInputs({...formInputs, phoneNumber: event.target.value}) }}
                />

                <label>Age :</label>
                <input 
                    value={formInputs.age}
                    onChange={(event) => { setFormInputs({...formInputs, age: event.target.value}) }}
                />

                <label>Are you an employee?</label>
                <input type="checkbox"
                    // boolean لانها يرجع لنا قيمة منطقية checked هنا استخدمنا  
                    // ("On","Off") string ترجع لنا قيمة value بينما 
                    checked={formInputs.isEmployee}
                    onChange={(event) => { setFormInputs({...formInputs, isEmployee: event.target.checked}) }}
                />

                <label>Salary :</label>
                <select name="salary"
                    value={formInputs.salary}
                    onChange={(event) => { setFormInputs({...formInputs, salary: event.target.value}) }}>
                    <option>less than 500$</option>
                    <option>between 500$ and 1500$</option>
                    <option>above 1500$</option>
                </select>
                <button 
                    // فما راح يشتغل الزر true disabled اذا كانت 
                    disabled= {isDisabled}
                    className={isDisabled? 'disabled' : 'abled'}
                    // AlertModel (المكون) عند الضغط على الزر فراح يحدد ما يستم اظهاره بالرسالة 
                    onClick={btnClick}>Submit</button>
            </form>

            {/* أخر يرسل له الرسالة ولونها وهل تظهر ولا لا component عملنا  */}
            <AlertModel show={messageInfo.show} message={messageInfo.text} textColor={messageInfo.color}/>
        </div>
    );
}