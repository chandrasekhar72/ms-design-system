import { CLIENTS } from './Client.constant'
import './Client.scss'

export default function Client() {
    return (
        <div className='container-fluid'>
            <div className="container-main">
                {/* <div className="sidemenu"></div> */}
                <div className="row g-3 my-2">
                    {CLIENTS.map((client) => (
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12" key={client.key}>
                            <div className="card client">
                                <div className="client-lock">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="card-body">
                                    <div className="row g-2">
                                        <div className="col-auto">
                                            <div className="client-logo">
                                                <img src={client['web_logo']} alt={client['key']} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 overflow-hidden">
                                            <div className="row g-0">
                                                <div className="col-md-6 col-6">
                                                    <div className="client-details">
                                                        <label htmlFor="name">Name</label>
                                                        <p id='name'>{client['name']}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-auto col-6">
                                                    <div className="client-details">
                                                        <label htmlFor="code">Code</label>
                                                        <p id='code'>{client['code']}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="client-details">
                                                        <label htmlFor="key">Key</label>
                                                        <p id='key'>{client['key']}<i className="fa-regular fa-copy client-copy"></i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}