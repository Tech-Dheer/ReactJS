import React from "react";

const ImageCollection = () => {
    const imageArray = ["img1.png","img2.jpg","img3.jpg"];

    return(
        <div>
            <h2>Image Collection</h2>
            <div className="image-container">
                {imageArray.map((imageName,index) => (
                    <img key={index} width = "100" src={'./Images' + '/' + imageName} alt={imageName} />
                ))}
            </div>
        </div>
    );
};

export default ImageCollection;