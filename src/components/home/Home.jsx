import myImg from "../../assets/images/Me.jpg";

const Home = () => {
    const style = {
        borderRadius:'50%'
    }
  return (
    <div className="container">
        <div className="row justify-content-between align-items-center">
      <h4 className="desc text-start col-12 col-md-6">
        Hello Am Ahmed Alaa I’m a front-end engineer, and I create fun,
        innovative, accessible, and fast websites. I try to leave every bit of
        code I touch more readable, modular, performant and accessible than I
        found it.
      </h4>
      <div className="col-12 col-md-6">
      <img style={style} className="w-75" src={myImg} alt="profile" />
      </div>
        </div>
    </div>
  );
};

export default Home;
