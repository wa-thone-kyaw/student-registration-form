import { Routes, Route } from "react-router-dom";
import { Contact } from "./component/NavigationBar/Contact";
import { SignIn } from "./component/SignInSignUp/SignIn";
import { SignUp } from "./component/SignInSignUp/SignUp";
import { Dashboard } from "./component/Dashboard/Dashboard";
import {Payment} from './component/Registerationform/Payment';
//import { AdmChooseyears } from "./component/Dashboard/AdmChooseyears";
//import { SecondyearStudent } from "./component/Dashboard/SecondyearStudent";
import { About } from "./component/NavigationBar/About";
import { Home } from "./component/NavigationBar/Home";
import { Navigationbar } from "./component/NavigationBar/NavigationBar";
import { AdminHome } from "./component/AdminNavBar/AdminHome";
import { Chooseyear } from "./component/Chooseyear/Chooseyear";
import { Firstyear } from "./component/Registerationform/Firstyear";
import { Secondyear } from "./component/Registerationform/Secondyear";
import { Thirdyear } from "./component/Registerationform/Thirdyear";
import { Fourthyear } from "./component/Registerationform/Fourthyear";
import { Fifthyear } from "./component/Registerationform/Fifthyear";
import { Sixthyear } from "./component/Registerationform/Sixthyear";
import { Agreeform } from "./component/Registerationform/Agreeform";
import { Choosemajor } from "./component/Registerationform/Choosemajor";
import { FillID } from "./component/Registerationform/FillID";


import {CivilChooseyear} from './component/Civil/CivilChooseyear';
import {FirstCivil} from './component/Civil/FirstCivil';
import {SecondCivil} from './component/Civil/SecondCivil';
import {ThirdCivil} from './component/Civil/ThirdCivil';
import {FourthCivil} from './component/Civil/FourthCivil';
import {FifthCivil} from './component/Civil/FifthCivil';
import {SixthCivil} from './component/Civil/SixthCivil';
import {Registerform} from './component/Civil/Registerform';
import {CfirstRegisterform} from './component/Civil/CfirstRegisterform';


import {ECChooseyear} from './component/EC/ECChooseyear';
import {FirstEC} from './component/EC/FirstEC';
import {SecondEC} from './component/EC/SecondEC';
import {ThirdEC} from './component/EC/ThirdEC';
import {FourthEC} from './component/EC/FourthEC';
import {FifthEC} from './component/EC/FifthEC';
import {SixthEC} from './component/EC/SixthEC';
import {ECRegisterform} from './component/EC/ECRegisterform';

import {EPChooseyear} from './component/EP/EPChooseyear';
import {FirstEP} from './component/EP/FirstEP';
import {SecondEP} from './component/EP/SecondEP';
import {ThirdEP} from './component/EP/ThirdEP';
import {FourthEP} from './component/EP/FourthEP';
import {FifthEP} from './component/EP/FifthEP';
import {SixthEP} from './component/EP/SixthEP';
import {EPRegisterform} from './component/EP/EPRegisterform';

import {MPChooseyear} from './component/MP/MPChooseyear';
import {FirstMP} from './component/MP/FirstMP';
import {SecondMP} from './component/MP/SecondMP';
import {ThirdMP} from './component/MP/ThirdMP';
import {FourthMP} from './component/MP/FourthMP';
import {FifthMP} from './component/MP/FifthMP';
import {SixthMP} from './component/MP/SixthMP';
import {MPRegisterform} from './component/MP/MPRegisterform';

import {ITChooseyear} from './component/IT/ITChooseyear';
import {FirstIT} from './component/IT/FirstIT';
import {SecondIT} from './component/IT/SecondIT';
import {ThirdIT} from './component/IT/ThirdIT';
import {FourthIT} from './component/IT/FourthIT';
import {FifthIT} from './component/IT/FifthIT';
import {SixthIT} from './component/IT/SixthIT';
import {ITRegisterform} from './component/IT/ITRegisterform';


