import React, { useRef, useState } from "react";
import { Imageupload } from "./Imageupload";
import { Link } from "react-router-dom";
import { Date } from "./Date";
import { Currentdate } from "./Currentdate";
import Axios from "axios";

export const Fifthyear = () => {
  const [myanname, setMyanname] = useState("");
  const [engname, setEngname] = useState("");
  const [nrc, setNrc] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [nation, setNation] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [score, setScore] = useState("");
  const [passedseat_no, setPassedSeatNo] = useState("");
  const [currentseat_no, setCurrentSeatNo] = useState("");
  const [myanfathername, setMyanFatherName] = useState("");
  const [engfathername, setEngFatherName] = useState("");
  const [fathernrc, setFatherNrc] = useState("");
  const [fathernation, setFatherNation] = useState("");
  const [fatherjob, setFatherJob] = useState("");
  const [mothername, setMotherName] = useState("");
  const [mothernrc, setMotherNrc] = useState("");
  const [mothernation, setMotherNation] = useState("");
  const [motherjob, setMotherJob] = useState("");
  const [address, setAddress] = useState("");
  const [student_no, setStudentNo] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);
  const [photo, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleMyanNameChange = (e) => {
    setMyanname(e.target.value);
  };
  const handleEngNameChange = (e) => {
    setEngname(e.target.value);
  };
  const handleNrcChange = (e) => {
    setNrc(e.target.value);
  };
  const handleBirthDayChange = (e) => {
    setBirthDay(e.target.value);
  };
  const handleNationChange = (e) => {
    setNation(e.target.value);
  };
  const handleSeatNoChange = (e) => {
    setSeatNo(e.target.value);
  };
  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };
  const handlePassedSeatNoChange = (e) => {
    setPassedSeatNo(e.target.value);
  };
  const handleCurrentSeatNoChange = (e) => {
    setCurrentSeatNo(e.target.value);
  };
  const handleMyFatherNameChange = (e) => {
    setMyanFatherName(e.target.value);
  };
  const handleEngFatherNameChange = (e) => {
    setEngFatherName(e.target.value);
  };
  const handleFatherNrcChange = (e) => {
    setFatherNrc(e.target.value);
  };
  const handleFatherNationChange = (e) => {
    setFatherNation(e.target.value);
  };
  const handleFatherJobChange = (e) => {
    setFatherJob(e.target.value);
  };
  const handleMotherNameChange = (e) => {
    setMotherName(e.target.value);
  };
  const handleMotherNrcChange = (e) => {
    setMotherNrc(e.target.value);
  };
  const handleMotherNationChange = (e) => {
    setMotherNation(e.target.value);
  };
  const handleMotherJobChange = (e) => {
    setMotherJob(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleStudentNoChange = (e) => {
    setStudentNo(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("myanname", myanname);
    formData.append("engname", engname);
    formData.append("nrc", nrc);
    formData.append("birthDay", birthDay);
    formData.append("nation", nation);
    formData.append("seatno", seatno);
    formData.append("score", score);
    formData.append("passedseat_no", passedseat_no);
    formData.append("currentseat_no", currentseat_no);
    formData.append("myanfathername", myanfathername);
    formData.append("engfathername", engfathername);
    formData.append("fathernrc", fathernrc);
    formData.append("fathernation", fathernation);
    formData.append("fatherjob", fatherjob);
    formData.append("mothername", mothername);
    formData.append("mothernrc", mothernrc);
    formData.append("mothernation", mothernation);
    formData.append("motherjob", motherjob);
    formData.append("address", address);
    formData.append("phone_no", phone_no);
    formData.append("student_no", student_no);
    formData.append("email", email);
    formData.append("photo", photo);

    setMyanname("");
    setEngname("");
    setNrc("");
    setBirthDay("");
    setNation("");
    setSeatNo("");
    setScore("");
    setPassedSeatNo("");
    setCurrentSeatNo("");
    setMyanFatherName("");
    setEngFatherName("");
    setFatherNrc("");
    setFatherNation("");
    setFatherJob("");
    setMotherName("");
    setMotherNrc("");
    setMotherNation("");
    setMotherJob("");
    setAddress("");
    setStudentNo("");
    setPhoneNo("");
    setEmail("");

    Axios.post(
      "http://127.0.0.1:8000/student_registration/matched_fifth_year",
      formData
      /*
       */
      /* { headers: { "Content-Type": "application/x-www-form-urlencoded" } } */
    )
      .then((response) => {
        alert(
          "You registered successfully! Then click Next button and read the university rules. "
        );
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="background">
        <div class="uploadphoto">
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
                    width="160"
                    height="160"
                  />
                ) : (
                  <img
                    src={"./upload.jpg"}
                    alt=""
                    class="rounded"
                    width="160"
                    height="160"
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
        <div class="header">
          <h2>ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်</h2>
          <h2>သိပ္ပံနှင့်နည်းပညာဦးစီးဌာန</h2>
          <h2>အဆင့်မြင့်သိပ္ပံနှင့်နည်းပညာဦးစီးဌာန</h2>
          <h2>နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)မြို့</h2>
          <p>
            ရက်စွဲ <Currentdate />
          </p>
          <h2>ကျောင်းသားမှတ်ပုံတင်အခြေပြုပုံစံ</h2>
        </div>
        <div className=" register-container">
          <div className="form-group">
            <label htmlfor="myanname">ကျောင်းသား/သူအမည်(မြန်မာလို)</label>
            <input
              onChange={handleMyanNameChange}
              id="myanname"
              value={myanname}
              type="text"
              name="myanname"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="engname">ကျောင်းသား/သူအမည်(အင်္ဂလိပ်လို)</label>
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
            <label htmlfor="nrc">နိုင်ငံသားစီစစ်‌ရေးအမှတ်</label>
            <input
              onChange={handleNrcChange}
              id="nrc"
              value={nrc}
              type="text"
              name="nrc"
              required
            />
          </div>

          <div className="form-group">
            <label>မွေးသက္ကရာဇ်</label>
            <input
              type="date"
              name="birthDay"
              value={birthDay}
              onChange={handleBirthDayChange}
              id="birthDay"
            />
          </div>

          <div className="form-group">
            <label htmlfor="nation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              onChange={handleNationChange}
              id="nation"
              value={nation}
              type="text"
              name="nation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="seatno">၁၀ တန်းအောင်မြင်သည့်ခုံအမှတ်/ခုနစ်</label>
            <input
              onChange={handleSeatNoChange}
              id="seatno"
              value={seatno}
              type="text"
              name="seatno"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="score">၁၀ တန်းအမှတ်ပေါင်း</label>
            <input
              onChange={handleScoreChange}
              id="score"
              value={score}
              type="text"
              name="score"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="passedseat_no">
              (အောင်မြင်ခဲ့သည့်အတန်း-ခုံအမှတ်)
            </label>
            <input
              onChange={handlePassedSeatNoChange}
              id="passedseat_no"
              value={passedseat_no}
              type="text"
              name="passedseat_no"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="currentseat_no">(ယခုသင်တန်း-ခုံအမှတ်)</label>
            <input
              onChange={handleCurrentSeatNoChange}
              id="currentseat_no"
              value={currentseat_no}
              type="text"
              name="currentseat_no"
              required
            />
          </div>
          <div className="form-group">
            <label htmlfor="myanfathername">အဘအမည်(မြန်မာလို)</label>
            <input
              onChange={handleMyFatherNameChange}
              id="myanfathername"
              value={myanfathername}
              type="text"
              name="myanfathername"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="engfathername ">အဘအမည်(အင်္ဂလိပ်လို)</label>
            <input
              onChange={handleEngFatherNameChange}
              id="engfathername"
              value={engfathername}
              type="text"
              name="engfathername"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fathernrc">အဘ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
            <input
              onChange={handleFatherNrcChange}
              id="fathernrc"
              value={fathernrc}
              type="text"
              name="fathernrc"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fathernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              onChange={handleFatherNationChange}
              id="fathernation"
              value={fathernation}
              type="text"
              name="fathernation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fatherjob">အဘ၏အလုပ်အကိုင်</label>
            <input
              onChange={handleFatherJobChange}
              id="fatherjob"
              value={fatherjob}
              type="text"
              name="fatherjob"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothername">အမိအမည်</label>
            <input
              onChange={handleMotherNameChange}
              id="mothername"
              value={mothername}
              type="text"
              name="mothername"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothernrc">အမိ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
            <input
              onChange={handleMotherNrcChange}
              id="mothernrc"
              value={mothernrc}
              type="text"
              name="mothernrc"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              onChange={handleMotherNationChange}
              id="mothernation"
              value={mothernation}
              type="text"
              name="mothernation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="motherjob">အမိ၏အလုပ်အကိုင်</label>
            <input
              onChange={handleMotherJobChange}
              id="motherjob"
              value={motherjob}
              type="text"
              name="motherjob"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="address">
              မိဘနေရပ်လိပ်စာအပြည့်အစုံ/ဖုန်းနံပါတ်
            </label>
            <input
              onChange={handleAddressChange}
              id="address"
              value={address}
              type="text"
              name="address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="phone_no">
              လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ/ဖုန်းနံပါတ်
            </label>
            <input
              onChange={handlePhoneNoChange}
              id="phone_no"
              value={phone_no}
              type="text"
              name="phone_no"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="student_no">
              ကျောင်းသား/သူကျောင်း၀င်မှတ်ပုံတင်အမှတ်
            </label>
            <input
              onChange={handleStudentNoChange}
              id="student_no"
              value={student_no}
              type="text"
              name="student_no"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="email">Email</label>
            <input
              onChange={handleEmailChange}
              id="email"
              value={email}
              type="text"
              name="email"
              required
            />
          </div>

          <div class="submit">
            <button type="submit" required>
              Submit
            </button>
          </div>

          <div className=" back">
            {" "}
            <Link to="/chooseyear">
              <button>Back</button>
            </Link>
          </div>

          <div class="next">
            {" "}
            <Link to="/agreeform">
              <button>Next</button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </form>
  );
};
export default Fifthyear;
