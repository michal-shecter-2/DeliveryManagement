import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ads.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import swal from 'sweetalert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IComboBoxStyles, SelectableOptionMenuItemType, IButtonStyles, Async, } from '@fluentui/react';
import { ComboBox, findIndex, IComboBox, IComboBoxOption, on, htmlElementProperties, Checkbox, ChoiceGroupBase } from 'office-ui-fabric-react';
import TextField from '@material-ui/core/TextField';
export default function Ads() {
    const [ads, setAds] = useState([]);
    const [filterAds, setFilterAds] = useState([]);
    const [cities, setCities] = useState([]);
    const [options, setOptions] = useState([])
    const [origincity, setOrigincity] = useState("")
    const [destinationcity, setDestinationcity] = useState("")
    async function getAllAds() {
        let arr = [];
        await axios.get('http://localhost:4000/ads/')
            .then(res => res.data.map(i => arr.push(i)));;
        return arr;
    }
    async function getAllCities() {
        let arr = [];
        await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
            "country": "israel"
        })
            .then(res => res.data.data.map(i => arr.push(i)));

        return arr;
    }
    useEffect(async () => {
        // getAllAds().then(data => setAds(data));
        let getads = await getAllAds();
        getads.map(i => ads.push(i));

        let data = await getAllCities();
        data.map(i => cities.push(i))
        cities.map((i, item) => options.push({ key: item, text: i }))
        setFilterAds(getads)
    }, []);
    function convertDay(day) {
        var day = new Date(day);
        var dayName = day.toLocaleDateString();
        return dayName;
    };
    const onChangeOrigincity = (eve) => {
        if (eve && eve.key && eve.text) {
            setOrigincity(eve.text)
        }
    }
    const onChangedestinationcity = (eve) => {
        if (eve && eve.key && eve.text) {
            setDestinationcity(eve.text)
        }
    }
    const onClickCity = () => {
        debugger;
        let tmp = ads.filter(i => i.origincity == origincity && i.destinationcity == destinationcity);
        setFilterAds(tmp)
        console.log(ads);
    }
    //po up
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {

        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex flex-row justify-content-between align-items-center filters">
                            <h6>Showing 291 tasks</h6>
                            <div class="right-sort">
                                <div class="sort-by"><span class="mr-1">Sort by:</span>
                                    <div className="autocomplate">
                                        <Autocomplete
                                            className="origincity"
                                            id="origin"
                                            options={options}
                                            getOptionLabel={(option) => option.text}
                                            style={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label=" עיר מוצא" variant="outlined" />}
                                            onChange={(e, value) => { onChangeOrigincity(value) }}
                                        />
                                        <Autocomplete
                                            className="destinationcity"
                                            id="destination"
                                            options={options}
                                            getOptionLabel={(option) => option.text}
                                            style={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label=" עיר יעד" variant="outlined" />}
                                            onChange={(e, value) => { onChangedestinationcity(value) }}
                                        />
                                    </div>
                                    <i class="fa fa-angle-down ml-1"></i>
                                    <button class="btn btn-outline-dark btn-sm ml-3 filter" type="button" onClick={(e) => { onClickCity() }}>Filters&nbsp;<i class="fa fa-flask"></i></button></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1">
                    {filterAds.length > 0 ?
                        filterAds.map(item =>
                            <div class="col-md-4">
                                <div class="p-card bg-white p-2 rounded px-3">
                                    <div class="d-flex align-items-center credits"><img src="https://i.imgur.com/hlz6G90.png" width="16px" /><span class="text-black-50 ml-2">1 credits</span></div>
                                    <h5 class="mt-2">Delivery from {item.origincity} to {item.destinationcity}</h5><span class="badge badge-danger py-1 mb-2">Marketing &amp; Sales</span><span class="d-block mb-5">cost:{item.cost}$</span><span class="d-block mb-5">delivery size:{item.size}</span>
                                    <div class="d-flex justify-content-between stats">
                                        <div><i class="fa fa-calendar-o"></i><span class="ml-2">until: {convertDay(item.finaldate)}</span></div>
                                        <div class="d-flex flex-row align-items-center">
                                            <div class="profiles">
                                                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')} />
                                                <Dialog header="Details" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                                                    <h5 class="mt-2"><b>Delivery from {item.origincity} to {item.destinationcity}</b></h5>
                                                    <h5 class="mt-2"><b>payment:{item.cost}, {item.size} devilery</b></h5>
                                                    <br />
                                                    <h5 class="mt-2"><b>sender's details‏:</b></h5>
                                                    <h5 class="mt-2">{item.usercode.firstname} {item.usercode.lastname}</h5>
                                                    <h5 class="mt-2">phone: {item.usercode.phone}</h5>
                                                    <h5 class="mt-2">mobilephone: {item.usercode.mobilephone}</h5>
                                                    <h5 class="mt-2">email: {item.usercode.email}</h5>
                                                    <label for="birthdaytime">Interested in picking up the shipment on date and time:</label>
                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                                </Dialog></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                        :
                        <h2>"אין משלוחים המתאימים לדרישותיך"</h2>
                    }
                </div>
                <div class="d-flex justify-content-end text-right mt-2">
                    <nav>
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}