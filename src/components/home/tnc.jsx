import { useNavigate } from 'react-router-dom';
import HeaderLogo from '../assests/Header-logo.svg';
import Footer from './footer';

const Terms = () => {

    const navigate = useNavigate();

    const handlestart = () => {
        navigate('/')
    }
    return (
        <>

            <div className="bootcamp-container">



                    <header className="header" id="dec-header" onClick={handlestart}>

                        <img src={HeaderLogo} alt="Logo" />

                    </header>

                    <div className="content" id='tnc-content'>

                        <div><b style={{ fontSize: '18px' }}>Terms and Conditions</b></div>
                        <div>Last updated: September 12, 2024</div>
                        <div>Please read these terms and conditions carefully before using Our Service.
                        </div>

                        <div><b>Interpretation and Definitions</b></div>
                        <div><b>Interpretation</b></div>
                        <div>The words with an initial capital letter have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                        </div>

                        <div><b>Definitions</b></div>
                        <div>For the purposes of these Terms and Conditions:</div>
                        <ul>
                            <li>Affiliate means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
                            </li>
                            <li>Country refers to: Tamil Nadu, India
                            </li>
                            <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Private Limited, WeWork Salapurai Symbiosis, Venugopal Reddy Layout, Arekere, Bangalore - 560076.
                            </li>
                            <li>Device means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
                            </li>
                            <li>Service refers to the Website.
                            </li>
                            <li>Terms and Conditions (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
                            </li>
                            <li>Third-party Social Media Service means any services or content (including data, information, products, or services) provided by a third party that may be displayed, included, or made available by the Service.
                            </li>
                            <li>Website refers to Bootcamp 180, accessible from https://www.bootcamp180.com.
                            </li>
                            <li>You means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>

                        </ul>


                        <div><b>Acknowledgment</b></div>
                        <div>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service. By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.
                        </div>

                        <div>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                        </div>


                        <div><b>Links to Other Websites
                        </b></div>

                        <div>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                        </div>

                        <div><b>Termination</b></div>
                        <div>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
                        </div>

                        <div><b>Limitation of Liability
                        </b></div>

                        <div>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                        </div>

                        <div><b>"AS IS" and "AS AVAILABLE" Disclaimer</b></div>
                        <div>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage, or trade practice. </div>

                        <div>Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error-free, or that any errors or defects can or will be corrected. Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or emails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, time bombs, or other harmful components. Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</div>

                        <div><b>Governing Law</b></div>
                        <div>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                        </div>

                        <div><b>Disputes Resolution
                        </b></div>

                        <div>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                        </div>

                        <div><b>For European Union (EU) Users</b></div>
                        <div>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                        </div>

                        <div><b>United States Legal Compliance
                        </b></div>

                        <div>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo or that has been designated by the United States government as a "terrorist-supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                        </div>

                        <div><b>Severability and Waiver</b></div>
                        <div><b>Severability</b></div>

                        <div>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                        </div>

                        <div><b>Waiver</b></div>
                        <div>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                        </div>

                        <div><b>Translation Interpretation
                        </b></div>
                        <div>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</div>

                        <div><b>Changes to These Terms and Conditions
                        </b></div>
                        <div>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                        </div>

                        <div><b>Contact Us</b>
                        </div>

                        <div>If you have any questions about these Terms and Conditions, You can contact us:
                            <div>By email: experience@invicious.in</div>
                            <div>By phone number: 9150043778</div>  </div>


                        <div><b>Additional Terms</b></div>

                        <ul>
                            <li>Purchases: If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                            </li>
                            <li>Content: Content found on or through this Service is the property of the Company or used with permission. You may not use, reproduce, distribute, or create derivative works from such content without explicit permission from the Company.
                            </li>
                            <li>Refund Policy: All purchases made through the Service are final. We do not offer refunds except where required by law.
                            </li>
                        </ul>

                        <div><b>Community Guidelines
                        </b></div>

                        <ul>
                            <li>Respectful Interaction: You agree to interact respectfully with others on our platform. Harassment, hate speech, or any form of discriminatory behavior is prohibited.
                            </li>
                            <li>Content Sharing: All content shared on our platform must comply with our guidelines. Inappropriate content may be removed, and users who violate these guidelines may be banned.
                            </li>
                        </ul>


                    </div>



                <Footer />

            </div>

        </>
    )
}

export default Terms;