import React, { useState } from "react";
import SocialShare from "./socialShare"; 

const SurveyWithSharing = () => {
  const [result, setResult] = useState({ role: "Developer", ctc: 500000 }); 
  const websiteUrl = "https://example.com"; 

  return (
    <div>
      <h4>Your Current Worth</h4>
      <p>Suggested Role: {result.role}</p>
      <p>Current Market Value (CTC): ₹{result.ctc}</p>

      {/* Social Share Component */}
      <SocialShare role={result.role} ctc={result.ctc} websiteUrl={websiteUrl} />
    </div>
  );
};

export default SurveyWithSharing;
