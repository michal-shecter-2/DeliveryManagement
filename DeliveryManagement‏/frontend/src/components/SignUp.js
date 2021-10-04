import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet'
import './SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IComboBoxStyles, SelectableOptionMenuItemType, IButtonStyles, } from '@fluentui/react';
import { ComboBox, findIndex, IComboBox, IComboBoxOption, on, htmlElementProperties, Checkbox, ChoiceGroupBase } from 'office-ui-fabric-react';
import TextField from '@material-ui/core/TextField';
export default function SignUp() {
    const [cities, setCities] = useState([]);
    const [user, setUser] = useState({ firstname: "", lastname: "", password: "", email: "", phone: "", mobilephone: "", citycode: "", street: "" })
    const [firstname, setFirstname] = useState({ firstname: "" })
    const [lastname, setLastname] = useState({ lastname: "" })
    const [password, setPassword] = useState({ password: "" })
    const [email, setEmail] = useState({ email: "" })
    const [phone, setPhone] = useState({ phone: "" })
    const [mobilephone, setMobilephone] = useState({ mobilephone: "" })
    const [citycode, setCitycode] = useState({ citycode: "" })
    const [street, setStreet] = useState({ street: "" })
    const [options, setOptions] = useState([]);
    function getAllCities() {
        return axios.get('http://localhost:5000/cities').then(res => res.data);
    }

    async function addUser() {
        const res = await axios.post('http://localhost:5000/users/post', {
            firstname: firstname,
            lastname: lastname,
            password: password,
            email: email,
            phone: phone,
            mobilephone: mobilephone,
            citycode: citycode,
            street: street
        })
        if (res.status == 200) {
            setUser(res.data);
            swal("wellcom " + res.data.firstname, "good luck in your job", "success")
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };
    function findcity(cityname) {
        let filtercity = cities.find(item => item.name == cityname);
        if (filtercity != undefined) {
            setCitycode(filtercity._id);
        }


    }
    useEffect(() => {
        getAllCities().then(data => setCities(data))
            .then(cities.map((i, item) => options.push({ key: 0, text: i.name })))
            ;
    }, []);

    return (
        <div>

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
                                                <input id="inputFirstName" type="name" placeholder="first name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setFirstname(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputLastName" type="name" placeholder="last name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setLastname(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputPhone" type="phone" placeholder="phone" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setMobilephone(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputMobilePhone" type="phone" placeholder="mobile phone" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setPhone(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <Autocomplete
                                                    className="priority"
                                                    id="Food"
                                                    options={options}
                                                    getOptionLabel={(option) => option.text}
                                                    style={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} label=" עירבחר" variant="outlined" />}
                                                    onChange={(e, value) => { findcity(value.text) }}
                                                />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputStreet" type="name" placeholder="street" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setStreet(e.target.value) }} />
                                            </div>
                                            <div class="custom-control custom-checkbox mb-3">
                                                <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                <label for="customCheck1" class="custom-control-label">Remember password</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={e => addUser()}>Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>


    );
}