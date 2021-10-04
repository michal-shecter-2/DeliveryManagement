import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet'
import './Ads.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import swal from 'sweetalert';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
export default function Ads() {
    const [ads, setAds] = useState([]);
    function getAllAds() {
        return axios.get('http://localhost:5000/ads/').then(res => res.data);
    }
    useEffect(() => {
        getAllAds().then(data => setAds(data));

    }, []);
    // export const formatToSimpleDate = ( date: DateType | string | null | undefined ) => date !== null && date !== undefined ? format(new Date(date), "dd/MM/Y") : undefined;‏
    function convertDay(day) {
        var day = new Date(day);
        var dayName = day.toLocaleDateString();
        return dayName;
    };
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
                                <div class="sort-by"><span class="mr-1">Sort by:</span><a href="#">Most popular</a><i class="fa fa-angle-down ml-1"></i><button class="btn btn-outline-dark btn-sm ml-3 filter" type="button">Filters&nbsp;<i class="fa fa-flask"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1">
                    {ads.length > 0 ?
                        ads.map(item =>
                            <div class="col-md-4">
                                <div class="p-card bg-white p-2 rounded px-3">
                                    <div class="d-flex align-items-center credits"><img src="https://i.imgur.com/hlz6G90.png" width="16px" /><span class="text-black-50 ml-2">1 credits</span></div>
                                    <h5 class="mt-2">Delivery from {item.origincity.name} to {item.destinationcity.name}</h5><span class="badge badge-danger py-1 mb-2">Marketing &amp; Sales</span><span class="d-block mb-5">cost:{item.cost}$</span><span class="d-block mb-5">delivery size:{item.size}</span>
                                    <div class="d-flex justify-content-between stats">
                                        <div><i class="fa fa-calendar-o"></i><span class="ml-2">until: {convertDay(item.finaldate)}</span></div>
                                        <div class="d-flex flex-row align-items-center">
                                            <div class="profiles">
                                            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')} />
                <Dialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')}>
                <h5 class="mt-2"><b>Delivery from {item.origincity.name} to {item.destinationcity.name}</b></h5>
                <h5 class="mt-2"><b>sender's details‏:</b></h5>
                <h5 class="mt-2">{item.usercode.firstname} {item.usercode.lastname}</h5>
                <h5 class="mt-2">phone: {item.usercode.phone}</h5>
                <h5 class="mt-2">mobilephone: {item.usercode.mobilephone}</h5>
                <h5 class="mt-2">email: {item.usercode.email}</h5>
              <label for="birthdaytime">Interested in picking up the shipment on date and time:</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime"/>
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