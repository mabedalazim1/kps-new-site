import React from 'react';

const FeaturedItem = ({ slideData }) => {
    return (
        <>
            { slideData.map((item, index) => (
                <div className="featured-news-item">   
            <div  className="featured-title">
            <h2>{item.imgTitle}</h2>
          </div>
            <div  className="image">
                 <img src={item.imgUrl} alt="" />
                </div>
                 <div  className="img-desc">
                    <span><h5>{item.imgDesc} </h5></span>
                    </div>
                </div>
            )) }
        </>
    );
}

export default FeaturedItem;
