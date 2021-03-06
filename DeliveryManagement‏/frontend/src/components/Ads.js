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
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import swal from 'sweetalert';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';
import { IComboBoxStyles, SelectableOptionMenuItemType, IButtonStyles, Async, } from '@fluentui/react';
import { ComboBox, findIndex, IComboBox, IComboBoxOption, on, htmlElementProperties, Checkbox, ChoiceGroupBase } from 'office-ui-fabric-react';
//import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export default function Ads() {
    const [ads, setAds] = useState([]);
    const [filterAds, setFilterAds] = useState([]);
    const [cities, setCities] = useState([]);
    const [options, setOptions] = useState([])
    const [origincity, setOrigincity] = useState("")
    const [price, setPrice] = useState("")
    const [destinationcity, setDestinationcity] = useState("")
    const [date, setDate] = useState()
    //המשתמש המחוחבר
    const [user, setUser] = useState(
        {
            _id: "61547364745be50c5fbdfe41",
            firstname: "michal",
            lastname: "shecter",
            password: "888999111",
            email: "mical@gmail.com",
            phone: "026424926",
            mobilephone: "0583111544",
            citycode: "61547364745be50c5fbdfe3b",
            street: "apple"
        }
    )
    //פרטי החבילה ובעליה
    const [deliveryDetails, setDeliveryDetails] = useState({
        _id: "",
        usercode: {
            _id: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            mobilephone: ""
        },
        origincity: "",
        destinationcity: "",
        cost: 0,
        uploaddate: "",
        finaldate: "",
        deliveryperson: "",
        note: "",
        size: "",
        like: 0
    })
    const [popupitem, setPopupitem] = useState();
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
    async function Requestelivery() {
        const res = await axios.post('http://localhost:4000/email/send', {

            deliverysender: deliveryDetails,
            user: user,
            date: date

        })
        if (res.status == 200) {

            swal("excellent ", "Your request has been sent to the sender  If he is interested in a mission he will contact you", "success")
        }
        else

            swal({ title: "Opssssss try again", icon: "error" })
    };
    useEffect(async () => {
        // getAllAds().then(data => setAds(data));
        let getads = await getAllAds();
        getads.map(i => ads.push(i));

        let data = await getAllCities();
        data.map(i => cities.push(i))
        cities.map((i, item) => options.push({ key: item, text: i }))
        setFilterAds(getads);
        console.log(filterAds)
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
    const onChangeDestinationcity = (eve) => {
        if (eve && eve.key && eve.text) {
            setDestinationcity(eve.text)
        }
    }
    const onClickFilter = () => {
        debugger;
        let tmp = ads;
        if (origincity != "") {
            tmp = tmp.filter(i => i.origincity == origincity)
        }
        if (destinationcity != "") {
            tmp = tmp.filter(i => i.destinationcity == destinationcity)
        }
        if (price != "") {
            tmp = tmp.filter(i => i.cost >= price)
        }

        setFilterAds(tmp)
        console.log(ads);
    }
    //po up
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {

        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position, item) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
            setDeliveryDetails(item)
        }
    }

    const onHide = (name, label) => {
        dialogFuncMap[`${name}`](false);
        if (label == 'Yes')
            Requestelivery();
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name, "No")} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name, "Yes")} autoFocus />
            </div>
        );
    }

    return (
        <div>
            <h1>{date}</h1>

            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex flex-row justify-content-between align-items-center filters">
                            <h6>Showing {filterAds.length} tasks</h6>
                            <div class="right-sort">
                                <div class="sort-by"><span class="mr-1"></span>
                                    <div class="City-of-origin">
                                        <Autocomplete
                                            className="origincity"
                                            id="origin"
                                            sx={{ width: 300 }}
                                            options={options}
                                            autoHighlight
                                            getOptionLabel={(option) => option.text}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                    {option.text}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Origin city"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                />
                                            )}
                                            onChange={(e, value) => { onChangeOrigincity(value) }}
                                        />
                                    </div>
                                    <div className="Destination city">
                                        <Autocomplete
                                            className="origincity"
                                            id="origin"
                                            sx={{ width: 300 }}
                                            options={options}
                                            autoHighlight
                                            getOptionLabel={(option) => option.text}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                    {option.text}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Destination city"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                />
                                            )}
                                            onChange={(e, value) => { onChangeDestinationcity(value) }}
                                        />
                                        <input id="price" type="number" min="0.00" max="10000.00" placeholder="Price" placeholder="Price" onChange={e => { setPrice(e.target.value) }} />
                                    </div>

                                    <i class="fa fa-angle-down ml-1"></i>
                                    <button class="btn btn-outline-dark btn-sm ml-3 filter" type="button" onClick={(e) => { onClickFilter() }}>Filters&nbsp;<i class="fa fa-flask"></i></button>
                                </div>

                            </div>

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
                                <h5 class="mt-2">Delivery from {item.origincity} to {item.destinationcity}</h5><span class="d-block mb-5">cost:{item.cost}$</span><span class="d-block mb-5">delivery size:{item.size}</span>
                                <div class="d-flex justify-content-between stats">
                                    <div><i class="fa fa-calendar-o"></i><span class="ml-2">until: {convertDay(item.finaldate)}</span></div>
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="profiles">
                                            <Button label="Show" icon="pi pi-external-link" onClick={() => { setPopupitem(item); onClick('displayResponsive', position, item) }} />
                                            {popupitem != null ?
                                                <Dialog header="Details" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                                                    <h5 class="mt-2"><b>Delivery from {popupitem.origincity} to {popupitem.destinationcity}</b></h5>
                                                    <h5 class="mt-2"><b>payment:{popupitem.cost}, {popupitem.size} devilery</b></h5>
                                                    <br />
                                                    <h5 class="mt-2"><b>sender's details‏:</b></h5>
                                                    <h5 class="mt-2">{popupitem.usercode.firstname} {popupitem.usercode.lastname}</h5>
                                                    <h5 class="mt-2">phone: {popupitem.usercode.phone}</h5>
                                                    <h5 class="mt-2">mobilephone: {popupitem.usercode.mobilephone}</h5>
                                                    <h5 class="mt-2">email: {popupitem.usercode.email}</h5>
                                                    <label for="birthdaytime">Interested in picking up the shipment on date and time:</label>
                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                                </Dialog>
                                                : ""}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                    :
                    <h2>"There are no deliveries that are right for you"</h2>
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
    )
}