// All Cast
import React from 'react';
import GetImage from '../utilities/get-image';

const AllCast = ({cast, close}) => {

    return (
        <React.Fragment>
            <div className="cf_modal">

                <div className="cf_modal-overlay"></div>

                <div className="cf_modal-body">
                    <div className="cf_modal-header">
                        <h4>Cast</h4>

                        <span className="cf_modal-close" onClick={close}>&#10006;</span>
                    </div>

                    <div className="cf_modal-content">
                        <ul>
                            {
                                cast?.map(cast => {
                                    return (
                                        <li className="cf_cast-member" key={cast?.id}>
                                            <div className="cf_cast-member__avatar">
                                                <GetImage data={cast} path="profile_path" />
                                            </div>
                                            <div className="cf_cast-member__name">
                                                { cast?.character?.split('/')?.[0] && <p>{cast?.character?.split('/')?.[0]}</p> }
                                                { cast?.original_name && <span>{cast?.original_name}</span> }
                                            </div>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default AllCast;