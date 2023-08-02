import { useRef,useState } from "react";

export const Imageupload = () => {
    const inputRef=useRef(null);
    const [image,setImage]=useState("");
    const handleImageClick=()=>{
        inputRef.current.click('');
    };

    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };

    const[data,setData]=useState();
    console.log(data);

    return(
        <>
        <div className="image-upload-container">
        <div className="box-decoration">
        
        <div onClick={handleImageClick} style={{cursor:"pointer"}}>
            {image ? (
                <img src={URL.createObjectURL(image)}  class="rounded" width="160" height="160"/>
            ):(
           
                <img src={"./upload.jpg"} alt="" class="rounded" width="160" height="160"/>
                )}
            

            <input 
            type="file" 
            ref={inputRef} 
            onChange={handleImageChange} 
            style={{display:"none"}}
            id="img"
            accept="image/*" 
            onchange={(e)=>setData(e.target.files)}
            />
        
        </div>
        </div>
        </div>
        </>
    );
}
export default Imageupload;