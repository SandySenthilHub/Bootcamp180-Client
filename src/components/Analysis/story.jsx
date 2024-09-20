import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import HeaderLogo from '../assests/Header-logo.svg';
import Design3 from '../assests/Design-3.svg';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

const ShareComponent = ({ batchImage, batchDescription, userName, onBack }) => {
    const [imageDataUrl, setImageDataUrl] = useState(null);

    useEffect(() => {
        const generateImage = async () => {
            const element = document.getElementById('download-part');
            if (element) {
                const canvas = await html2canvas(element);
                const dataUrl = canvas.toDataURL('image/png');
                setImageDataUrl(dataUrl); // Save the image data URL after generating it
            }
        };

        generateImage();
    }, []); // Only run once when the component mounts
    const downloadImage = () => {

        const element = document.getElementById('download-part');
    
        if (element) {
    
            domtoimage.toPng(element)
    
                .then((dataUrl) => {
    
                    const link = document.createElement('a');
    
                    link.href = dataUrl;
    
                    link.download = 'bootcamp180.png';
    
                    link.click();
    
                })
    
                .catch((error) => {
    
                    console.error('Error generating image:', error);
    
                });
    
        }
    
    };

    return (
        <div className="share-container">
            <button className="backResult" onClick={onBack}>
                <img src={Design3} alt="Back arrow" />
                <div>Back</div>
            </button>

            <img
                className="story-img"
                id="story-img"
                src={Design3}
                alt="Story image"
                width={236}
                style={{ cursor: 'pointer' }}
                onClick={downloadImage}
            />

            {imageDataUrl ? (
                <img
                    src={imageDataUrl}
                    alt="Generated content"
                    width={329}
                />
            ) : (
                <div id="download-part" className="download-part">
                    <header id="header-none" className="header" style={{ paddingTop: "0" }}>
                        <img src={HeaderLogo} alt="Logo" />
                    </header>
                    <div className="batch-details">
                        <div className="batchimg">
                            <img src={batchImage} alt="Batch" />
                        </div>
                        <p className="result-description-story">
                            <div className="result-name">{userName}</div>
                            {batchDescription}
                        </p>
                        <div className="tag-result">Tag @bootcamp.180 to get featured</div>
                    </div>
                    <div className="result-footer">
                        <div>Know your Worth! It's your turn</div>
                        <div>Visit - www.bootcamp180.com</div>
                        <div>180 DAYS IS ALL IT TAKES TO CHANGE YOUR LIFESTYLE</div>
                    </div>
                </div>
            )}

            {/* Add a new button for downloading the image */}
            <button className="download-btn" onClick={downloadImage}>
                Download Image
            </button>
        </div>
    );
};

export default ShareComponent;
