import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch.</p>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <br/>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email"/>
        </div>
        <br/>
        <div>
          <label>Message: </label>
          <textarea placeholder="How can we help?"></textarea>
        </div>
        <br />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}


    
