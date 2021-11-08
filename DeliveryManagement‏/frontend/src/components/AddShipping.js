import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddShipping.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import { HashRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom'

export default function AddShipping() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const [cities, setCities] = useState([]);
    const [options, setOptions] = useState([])
    const [newAds, setNewAds] = useState({
        destinationcity: "", cost: 0, uploaddate: "2021-10-01T07:14:23.000Z", finaldate: "2021-10-25T07:14:23.000Z", note: "", size: ""
    })
    const [usercode, setUsercode] = useState("615e371b9187ad41b41bc196");
    const [origincity, SetOrigincity] = useState("");
    const [destinationcity, setDestinationcity] = useState("");
    const [cost, setCost] = useState("");
    const [uploaddate, setUploaddate] = useState("2021-10-01T07:14:23.000Z");
    const [finaldate, setFinaldate] = useState("2021-10-01T07:14:23.000Z");
    const [note, setNote] = useState("");
    const [size, setSize] = useState("");
    async function addAds() {
        const res = await axios.post('http://localhost:4000/ads/post', {
            usercode: usercode,
            origincity: origincity,
            destinationcity: destinationcity,
            cost: cost,
            uploaddate: uploaddate,
            finaldate: finaldate,
            note: note,
            size: size
        })
        if (res.status == 200) {
            setUser(res.data);
            swal("wellcom ", "good luck in your job", "success")
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };
    async function addUser() {
        const res = await axios.post('http://localhost:4000/users/post', {
            firstname: "aa",
            lastname: "aa",
            password: "aa",
            email: "aa",
            phone: "aa",
            mobilephone: "aa",
            citycode: "aa",
            street: "aa"
        })
        if (res.status == 200) {
            setUser(res.data);
            swal("wellcom " + res.data.firstname, "good luck in your job", "success").then(<a class="nav-link" href="#/Ads">דף הבית</a>)
            // swal.onClick(<a class="nav-link" href="#/Ads">דף הבית</a>)
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };
    async function getAllCities() {
        let arr = [];
        await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
            "country": "israel"
        })
            .then(res => res.data.data.map(i => arr.push(i)));

        return arr;
    }
    useEffect(async () => {
        let data = await getAllCities();
        data.map(i => cities.push(i))
        cities.map((i, item) => options.push({ key: item, text: i }))
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
                                        <h3 class="display-4">Add Delivery</h3>
                                        <p class="text-muted mb-4">Enter your  delivery details</p>
                                        <form>
                                            <div class="form-group mb-3">
                                                <Autocomplete
                                                    className="OriginCity"
                                                    id="city"
                                                    options={options}
                                                    getOptionLabel={(option) => option.text}
                                                    style={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} label="choose destinationcity" variant="outlined" />}
                                                    onChange={(e, value) => { SetOrigincity(value.text) }}
                                                />
                                            </div>
                                            <div class="form-group mb-3">
                                                <Autocomplete
                                                    className="DestinationCity"
                                                    id="city"
                                                    options={options}
                                                    getOptionLabel={(option) => option.text}
                                                    style={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} label=" choose origincity" variant="outlined" />}
                                                    onChange={(e, value) => { setDestinationcity(value.text) }}
                                                />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="birthdaytime">Until Date:</label>
                                                <input type="datetime-local" id="birthdaytime" name="birthdaytime" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setFinaldate(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="Price" type="number" placeholder="Price" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" min="0" onChange={e => { setCost(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputMobilePhone" type="phone" placeholder="delivert size " required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setSize(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="Remarks" type="name" placeholder="Remarks" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setNote(e.target.value) }} />
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={e => addAds()}>Sign Up</button>
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