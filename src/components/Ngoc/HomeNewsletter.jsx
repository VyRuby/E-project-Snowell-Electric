
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for register!');
  };

function HomeNewsletter() {
  return (
    <div className="container justify-content-center p-4 my-4 rounded ms-auto " style={{backgroundColor: '#cce2fa'}}>
      <h6 className="fw-bold mb-3">Register to get the hottest Updates and Vouchers from Snowell Electric</h6>
      <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-sm-auto col-12">
          <input type="email" className="form-control" style={{width: '600px'}} placeholder="Email" />
        </div>
        <div className="col-sm-auto col-12">
        <button type="submit" className="btn btn-primary w-100">Register</button>
        </div>
      </form>
    </div>
  );
};

export default HomeNewsletter;
