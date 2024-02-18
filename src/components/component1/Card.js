import React from "react";

const Card = ({personesList , type , children = "mmmmm"}) => {
    const cards = personesList.map(({ name, age = '18 !!!!', email, admin }, index) => (
        <div
            className="box"
            key={index}
            style={{backgroundColor : type === 'boys' ? 'azure' : 'pink'}}
        >
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>State: {admin ? 'Amin' : 'User'}</div>
            <div>Email: {email}</div>
            <hr />
            <p>{children}</p>
        </div>
    ));

    return (
        <>{cards}</>
    )
}

export default Card;