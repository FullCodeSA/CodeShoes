import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title={"Mi perfil"} />

                    <h1 className="mt-5 ml-5">Mi Perfil</h1>
                    <br></br>

                    <div class="card-deck">

                        <div class="card-container">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.nombre} />
                            </figure>
                            <hr></hr>
                            
                            <div class="buttons">
                                <Link to="/yo/update" id="edit_profile"><button class="primary">Editar Perfil</button></Link>
                                <hr></hr>
                            </div>

                        </div>
                        <div class="card">
                            <div class="card-body">
                            <h4>Nombre Completo</h4>
                            <p>{user.nombre}</p>
                                <h4>Email</h4>
                                <p>{user.email}</p>

                                <h4>Registrado el: </h4>
                                <p>{String(user.fechaRegistro).substring(0, 10)}</p>
                                <hr></hr>
                                <div class="buttons">
                                    {user.role !== 'admin' && (
                                        <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                            Mis Pedidos
                                        </Link>
                                    )}
                                    <hr></hr>

                                    <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                        Cambiar contraseña
                                    </Link>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">NOS ENCANTA TENERTE</small>
                            </div>
                        </div>
                    </div>








                </Fragment>
            )}
        </Fragment>
    )
}