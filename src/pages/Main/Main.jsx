import './Main.css';

const Main = () => {
  return (
    <>
      <div className="homePage">
        <header>
          <div className="iconMotion"></div>
        </header>
        <div className="welcomeMI">
          <h1 className="title">BIENVENIDO A</h1>
          <div className="mainImg"></div>
          <h2 className="subTitle">MONITORING INNOVATION</h2>
        </div>
        <div className="redirectLinks">
          <a href="">MONITORINGINNOVATION</a>
          <a href="">GPS CONTROL</a>
          <a href="">Link repo front</a>
          <a href="">Link repo back</a>
        </div>
        <div className="animation">
          <div className="circleAnimation"></div>
        </div>
      </div>

      <div className="formUsers">
        <div className="userFeatures">
          <div className="createUpdateUser">
            <div className="card">
              <div className="marca">
                <div className="plus"></div>
                <div className="iconMarca"></div>
                <input type="text" placeholder="Mazda" />
              </div>
              <div className="sucursal">
                <div className="iconSucursal"></div>
                <input type="text" placeholder="Chapinero" />
              </div>
              <div className="user">
                <div className="iconUser"></div>
                <input type="text" placeholder="David Sandoval" />
              </div>
            </div>
          </div>
          <div className="tableUsers"></div>
        </div>
        <div className="iconMotionv2"></div>
      </div>
    </>
  );
};

export default Main;
