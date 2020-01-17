import React from "react";
import { FormBtn } from "../Form";

function ResultCard(props) {
    const { id, name, price, img } = props;

    return (
        <div className="col offset-s2 s8 m3 l2 resultCardContainer" style={{
            padding: "0px",
            "margin-bottom": "10px",
        }}>
            < div className="resultCard z-depth-2">
                <div className="cardImageContainer">
                    <img className="cardImage" src={img} alt={name} />

                    <div className="littleSquare"></div>
                </div>
                <div className="cardInfoContainer">
                    <h6 className="cardName">{name}</h6>
                    <p className="cardLocation" style={{ padding: "0px", margin: "0px" }}>location</p>
                    <div classNme="row">
                        <p className="col s3 cardPrice" style={{ padding: "0px", "padding-left": "15px" }}>${price}</p>
                        <p className="col s3 perDayText" style={{ padding: "0px" }}>{' '}/ day</p>
                        <button className="col offset-s1 s4 btn cardButton" style={{ "margin-bottom": "5px" }}>rent</button>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ResultCard;