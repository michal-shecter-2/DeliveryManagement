import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet'
import './Ads.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';
export default function Ads() {
    const [ads, setAds] = useState([]);
    function getAllAds() {
        return axios.get('http://localhost:5000/ads/').then(res => res.data);
    }
    useEffect(() => {
        getAllAds().then(data => setAds(data));

    }, []);
    return (
        <div>
            <h1>{ads.length}</h1>
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
                                    <h5 class="mt-2">Delivery from {item.origincity.name} to {item.destinationcity.name} from {item.usercode.firstname}</h5><span class="badge badge-danger py-1 mb-2">Marketing &amp; Sales</span><span class="d-block mb-5">Some kind of short descriptions can go here to better recommend tasks.</span>
                                    <div class="d-flex justify-content-between stats">
                                        <div><i class="fa fa-calendar-o"></i><span class="ml-2">1 days ago</span></div>
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
            </div>
        </div>
    )
}