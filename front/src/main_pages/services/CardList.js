import React from "react";
import Card from "./Card";
import "./cardlist.css"
function CardList(props) {
    const isMobile = window.innerWidth <= 768;

    return (
        <div className="card-grid"  >
            {props.cards.map((card, index) => (
                <div className="card-list-item" key={index}>
                    <Card
                        image={card.image}
                        title={card.name}
                        description={card.description_breif}
                        description_main={card.description_main}
                    />
                </div>

            ))}
        </div>
    );
}

export default CardList;