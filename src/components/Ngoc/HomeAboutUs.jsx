const imgStyles = {
    backgroundImage: "url('/img/HomeBanner.png')",
    minHeight: '433px'
}

function HomeAbout(){
  return (
    <div className="bg-light p-3 h-100 rounded shadow-sm" style={imgStyles}>
      <h5><strong>Introduction about Snowell Electric</strong></h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa: Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
};

export default HomeAbout;
