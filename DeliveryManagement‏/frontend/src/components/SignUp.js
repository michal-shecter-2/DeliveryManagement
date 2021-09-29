import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet'
import './SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';
export default function SignUp() {
    const [producer, setProducer] = useState({ id: 0, name: "", email: "", address: "", phone: "" })
    const [name, setName] = useState({ name: "" })
    const [email, setEmail] = useState({ email: "" })
    const [password, setPassword] = useState({ password: "" })
    const [phone, setPhone] = useState({ phone: "" })
    async function addProducer() {
        const res = await axios.post('http://localhost:5000/Producers/post', {

            id: 5.0,
            name: name,
            password: password,
            email: email,
            phone: phone,
        })
        if (res.status == 200) {
            setProducer(res.data);
            swal("wellcom " + res.data.name, "good luck in your job", "success")
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };

    return (
        <div>
            {/* { customer.map((item, index) => {
                return (
                    <div>
                        <p>{item.name}</p>
                    </div>
                )
            })} */}

            <div class="container-fluid">

                <div class="row no-gutter">
                    {/* <!-- The image half --> */}
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>


                    {/* <!-- The content half --> */}
                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">

                            {/* <!-- Demo content--> */}
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-7 mx-auto">
                                        <h3 class="display-4">sign up</h3>
                                        <p class="text-muted mb-4">Enter your details</p>
                                        <form>
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setEmail(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={e => { setPassword(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="name" placeholder="name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setName(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="phone" placeholder="phone" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setPhone(e.target.value) }} />
                                            </div>
                                            <div class="custom-control custom-checkbox mb-3">
                                                <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                <label for="customCheck1" class="custom-control-label">Remember password</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={e => addProducer()}>Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                        </div>
                    </div>
                    {/* <!-- End --> */}

                </div>
            </div>

        </div>


    );
}