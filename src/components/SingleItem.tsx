import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';

export default function CardItem({ props }): any {

    return <>
        <div className="container">
            <div className="mb-3 d-flex">
                <Link href={`/posts`} className='btn btn-default'><a><i className="bi bi-arrow-left"> </i> Back</a></Link>
            </div>
            <div className='mb-3'>
                <h4>{props.title}</h4>
                <small><Moment format="DD.MM.YYYY">{props.aic_start_at}</Moment> - <Moment format="DD.MM.YYYY">{props.aic_end_at}</Moment></small>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image_url ? props.image_url : '/images/no-img.png'} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
