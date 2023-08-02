import List from "./List";
import React, { useState } from "react";
import { Selectbox } from "./Selectbox";
import { Link, useLocation } from "react-router-dom";
import "./Choosemajor.css";
import Axios from "axios";

export const Choosemajor = () => {
  const location = useLocation();
  const {
    myanname: initialMyanname,
    engname: initialEngname,
    nrc: initialNrc,
    birthDay: initialBirthday,
    nation: initialNation,
    seatno: initialSeatNo,
    score: initialScore,
    department: initialDepartment,
    myanfathername: initialMyanFatherName,
    engfathername: initialEngFatherName,
    fathernrc: initialFatherNrc,
    fathernation: initialFatherNation,
    fatherjob: initialFatherJob,
    mothername: initialMotherName,
    mothernrc: initialMotherNrc,
    mothernation: initialMotherNation,
    motherjob: initialMotherJob,
    address: initialAddress,
    phone_no: initialPhoneNo,
    email: initialEmail,
  } = location.state || {};

  const [myanname, setMyanname] = useState(initialMyanname || "");
  const [engname, setEngname] = useState(initialEngname || "");
  const [nrc, setNrc] = useState(initialNrc || "");
  const [birthDay, setBirthDay] = useState(initialBirthday || "");
  const [nation, setNation] = useState(initialNation || "");
  const [seatno, setSeatNo] = useState(initialSeatNo || "");
  const [score, setScore] = useState(initialScore || "");
  const [department, setDepartment] = useState(initialDepartment || "");
  const [myanfathername, setMyanFatherName] = useState(
    initialMyanFatherName || ""
  );
  const [engfathername, setEngFatherName] = useState(
    initialEngFatherName || ""
  );
  const [fathernrc, setFatherNrc] = useState(initialFatherNrc || "");
  const [fathernation, setFatherNation] = useState(initialFatherNation || "");
  const [fatherjob, setFatherJob] = useState(initialFatherJob || "");
  const [mothername, setMotherName] = useState(initialMotherName || "");
  const [mothernrc, setMotherNrc] = useState(initialMotherNrc || "");
  const [mothernation, setMotherNation] = useState(initialMotherNation || "");
  const [motherjob, setMotherJob] = useState(initialMotherJob || "");
  const [address, setAddress] = useState(initialAddress || "");
  const [phone_no, setPhoneNo] = useState(initialPhoneNo || "");
  const [email, setEmail] = useState(initialEmail || "");

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");

  const options = [
    "",
    "Civil",
    "Electronics",
    "Electrical Power",
    "Mechanical",
    "Information Technology",
  ];

  const onOptionChangeHandler1 = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSelectedValue2(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler3 = (event) => {
    setSelectedValue3(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler4 = (event) => {
    setSelectedValue4(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler5 = (event) => {
    setSelectedValue5(event.target.value);
    console.log("Selected major:", event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("myanname", myanname);
    formData.append("engname", engname);
    formData.append("nrc", nrc);
    formData.append("birthDay", birthDay);
    formData.append("nation", nation);
    formData.append("seatno", seatno);
    formData.append("score", score);
    formData.append("department", department);
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
    formData.append("email", email);
    formData.append("selectedValue", selectedValue);
    formData.append("selectedValue2", selectedValue2);
    formData.append("selectedValue3", selectedValue3);
    formData.append("selectedValue4", selectedValue4);
    formData.append("selectedValue5", selectedValue5);

    /* setMyanname("");
    setEngname("");
    setNrc("");
    setBirthDay("");
    setNation("");
    setSeatNo("");
    setDepartment("");
    setScore("");
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
    setPhoneNo("");
    setEmail("");
    setPhoto(null); */

    /* alert(
      "You registered successfully! Then click Next button and read the university rules. "
    ); */
    try {
      const response = await Axios.post(
        "http://127.0.0.1:8000/student_registration/first_year",
        formData
      );
      const newItemId = response.data.id;
      alert(
        `You registered successfully! Then click Next button and read the university rules and fill this ID ${newItemId} in the Fill ID form.`
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h2>ဖွင့်လှစ်မည့်သင်တန်းများ</h2>
      <br />

      <div class="courses">
        <div>
          <ol>
            <li>Civil(မြို့ပြသင်တန်း)</li>
            <li>Electronics(အီလက်ထရောနစ်)</li>
            <li>Electrical Power(လျှပ်စစ်စွမ်းအား)</li>
            <li>Mechanical(စက်မှုစွမ်းအား)</li>
            <li>Information Technology(သုတနည်းပညာ)</li>
          </ol>
        </div>
        <br />
        <br />
        <h2>တက်‌ရောက်လိုသောသင်တန်း(ကွက်လက်အားလုံးပြည့်စုံစွာဖြည့်စွက်ပါရန်)</h2>
        <br />
        <div>
          <ul>
            <li>
              ပထမဦးစားပေး{" "}
              <select value={selectedValue} onChange={onOptionChangeHandler1}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </li>
            <br />
            <li>
              ဒုတိယဦးစားပေး{" "}
              <select value={selectedValue2} onChange={onOptionChangeHandler2}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </li>
            <br />
            <li>
              တတိယဦးစားပေး{" "}
              <select value={selectedValue3} onChange={onOptionChangeHandler3}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </li>
            <br />
            <li>
              စတုတ္ထဦးစားပေး{" "}
              <select value={selectedValue4} onChange={onOptionChangeHandler4}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </li>
            <br />
            <li>
              ပဥ္စမဦးစားပေး{" "}
              <select value={selectedValue5} onChange={onOptionChangeHandler5}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="back">
        {" "}
        <Link to="/firstyear">
          <button>Back</button>
        </Link>
      </div>

      <div className="submit">
        <button type="submit">Submit</button>
      </div>

      <div class="next">
        {" "}
        <Link to="/agreeform">
          <button>Next</button>
        </Link>{" "}
      </div>
    </form>
  );
};
export default Choosemajor;
