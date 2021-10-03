import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet'
import './Ads.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import swal from 'sweetalert';
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
                                            <div class="profiles"><img class="rounded-circle" src="https://i.imgur.com/4nUVGjW.jpg" width="30" /><img class="rounded-circle" src=" https://i.imgur.com/GHCtqgp.jpg" width="30" /><img class="rounded-circle" src="https://i.imgur.com/UL0GS75.jpg" width="30" /></div><span class="ml-3">12</span>
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

                <div class="container d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="Modal_button"> Open modal </button>
                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> </div>
                                <div class="modal-body mb-0 pb-0 mt-0">
                                    <div class="container ">

                                        <div class="holder">
                                            <div class="row mb-1">
                                                <div class="col">
                                                    <h2>Choose File Types</h2>
                                                </div>
                                            </div>
                                            <form action="#" class="customRadio customCheckbox m-0 p-0">
                                                <div class="row mb-0">
                                                    <div class="row justify-content-start">
                                                        <div class="col-12">
                                                            <div class="row"> <input type="radio" name="textEditor" id="dreamweaver" checked /> <label for="dreamweaver">Back up all files folders</label> </div>
                                                            <div class="row"> <input type="radio" name="textEditor" id="sublime" /> <label for="sublime">Back up photos and videos</label> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-0 ml-4">
                                                    <div class="col-12 my_checkbox ">
                                                        <div class="row"> <input type="checkbox" id="screenshots" checked /> <label for="javascript" id="screenshots_label">Back up screenshots</label> </div>
                                                        <div class="row"> <input type="checkbox" id="RAW" /> <label for="RAW">Back up RAW files</label> </div>
                                                        <div class="row"> <input type="checkbox" id="Library" /> <label for="Library">Back up Photos Library metadata</label> </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-4">
                                                    <div class="col-12 Advanced_setting">

                                                        <b> <a class="Advanced_setting" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> Advanced setting &nbsp;<i class="icon-action fa fa-chevron-down"></i> </a></b>  Advanced Setting &nbsp;<i class="icon-action fa fa-chevron-down"></i> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer pt-0 mt-0 pb-5 pr-6 m-1 ">
                                    <div class="col-2"> </div>
                                    <div class="col-6 justify-content-start"> <a href="#" id="modal_footer_support" data-toggle="popover" title="Support" data-content="Support Message" class="modal_footer"><i class="fa fa-question-circle-o modal_footer" aria-hidden="true"></i> <span class="modal_footer">Support</span> </a> </div>
                                    <div class="col-2 justify-content-end ">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>  <button type="button" class="btn btn-outline-light modal_footer" data-dismiss="modal">Cancel</button> </div>
                                    <div class="col-2 justify-content-start m-0 p-0"> <button type="button" class="btn btn-success box-shadow--16dp" data-dismiss="modal">OK</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}