import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
       
        <>
            <li className='cards-item'>
                <Link className='cards-item-link' to={props.path}>
                    <figure className='cards-item-img-wrap' data-category={props.label}>
                        <img className='cards-item-img' alt='Far East' src={props.src} />
                    </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-title'>{props.title}</h5>
                    <h6 className='cards-item-description'>{props.description}</h6>
                    <h6 className='cards-item-duration'>{props.duration} | {props.price}</h6>
                </div>
                </Link>
            </li>
        </>


    )
}

export default CardItem;
