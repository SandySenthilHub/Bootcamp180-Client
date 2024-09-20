import ig from '../assests/ig.svg';
import wp from '../assests/wp.svg';
import ln from '../assests/ln.svg';
import fb from '../assests/FBIcon.svg';



const Footer = () => {
    return (
        <>

            <a className='footer-a' href="https://www.instagram.com/bootcamp.180/">@bootcamp.180</a>

            <footer className="footer">

                <div className='rights'>
                    © 2024 Invicious. All rights reserved.
                </div>

                <div className='footer-links'>
                    <a href="/t&c">Terms & Conditions</a> |
                    <a href="/privacy-policy">Privacy Policy</a> |
                    <a href="/refund-policy">Return & Refund Policy</a>

                </div>

                <div className='social-icons'>
                    <a href="https://www.instagram.com/bootcamp.180/" target="_blank" rel="noopener noreferrer">

                        <img src={ig} alt='img' />

                    </a>
                    <a href="https://wa.me/9150043778" target="_blank" rel="noopener noreferrer">
                        <img src={wp} alt='img' />
                    </a>

                    <a href="https://www.linkedin.com/company/bootcamp-180/" target="_blank" rel="noopener noreferrer">

                        <img src={ln} alt='img' />

                    </a>
                    <a href="https://www.facebook.com/bootcamp.180/" target="_blank" rel="noopener noreferrer">

                        <img src={fb} alt='img' />

                    </a>

                </div>
            </footer>

        </>
    )
}

export default Footer;