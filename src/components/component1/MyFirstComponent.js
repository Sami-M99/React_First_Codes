import React from 'react'
import Card from './Card';
import "./MyFirstComponent.css"


let boys = [{
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
  }];


let girls = [{
  name: "name1",
  age: 58,
  admin: false,
  email: "naem1.m@gmail.com"
}, {
  name: "name2",
  age: 26,
  admin: true,
  email: "name2.m@gmail.com"
}, {
  name: "name3",
  admin: false,
  email: "name3.m@gmail.com"
}, {
  name: "name4",
  age: 44,
  admin: true,
  email: "name4.m@gmail.com"
}];
console.log(girls[0].name);
    
const MyFirstComponent = () => {
  return (
    <div className={"mainContainer"}>
      <div className='cards'>
        <h2>Boys Data</h2>
        <Card personesList={boys} type= 'boys'/>
      </div>
      <div className='cards'>
        <h2>Girls Data</h2>
        <Card personesList={girls} type='girls' >
          <p>hello</p>
          <span>bye</span>
        </Card>
      </div>
    </div>
  );

}

export default MyFirstComponent;
