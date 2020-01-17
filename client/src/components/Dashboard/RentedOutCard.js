import React from "react";
import { FormBtn } from "../Form";

function ResultCard(props) {
    const { id, name, price, img, rented, onApproveRental, index } = props;
    console.log(props)

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // I'm trying to add one space to price.
    // price += " "
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const renderPendingRentals = () => rented.map((pendingRental, subIndex) => (
        <>
            <p>Start Date: {pendingRental.startDate}</p>
            <p>End Date: {pendingRental.endDate}</p>
            <p>Approved: {pendingRental.approved ? "approved" : "unapproved"}</p>
            <button className="col offset-s1 s5 btn cardButton" onClick={() => onApproveRental(index, subIndex)} style={{ "margin-bottom": "5px" }}>Approve</button>
        </>
    ))

    return (
        <div className="col offset-s2 s8 m3 l2 resultCardContainer" style={{
            padding: "0px",
            "margin-bottom": "10px",
        }}>
            < div className="resultCard z-depth-1">
                <div className="cardImageContainer">
                    <img className="cardImage" src={img} alt={name} />
                </div>
                <div className="cardInfoContainer">
                    <h6 className="cardName">{name}</h6>
                    <p className="cardLocation" style={{ padding: "0px", margin: "0px" }}>location</p>
                    <div className="row">
                        <p className="col s3 cardPrice" style={{ padding: "0px", "padding-left": "15px" }}>${price}</p>
                        <p className="col s3 perDayText" style={{ padding: "0px" }}>{' '}/ day</p>
                        {renderPendingRentals()}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ResultCard;