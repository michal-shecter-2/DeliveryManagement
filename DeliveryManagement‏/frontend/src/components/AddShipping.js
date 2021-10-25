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
        const res = await axios.post('localhost:4000/ads/post', {
            // usercode: usercode,
            // origincity: origincity,
            // destinationcity: destinationcity,
            // cost: cost,
            // uploaddate: uploaddate,
            // finaldate: finaldate,
            // note: note,
            // size: size
            "usercode": "615e371b9187ad41b41bc196",
            "origincity": "Jerusalem",
            "destinationcity": "Jerusalem",
            "cost": 30,
            "uploaddate": "2021-10-01T07:14:23.000Z",
            "finaldate": "2021-10-25T07:14:23.000Z",
            "note": "fragile",
            "size": "big",
            "like": 0
        })
        if (res.status == 200) {
            setUser(res.data);
            swal("wellcom ", "good luck in your job", "success")
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
                                                    renderInput={(params) => <TextField {...params} label=" בחר עיר מוצא" variant="outlined" />}
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
                                                    renderInput={(params) => <TextField {...params} label=" בחר עיר יעד" variant="outlined" />}
                                                    onChange={(e, value) => { setDestinationcity(value.text) }}
                                                />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="Price" type="number" placeholder="Price" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" min="0" onChange={e => { setCost(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label for="birthdaytime">תאריך:</label>
                                                <input type="datetime-local" id="birthdaytime" name="birthdaytime" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setFinaldate(e.target.value) }} />
                                            </div>
                                            <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker">
                                                <input placeholder="Select date" type="text" id="example" class="form-control" />
                                                <label for="example">Try me...</label>
                                                <i class="fas fa-calendar input-prefix" tabindex='0'></i>
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputFirstName" type="name" placeholder="Remarks" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setNote(e.target.value) }} />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input id="inputMobilePhone" type="phone" placeholder="גודל החבילה" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" onChange={e => { setSize(e.target.value) }} />
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