import React from "react";
import './Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Rating = (props) => {

    function handleStarClick(number) {
        props.handleClick(number);
    }

    return <div className="rating-container">
        {[1, 2, 3, 4, 5].map((number) => 
            number > props.stars ? <FontAwesomeIcon key={number} icon={faStar} size="sm" color="#DDDDDD" className="star" onClick={(e) => handleStarClick(number)} /> 
            :
            <FontAwesomeIcon key={number} icon={faStar} size="sm" color="#5171A5" className="star" onClick={(e) => handleStarClick(number)} />
        )}

        
        {/* {Array.from(Array(props.stars).keys()).map((number,) => 
            <FontAwesomeIcon key={number} icon={faStar} size="sm" color="#5171A5" className="star" onClick={(e) => handleStarClick(number)} />
        )}
        {Array.from(Array(5 - props.stars).keys()).map((number) => 
            <FontAwesomeIcon key={number} icon={faStar} size="sm" color="#DDDDDD" className="star" onClick={(e) => handleStarClick(number)} />
        )} */}
    </div>
}
