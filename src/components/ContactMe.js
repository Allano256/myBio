import React, {useState} from 'react';



const ContactMe = () => {
   

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
   const[message, setMessage] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const [userMessage, sentUserMessage] = useState('');

   const handleChange = (e) => {
    setName(e.target.value);
   }
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
   }
   const handlemessageChange = (e) => {
    setMessage(e.target.value);
   }
   
   const handlepasswordChange = (e) => {
    setPassword(e.target.value);
   }

   const handleconfPasswordChange = (e) => {
    setConfPassword(e.target.value);
   }

   const handleSubmit = (e) => {

    if(password!==confPassword)
    {
     
      alert("password Not Match");
    }

    else {
      sentUserMessage('A form was submitted with Name :"' + name +
      '" ,Message :"'+ message +'" and Email :"' + email + '"');


        setName("");
        setEmail("");
        setMessage("");
        setPassword("");
        setConfPassword("");

    }





    e.target.reset();
    e.preventDefault();
    

   }



  return (
    
     
<div className="item">
  <form className='list' onSubmit={(e) =>{handleSubmit(e)}} >
    
   
    <div className="container">

      <h1>Contact Me!</h1>

   
    <input type="text" id="name"  placeholder="Your name"   value={name} required onChange = {(e) => {handleChange(e)}} />

   
    <input type="email"  id="email" value={email} required placeholder="Your Email" onChange = {(e) => {handleEmailChange(e)}}    />
    
   
    <input type="text" id='password' value={password} required  placeholder="Your password" onChange = {(e) => {handlepasswordChange(e)}}  />

  
    <input type="text" id='confirmpassword' value={confPassword} required  placeholder="confirm password" onChange = {(e) => {handleconfPasswordChange(e)}}  />

    <input type="text" id="message"  value={message} required placeholder="Your Message" onChange = {(e) => {handlemessageChange(e)}}    />

     
    <button type="submit">SEND MESSAGE</button>

<div> {userMessage} </div>

</div>
    </form>
    </div>

   
  )
}

export default ContactMe;