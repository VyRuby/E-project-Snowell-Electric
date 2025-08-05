
const ContactForm = () => {
  return (
    <div className="bg-light p-4 rounded">
      <h5>Sign Up for Updates & Offers</h5>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign up</button>
      </form>
    </div>
  );
};

export default ContactForm;
