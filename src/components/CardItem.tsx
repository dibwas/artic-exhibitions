import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';

export default function CardItem({ props }): any {

    return <>
        <div className="card h-100">
            <img src={props.image_url ? props.image_url : '/images/no-img.png'} className="card-img-top" style={{ width: '100%', height: '200px' }} alt="..." />
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text"><small className='text-muted'><Moment format="DD.MM.YYYY">{props.aic_start_at}</Moment> - <Moment format="DD.MM.YYYY">{props.aic_end_at}</Moment></small></p>
            </div>
            <div className='card-footer'>
                <Link rel="noreferrer" href={`/post/${props.id}`} className="btn btn-default">Read more</Link>
            </div>
        </div>
    </>
}
