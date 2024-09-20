import React, { useRef } from "react";
import html2canvas from "html2canvas";
// import "./SocialShare.css"; // Uncomment if you have styles

const SocialShare = ({ role, ctc, websiteUrl }) => {
    const analysisRef = useRef();

    const analysisMessage = (
        <div ref={analysisRef} className="analysis-message">
            <h4>📊 Career Analysis Report</h4>
            <p><strong>Suggested Role:</strong> {role}</p>
            <p><strong>Current Market Value (CTC):</strong> ₹{ctc}</p>
            <p>🌐 For more insights, visit: <a href={websiteUrl}>{websiteUrl}</a></p>
        </div>
    );

    const messageText = `
*📊 Career Analysis Report*

*Suggested Role:* ${role}
*Current Market Value (CTC):* ₹${ctc}

🌐 For more insights, visit: ${websiteUrl}
`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageText.trim())}`;
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteUrl)}&title=${encodeURIComponent('Career Analysis Report')}&summary=${encodeURIComponent(messageText.trim())}`;

    const handleWebShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Career Analysis Report",
                    text: messageText.trim(),
                    url: websiteUrl,
                })
                .then(() => console.log("Share successful!"))
                .catch((error) => console.error("Error sharing", error));
        } else {
            alert("Your browser does not support the Web Share API. Please use the buttons below.");
        }
    };

    const handleShareToInstagram = async () => {
        try {
            const canvas = await html2canvas(analysisRef.current);
            const dataUrl = canvas.toDataURL("image/png");

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'analysis_report.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            alert("Image downloaded. Please upload it to your Instagram story.");
        } catch (error) {
            console.error("Error capturing the analysis report:", error);
        }
    };

    return (
        <div className="social-share">
            <h4>Share Your Analysis</h4>
            {analysisMessage} {/* Render the analysis message */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button>Share on WhatsApp</button>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <button>Share on LinkedIn</button>
            </a>
            <button onClick={handleShareToInstagram}>Share on Insta</button>
            <button onClick={handleWebShare}>Share via Web Share (Mobile)</button>
        </div>
    );
};

export default SocialShare;
