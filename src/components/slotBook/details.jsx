import Footer from "../home/footer"
import HeaderLogo from '../assests/Header-logo.svg';


const ProgramDetails = () => {
    return (
        <>

            <div className="bootcamp-container">

                <header className="header">

                    <img src={HeaderLogo} alt="Logo" />

                </header>

                <div className="content">

                    <div className="details-head">
                    A New Way to Work, Learn, and Live
                    </div>

                </div>


                <Footer />

            </div>

        </>
    )
}

export default ProgramDetails