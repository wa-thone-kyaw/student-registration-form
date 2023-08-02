import React, { useRef, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navigationbar } from "../NavigationBar/NavigationBar";
export const Payment = () =>{

  const inputRef = useRef(null);
  const [photo, setImage] = useState("");
  const [engname, setEngname] = useState("");
  const [seatno, setSeatNo] = useState("");

  const handleEngNameChange = (e) => {
    setEngname(e.target.value);
  };
  const handleSeatNoChange = (e) => {
    setSeatNo(e.target.value);
  };

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };


    return(
      <>
      <div> 
      <Navigationbar/ ></div>
       <div class="fee">
      <h2>ကျောင်းအပ်ခ ပေးသွင်းရန်</h2><br/><br/>
      <div className="form-group">
            <label htmlfor="engname">Name</label>
            <input
              onChange={handleEngNameChange}
              id="engname"
              value={engname}
              type="text"
              name="engname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlfor="seatno">Roll_No</label>
            <input
              onChange={handleEngNameChange}
              id="seatno"
              value={engname}
              type="text"
              name="seatno"
              required
            />
          </div>
          <br/>
     
        <table>
       <tbody>
            <tr>
              <td>မှတ်ပုံတင်‌ကြေး</td>
              <td>၂၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ကျောင်းလခ</td>
              <td>၃၀၀၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ဓါတ်ခွဲခန်းကြေး</td>
              <td>၅၀၀ ကျပ်</td>
              
            </tr>
            <tr>
              <td>စာကြည့်တိုက်ကြေး</td>
              <td>၃၀၀ ကျပ်</td>
              
            </tr>
            <tr>
              <td>အားကစားကြေး</td>
              <td>၁၀၀၀ ကျပ်</td>
           </tr>
           <tr>
              <td>စာမေးပွဲကြေး</td>
              <td>၂၅၀၀ ကျပ်</td>
           </tr>
           <tr>
              <td>အောင်လက်မှတ်ကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>အမှတ်စာရင်းကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>Grading ကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>True Copy ကြေး</td>
              <td> </td>
           </tr>
           <tr>
            <td>စုစုပေါင်း</td>
            <td>၃၄၅၀၀ ကျပ်</td>
  
           </tr>
           
           
            </tbody>
            
     </table>
     <div>
     <br/><br/>
     <div className="feeimage">
         
          <div className="image-upload-container">
            <div className="box-decoration">
              <div
                onClick={() => inputRef.current.click()}
                style={{ cursor: "pointer" }}
              >
                {photo ? (
                  <img
                    src={URL.createObjectURL(photo)}
                    class="rounded"
                    width="200"
                    height="200"
                  />
                ) : (
                  <img
                    src={"./upload.jpg"}
                    alt=""
                    class="rounded"
                    width="200"
                    height="200"
                  />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="img"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        </div>
        
      
        <Link to={{pathname:"http://bit.ly/2RP3U0N"}} target="blank">Click to here:</Link>
       </div>

          <div class="submit">
              <button type="submit" required>Pay</button>
          </div>
          </div>
        
        
</>
    );
  }
  export default Payment;
  