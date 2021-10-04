import { useState } from 'react';
import { send } from 'emailjs-com';

function App2() {
  return (
    <div>
    <div className="App">
     <form onSubmit={onSubmit}>
  <input  type='text' name='from_name'  placeholder='from name'  value={toSend.from_name}  onChange={handleChange}
  />
  <input type='text' name='to_name' placeholder='to name' value={toSend.to_name} onChange={handleChange} />
  <input type='text' name='message' placeholder='Your message' value={toSend.message} onChange={handleChange}/>
  <input type='text' name='reply_to'  placeholder='Your email'  value={toSend.reply_to}onChange={handleChange} />
   <button type='submit'>Submit</button>
</form>
 </div>
 </div>
  );
}

export default App2;