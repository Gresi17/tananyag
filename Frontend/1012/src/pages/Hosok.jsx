import React from "react";

export default function Hosok() {
  const [hosok, setHosok] = useState([]);

  function getHosok() {
    fetch("http://localhost:5000/api/szuperhosok").then(async (res) => {
      const data = await res.json();
      setHosok(data);
    });
  }

  useEffect(() => {
    getHosok();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Szuperhős Akadémia
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Főoldal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="heroes.html">
                  Szuperhősök
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="newhero.html">
                  Új Szuperhős
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="mb-4">Aktív Szuperhősök</h2>

        <div className="row">
          {hosok.map((hos) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0"> {hos.szuperhosNev}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Származás:</strong> {hos.szekhely}
                  </p>
                  {hos.kepessegek.map((kepesseg) => (
                    <>
                      <p className="card-text">
                        <strong>Képesség:</strong> {kepesseg.kepessegNeve}
                      </p>
                      <p className="card-text">
                        <strong>Erősségi szint:</strong> {kepesseg.eroSzint}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
