import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import ChooseProgram from './components/chooseProgram';
import CalenderUI from './components/slotBook/calender-ui';
import SlotReserved from './components/slotBook/slotReserve';
import ProgramDescription from './components/slotBook/programDec';
import CalenderDev from './components/slotBook/calender-Dev';
import CalenderDM from './components/slotBook/calender-DM';
import CalenderCS from './components/slotBook/calender-CS';
import UIRole from './components/Program-roles/UI';
import DevRole from './components/Program-roles/Dev';
import DMRole from './components/Program-roles/DM';
import ENRole from './components/Program-roles/EN'; 
import PromiseContainer from './components/PromiseContainer';
import UIAnalysis from './components/Analysis/UIMcq';
import WDAnalysis from './components/Analysis/WDMcq';
import DMAnalysis from './components/Analysis/DMMcq';
import SlotHomePage from './components/slotBook/slot-home';
import IDVerify from './components/slotBook/ID-verify';
import ChooseProgramSlot from './components/slotBook/chooseProgram-slot';
import Checkout from './components/slotBook/checkout';
import Story from './components/Analysis/story';
import Terms from './components/home/tnc';
import PrivacyPolicy from './components/home/privacy';
import RefundPolicy from './components/home/return';

// Commented as they were unused and caused build issues
// import Enroll from './components/MCQ/enroll';
// import ProgramDetails from './components/slotBook/details';
// import Survey from './components/MCQ/mcq';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/domain" element={<ChooseProgram />} />
                <Route path="/design" element={<UIRole />} />
                <Route path="/development" element={<DevRole />} />
                <Route path="/marketing" element={<DMRole />} />
                <Route path="/entrepreneurship" element={<ENRole />} />
                <Route path="/notice/*" element={<PromiseContainer />} />
                <Route path="/analysis-design" element={<UIAnalysis />} />
                <Route path="/analysis-development" element={<WDAnalysis />} />
                <Route path="/analysis-marketing" element={<DMAnalysis />} />

                {/* Slot Booking */}

                <Route path="/slot-booking" element={<SlotHomePage />} />
                <Route path="/verify" element={<IDVerify />} />
                <Route path="/domain-slot" element={<ChooseProgramSlot />} />
                <Route path="/design-date" element={<CalenderUI />} />
                <Route path="/development-date" element={<CalenderDev />} />
                <Route path="/marketing-date" element={<CalenderDM />} />
                <Route path="/entrepreneurship-date" element={<CalenderCS />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/program-details" element={<ProgramDescription />} />
                <Route path="/story" element={<Story />} />
                <Route path="/t&c" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/slot-booked" element={<SlotReserved />} />

            </Routes>
        </Router>
    );
}

export default App;
