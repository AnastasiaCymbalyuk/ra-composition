import React from "react";
import shortid from "shortid";

export default function Card (props) {
    return (
        <>
            {props.children.map((item) => {
                return (
                    <div className="box_cards" key={ shortid.generate() }>
                        {item.img && <img className="img_cards" src={item.img} alt={item.title}></img>}
                        <div className="box_content_cards">
                            <h3 className="title_cards">{item.title}</h3>
                            <p>{item.desc}</p>
                            <button className="btn_cards">{item.textBtn}</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}