import "./component/NavigationBar/NavigationBar.css";
import "./component/NavigationBar/About.css";
import "./component/NavigationBar/Home.css";
import "./component/AdminNavBar/AdminNavBar.css";
import "./component/AdminNavBar/AdminHome.css";
import "./component/Civil/CivilChooseyear.css";
import "./component/Chooseyear/Chooseyear.css";
import "./component/Registerationform/Firstyear.css";
import "./component/Registerationform/Overfirstyear.css";
import "./component/Registerationform/Agreeform.css";
import "./component/Dashboard/Dashboard.css";
import './component/Civil/Registerform.css';
import './component/EC/ECChooseyear.css';
import './component/EC/ECRegisterform.css';
import './component/EP/EPChooseyear.css';
import './component/EP/EPRegisterform.css';
import './component/IT/ITChooseyear.css';
import './component/IT/ITRegisterform.css';
import './component/MP/MPChooseyear.css';
import './component/MP/MPRegisterform.css';
import './component/Registerationform/Payment.css'
import './component/Civil/CfirstRegisterform.css'


//import "./component/Dashboard/SecondyearStudent.css";
import { AdminNavBar } from "./component/AdminNavBar/AdminNavBar";

export default function MyApp() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/payment" element={<Payment />} />

        <Route path='/civilchooseyear' element={<CivilChooseyear/>}/>
        <Route path='/firstcivil' element={<FirstCivil/>}/>
        <Route path='/secondcivil' element={<SecondCivil/>}/>
        <Route path='/thirdcivil' element={<ThirdCivil/>}/>
        <Route path='/fourthcivil' element={<FourthCivil/>}/>
        <Route path='/fifthcivil' element={<FifthCivil/>}/>
        <Route path='/sixthcivil' element={<SixthCivil/>}/>
        <Route path='/registerform' element={<Registerform/>}/>
        <Route path='/cfirstregisterform' element={<CfirstRegisterform/>}/>


        <Route path='/ecchooseyear' element={<ECChooseyear/>}/>
        <Route path='/firstec' element={<FirstEC/>}/>
        <Route path='/secondec' element={<SecondEC/>}/>
        <Route path='/thirdec' element={<ThirdEC/>}/>
        <Route path='/fourthec' element={<FourthEC/>}/>
        <Route path='/fifthec' element={<FifthEC/>}/>
        <Route path='/sixthec' element={<SixthEC/>}/>
        <Route path='/ecregisterform' element={<ECRegisterform/>}/>

        <Route path='/epchooseyear' element={<EPChooseyear/>}/>
        <Route path='/firstep' element={<FirstEP/>}/>
        <Route path='/secondep' element={<SecondEP/>}/>
        <Route path='/thirdep' element={<ThirdEP/>}/>
        <Route path='/fourthep' element={<FourthEP/>}/>
        <Route path='/fifthep' element={<FifthEP/>}/>
        <Route path='/sixthep' element={<SixthEP/>}/>
        <Route path='/epregisterform' element={<EPRegisterform/>}/>

        <Route path='/mpchooseyear' element={<MPChooseyear/>}/>
        <Route path='/firstmp' element={<FirstMP/>}/>
        <Route path='/secondmp' element={<SecondMP/>}/>
        <Route path='/thirdmp' element={<ThirdMP/>}/>
        <Route path='/fourthmp' element={<FourthMP/>}/>
        <Route path='/fifthmp' element={<FifthMP/>}/>
        <Route path='/sixthmp' element={<SixthMP/>}/>
        <Route path='/mpregisterform' element={<MPRegisterform/>}/>


        <Route path='/itchooseyear' element={<ITChooseyear/>}/>
        <Route path='/firstit' element={<FirstIT/>}/>
        <Route path='/secondit' element={<SecondIT/>}/>
        <Route path='/thirdit' element={<ThirdIT/>}/>
        <Route path='/fourthit' element={<FourthIT/>}/>
        <Route path='/fifthit' element={<FifthIT/>}/>
        <Route path='/sixthit' element={<SixthIT/>}/>
        <Route path='/itregisterform' element={<ITRegisterform/>}/>


       
         
          
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/chooseyear" element={<Chooseyear />} />
          <Route path="/firstyear" element={<Firstyear />} />
          <Route path="/secondyear" element={<Secondyear />} />
          <Route path="/thirdyear" element={<Thirdyear />} />
          <Route path="/fourthyear" element={<Fourthyear />} />
          <Route path="/fifthyear" element={<Fifthyear />} />
          <Route path="/sixthyear" element={<Sixthyear />} />
          <Route path="/agreeform" element={<Agreeform />} />
          <Route path="/choosemajor" element={<Choosemajor />} />
          <Route path="/fillId" element={<FillID />} />
        </Routes>
      </div>
    </>
  );
}
