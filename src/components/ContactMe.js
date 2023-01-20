import React, {useState} from 'react';



const ContactMe = () => {
   

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
   const[message, setMessage] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

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
      alert('A form was submitted with Name :"' + name +
      '" ,Message :"'+message +'" and Email :"' + email + '"');
    }

    e.preventDefault();
   }



  return (
    
     
<div className="item">
  <form onSubmit={(e) =>{handleSubmit(e)}} />
    
    <form  className="list">
    <div className="container">

      <h1>Contact Me!</h1>

    <label for="name">FULL NAME</label>
    <input type="text" id="name" value={name} required onChange = {(e) => {handleChange(e)}} />

    <label for="email">EMAIL</label>
    <input type="email"  id="email" value={email} required placeholder="Your Email" onChange = {(e) => {handleEmailChange(e)}}    />
    
    <label for="password">Password</label>
    <input type="text" value={password} required  placeholder="Your password" onChange = {(e) => {handlepasswordChange(e)}}  />

    <label for="confirm password">Comfirm password</label>
    <input type="text" value={confPassword} required  placeholder="confirm password" onChange = {(e) => {handleconfPasswordChange(e)}}  />

    <label for="message">MESSAGE</label>
    <input type="text" id="message"  value={message} required placeholder="Your Message" onChange = {(e) => {handlemessageChange(e)}}    />

     
    <button type="button">SEND MESSAGE</button>
</div>
    </form>
    </div>

   
  )
}

export default ContactMe;