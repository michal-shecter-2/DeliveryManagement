import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import SignUp from './SignUp';
import swal from 'sweetalert';
export default function Login() {
    const [customers, setCustomers] = useState([]);
    const [producer, setProducer] = useState([]);//אותו צריך לשים רדיןס
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    function getAllCostumrs() {
        return axios.get('http://localhost:5000/customers').then(res => res.data);
    }
    // function getByEmail() {
    //     return axios.get('http://localhost:5000/Producers/login', {
    //         password: '12220011',
    //         email: 'bashani@gmail.comr'
    //     }
    //     ).then(res => res.data);
    // }
    async function getByEmail() {
        const res = await axios.post('http://localhost:5000/Producers/login', {
            password: password,
            email: email

        });

        // return res.data;
        if (res.data.name != null) {
            swal("Hello " + res.data.name, "שמחים שחזרת אלינו", "success")
            setProducer(res.data);
        }
        else
            swal({ title: "The email address or password you entered is incorrect", icon: "error" })
        //alert(res.data.name)
    }

    useEffect(() => {
        getAllCostumrs().then(data => setCustomers(data));
        // getByEmail().then(data => setProducer(data));
    }, []);
    return (
        <div>
            <h3>{customers.length}</h3>
            {/* <h3>{producer.name}</h3> */}
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
                                        <h3 class="display-4">sign in</h3>
                                        <p class="text-muted mb-4">enter your email and password</p>
                                        <form>
                                            <div class="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" onChange={e => { setEmail(e.target.value) }} class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Password" required="" onChange={e => { setPassword(e.target.value) }} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <div class="custom-control custom-checkbox mb-3">
                                                <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                <label for="customCheck1" class="custom-control-label">Remember password</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={e => getByEmail()} >Sign in</button>
                                            <div class="text-center d-flex justify-content-between mt-4"><p>Not registered? <Link to='/SignUp' class="font-italic text-muted"> <u>Sign up</u></Link></p>
                                            </div>
                                            {/* <div class="text-center d-flex justify-content-between mt-4"><p>Not registered? <a href="https://bootstrapious.com/snippets" class="font-italic text-muted">
                                                <u>Sign up</u></a></p></div> */}
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