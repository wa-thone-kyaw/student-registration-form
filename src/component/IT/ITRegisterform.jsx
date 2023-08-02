import React, {useState } from "react";
import {Imageupload}  from './Imageupload';
import { Date} from './Date'
import Axios from 'axios';


 export const ITRegisterform = () => {

    const url = ""
    const [data, setData] = useState({
        myanname:"",
        engname:"",
        nrc:"",
        nation:"",
        seatno:"",
        score:"",
        passedseat_no:"",
        currentseat_no:"",
        myanfathername:"",
        engfathername:"",
        fathernrc:"",
        fathernation:"",
        fatherjob:"",
        mothername:"",
        mothernrc:"",
        mothernation:"",
        motherjob:"",
        address:"",
        phone_no:"",
        student_no:"",
        email:"",  
        
        
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{

        myanname: data.myanname,
        engname:data.engname,
        nrc:data.nrc,
        nation:data.nation,
        seatno:data.seatno,
        score:data.score,
        passedseat_no:data.passedseat_no,
        currentseat_no:data.currentseat_no,
        myanfathername:data.myanfathername,
        engfathername:data.engfathername,
        fathernrc:data.fathernrc,
        fathernation:data.fathernation,
        fatherjob:data.fatherjob,
        mothername:data.mothername,
        mothernrc:data.mothernrc,
        mothernation:data.mothernation,
        motherjob:data.motherjob,
        address:data.address,
        phone_no:data.phone_no,
        student_no:data.student_no,
        email:data.email
        
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data }
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (   
<div class="background">
   <div class='uploadphoto'><Imageupload/></div>
        <div class='header'>
            
            <h2>နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)</h2><br/>
            <h2>ကျောင်းသားမှတ်ပုံတင်အခြေပြုပုံစံ</h2> 
            </div>  
            <form onSubmit={(e) => submit(e)}>
        <div className=" register-container">

               <div className="form-group">
                      <label htmlfor="myanname">ကျောင်းသား/သူအမည်(မြန်မာလို)</label>
                     <input onChange={(e)=>handle(e)} id="myanname" value={data.myanname} type="text" name="myanname" required/>    
                        </div>

                    <div className="form-group">
                        <label htmlfor ="nrc">နိုင်ငံသားစီစစ်‌ရေးအမှတ်</label>
                        <input onChange={(e)=>handle(e)} id="nrc" value={data.nrc} type="text" name="nrc" required/>
                    </div>
                    
                    <div className="form-group">
                        <label>မွေးသက္ကရာဇ်</label>
                        <Date/>  
                    </div>

                    <div className="form-group">
                        <label htmlfor ="nation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
                    <input onChange={(e)=>handle(e)} id="nation" value={data.nation} type="text" name="nation" required/> 
                    </div>

                    <div className="form-group">
                        <label htmlfor ="seatno">၁၀ တန်းအောင်မြင်သည့်ခုံအမှတ်/ခုနစ်</label>
                         <input onChange={(e)=>handle(e)} id="seatno" value={data.seatno} type="text" name="seatno" required/>
                    </div>

                    <div className="form-group">
                        <label htmlfor ="score">၁၀ တန်းအမှတ်ပေါင်း</label>
                        <input onChange={(e)=>handle(e)} id="score" value={data.score} type="text" name="score" required/>
                    </div>

                     <div className="form-group">
                        <label htmlfor="passedseat_no">(အောင်မြင်ခဲ့သည့်အတန်း-ခုံအမှတ်)</label>
                        <input onChange={(e)=>handle(e)} id="passedseat_no" value={data.passedseat_no} type="text" name="passedseat_no" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="currentseat_no">(ယခုသင်တန်း-ခုံအမှတ်)</label>
                        <input onChange={(e)=>handle(e)} id="currentseat_no" value={data.currentseat_no} type="text" name="currentseat_no" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="myanfathername">အဘအမည်(မြန်မာလို)</label>
                        <input onChange={(e)=>handle(e)} id="myanfathername" value={data.myanfathername} type="text" name="myanfathername" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="engfathername ">အဘအမည်(အင်္ဂလိပ်လို)</label>
                        <input onChange={(e)=>handle(e)} id="engfathername" value={data.engfathername} type="text" name="engfathername" required  />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="fathernrc">အဘ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
                        <input onChange={(e)=>handle(e)} id="fathernrc" value={data.fathernrc} type="text" name="fathernrc" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="fathernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
                        <input onChange={(e)=>handle(e)} id="fathernation" value={data.fathernation} type="text" name="fathernation" required  />
                    </div>
         
                        <div className="form-group">
                        <label htmlfor ="fatherjob">အဘ၏အလုပ်အကိုင်</label>
                        <input onChange={(e)=>handle(e)} id="fatherjob" value={data.fatherjob} type="text" name="fatherjob" required/>
                       </div> 
                 
                    <div className="form-group">
                        <label htmlfor ="mothername">အမိအမည်</label>
                        <input onChange={(e)=>handle(e)} id="mothername" value={data.mothername} type="text" name="mothername" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="mothernrc">အမိ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
                        <input onChange={(e)=>handle(e)} id="mothernrc" value={data.mothernrc} type="text" name="mothernrc" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="mothernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
                        <input onChange={(e)=>handle(e)} id="mothernation" value={data.mothernation} type="text" name="mothernation" required />
                    </div>
                
                    <div className="form-group">
                        <label htmlfor ="motherjob">အမိ၏အလုပ်အကိုင်</label>
                        <input onChange={(e)=>handle(e)} id="motherjob" value={data.motherjob} type="text" name="motherjob" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="address">မိဘနေရပ်လိပ်စာအပြည့်အစုံ/ဖုန်းနံပါတ်</label>
                        <input onChange={(e)=>handle(e)} id="address" value={data.address} type="text" name="address" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="phone_no">လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ/ဖုန်းနံပါတ်</label>
                        <input onChange={(e)=>handle(e)} id="phone_no" value={data.phone_no} type="text" name="phone_no" required  />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="student_no">ကျောင်းသား/သူကျောင်း၀င်မှတ်ပုံတင်အမှတ်</label>
                        <input onChange={(e)=>handle(e)} id="student_no" value={data.student_no} type="text" name="student_no" required />
                    </div>

                    <div className="form-group">
                        <label htmlfor ="email">Email</label>
                        <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" name="email" required />
                    </div>

                     

</div>
</form>
</div>
  );
}
export default ITRegisterform;