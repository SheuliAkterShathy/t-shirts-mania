import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <h4>cousin</h4>
            <p><small>House:{house}</small></p>
            <section>
                <Friend> </Friend>
            </section>
        </div>
    );
};

export default Cousin;