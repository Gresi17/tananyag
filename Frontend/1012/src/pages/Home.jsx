import React from 'react'
import {Link} from react-router;

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Szuperhős Akadémia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Főoldal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="heroes.html">Szuperhősök</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="newhero.html">Új Szuperhős</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="container mt-5">
        <div className="text-center mb-5">
            <h1 className="display-4">Üdvözöljük a Szuperhős Akadémián!</h1>
            <p className="lead">A világ legerősebb hőseinek kiképzőközpontja.</p>
        </div>

        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body text-center">
                        <h5 className="card-title">🛡️ Küldetések</h5>
                        <p className="card-text">Fedezd fel a legújabb küldetéseket és mentsd meg a világot a gonosztól.</p>
                        <a href="#" className="btn btn-primary">Küldetések megtekintése</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body text-center">
                        <h5 className="card-title">⚡ Hősök</h5>
                        <p className="card-text">Ismerd meg az akadémia aktív szuperhőseit és képességeiket.</p>
                        <Link to="/hosok" className="btn btn-success">Hősök böngészése</Link> /.btn btn-success
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body text-center">
                        <h5 className="card-title">🌟 Csatlakozz</h5>
                        <p className="card-text">
                            Regisztrálj új szuperhősként és kezdd el a kiképzésedet még ma!
                            </p>./card-text
                        <Link to={"/uj-hos"} className="btn btn-warning">
                            Regisztráció
                        </Link> /btn btn-warning
                    </div> /card-body.text-center
                </div> /.card.h-100
            </div> /.col-mb-4.mb-4
        </div> /.row
    </div> /.container.mt-5
    </>
  )
}
