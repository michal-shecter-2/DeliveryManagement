import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Edit.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import 'reactjs-popup/dist/index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import ReactDOM from 'react-dom';
import 'reactjs-popup/dist/index.css';
import ReactDOM from 'react-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import store from './Store';
import { loginuser, sighnupuser } from './actions';
export default function Agent() {
    const [user, setUser] = useState(store.getState().user)
    const [origincity, setOrigincity] = useState("");
    const [cities, setCities] = useState([]);
    const [destinationcity, setDestinationcity] = useState(" ");
    const [price, setPrice] = useState(0);
    const [options, setOptions] = useState([])
    const [userads, setUserads] = useState([])
    async function getAllCities() {
        let arr = [];
        await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
            "country": "israel"
        })
            .then(res => res.data.data.map(i => arr.push(i)));
        return arr;
    }
    async function addAgent() {
        const res = await axios.post('http://localhost:4000/agent/post', {
            usercode: user._id,
            origincity: origincity,
            destinationcity: destinationcity,
            price: price
        })
        if (res.status == 200) {
            setUser(res.data);
            swal("Your smart agent has been set up !!").then(<a class="nav-link" href="#/Ads">דף הבית</a>)
            // swal.onClick(<a class="nav-link" href="#/Ads">דף הבית</a>)
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };
    useEffect(async () => {

        let data = await getAllCities();
        data.map(i => cities.push(i))
        cities.map((i, item) => options.push({ key: item, text: i }))
    }, []);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {

        'displayResponsive': setDisplayResponsive
    }
    return (
        <div>
            <div class="container rounded bg-white mt-5">
                <div class="row">
                    <div class="col-md-4 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" /><span class="font-weight-bold">{user.firstname}</span><span class="text-black-50">{user.email}</span><span>{user.citycode}</span></div>
                    </div>
                    <div class="col-md-8">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h3 class="text-right">Set up your smart agent</h3>
                            </div>
                            <div class="row mt-2">
                                <div><h6>Select a city of origin</h6></div>
                                <div class="row mt-3">
                                    <Autocomplete
                                        options={options}
                                        getOptionLabel={(option) => option.text}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Select a city" variant="outlined" />} onChange={(e, value) => { setOrigincity(value.text) }}
                                    />
                                </div>
                            </div>
                            <div><h6>Select a destination city</h6></div>
                            <div class="row mt-3">
                                <Autocomplete
                                    options={options}
                                    getOptionLabel={(option) => option.text}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select a city" variant="outlined" />} onChange={(e, value) => { setDestinationcity(value.text) }}
                                />
                            </div>
                            <div class="row mt-3">
                                <div><h6>Select a starting price</h6></div>
                                <div class="col-md-6"><input type="number" class="form-control" placeholder="starting price" onChange={(e, value) => { setPrice(e.target.value) }} /></div>
                            </div>
                            <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button" onClick={e => { addAgent() }}>Save Agent</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
