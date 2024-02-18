/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from './Header';
import Menu from './Menu';
import ButtonList from './ButtonList';

export default function TermizComponent() {
    return (
        <div className="TermizContainer">
            <Header />
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px"
            }}>
                <div>
                    <Menu title=" أكاديمية ترميز" message="مرحبا بكم هنا">2M</Menu>
                    <Menu title="Hello every one" message="This is post body ofhello message" />
                    <Menu title=" Post3" message="This is post body ofpost message" />
                </div>
                <div style={{
                    // display: "grid",
                    // gridTemplateColumns: "repeat(2,70px)",
                    display: "flex",
                    flexWrap: "wrap",
                    height: "fit-content",
                    border: "2px solid #017476",
                    padding: "20px",
                    width: "300px"
                }}>
                    <ButtonList text={'😀😁 الأكثر زيارة'} />
                    <ButtonList text={'الأكثر قراءة '}>
                        <p>😀😀😀</p>
                        <img
                            style= {{width: "100px"}}
                            src="https://knowbility.org/media/pages/blog/the-myth-of-javascript-accessibility/fc4717b7ec-1662134552/javascriptlogosmall.png"/>
                    </ButtonList>
                    <ButtonList text={'🎩📽️📽️المميز من المشاهدين'}>
                        <img
                            style= {{maxWidth: "100%"}}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYXz7ig60q_FvbSO5jqzy8Igz0uhsLvvvRj_Di1Mz4R92dqe1Grt1UdjkgaPx7egZ-J0&usqp=CAU" />
                    </ButtonList>
                </div>
            </div>
        </div>
    )
}