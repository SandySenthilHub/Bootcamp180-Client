import { useNavigate } from 'react-router-dom';
import HeaderLogo from '../assests/Header-logo.svg';
import Footer from './footer';

const RefundPolicy = () => {

    const navigate = useNavigate();

    const handlestart = () =>{
        navigate('/')
    }

    return (
        <>

            <div className="bootcamp-container" >

                <header className="header" id="dec-header" onClick={handlestart}>

                    <img src={HeaderLogo} alt="Logo" />

                </header>

                <div className="content" id='tnc-content'>

                    <div><b style={{ fontSize: '18px' }}>Return and Refund Policy</b></div>
                    <div>Last updated: September 12, 2024</div>
                    <div>Thank you for shopping at Bootcamp 180.
                    </div>

                    <div><b>No Refunds Policy</b></div>
                    <div>At Bootcamp 180, we strive to ensure your complete satisfaction with your purchase. However, please be aware that we do not offer refunds for any products or services purchased through our website.</div>

                    <div><b>Conditions</b></div>
                    <div>All sales are final. We do not accept returns or provide refunds for any items once purchased. This includes all goods offered through our Service.</div>

                    <div><b>Contact Us</b></div>
                    <div>If you have any questions about our policy or need further assistance, please contact us:
                       <div>By email: experience@invicious.in</div> 
                      <div>By phone number: 9150043778</div>  </div>



                </div>

                <Footer />

            </div>

        </>
    )
}

export default RefundPolicy;