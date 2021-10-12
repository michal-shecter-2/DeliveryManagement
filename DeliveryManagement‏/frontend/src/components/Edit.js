// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Edit.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import swal from 'sweetalert';
// import 'bootstrap/dist/css/bootstrap.min.css'
// //import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// export default function Edit() {
//     const [user, setUser] = useState({
//         _id: "6158c552d2d426b1e7672b93",
//         firstname: "ayla",
//         lastname: "ryneman",
//         password: "000111333",
//         email: "ar@gmail.com",
//         phone: "026524187",
//         mobilephone: "0533105981",
//         citycode: "6154653b288ae9f3359e7a60",
//         street: "bear yitzhak"
//     })
//     const [cities, setCities] = useState([]);
//     const [firstname, setFirstname] = useState({ firstname: "" })
//     const [lastname, setLastname] = useState({ lastname: "" })
//     const [password, setPassword] = useState({ password: "" })
//     const [email, setEmail] = useState({ email: "" })
//     const [phone, setPhone] = useState({ phone: "" })
//     const [mobilephone, setMobilephone] = useState({ mobilephone: "" })
//     const [citycode, setCitycode] = useState({ citycode: "" })
//     const [street, setStreet] = useState({ street: "" })
//     const [options, setOptions] = useState([])
//     const [userads, setUserads] = useState([])
//     async function getAllCities() {
//         let arr = [];
//         await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
//             "country": "israel"
//         })
//             .then(res => res.data.data.map(i => arr.push(i)));

//         return arr;
//     }
//     async function saveUser() {
//         const res = await axios.put('http://localhost:4000/users/put/' + user._id, {
//             firstname: firstname,
//             lastname: lastname,
//             password: password,
//             email: email,
//             phone: phone,
//             mobilephone: mobilephone,
//             citycode: citycode,
//             street: street
//         })
//         if (res.status == 200) {
//             setUser(res.data);
//             swal("wellcom " + res.data.firstname, "good luck in your job", "success")
//         }
//         else

//             swal({ title: "Opssssss try again", icon: "error" })
//     };
//     async function getByUsercode() {
//         let arr = []
//         await axios.post('http://localhost:4000/ads/find', {
//             usercode: user._id
//         })

//             .then(res => res != null ? res.data.map(i => arr.push(i)) : '');
//         return arr;
//     };
//     function convertDay(day) {
//         var day = new Date(day);
//         var dayName = day.toLocaleDateString();
//         return dayName;
//     };
//     useEffect(async () => {
//         let arr = await getByUsercode();
//         arr.map(i => userads.push(i))

//         let data = await getAllCities();
//         data.map(i => cities.push(i))
//         cities.map((i, item) => options.push({ key: item, text: i }))
//     }, []);

//     return (
//         <div>
//             <div class="container rounded bg-white mt-5">
//                 <div class="row">
//                     <div class="col-md-4 border-right">
//                         <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" /><span class="font-weight-bold">{user.firstname}</span><span class="text-black-50">{user.email}</span><span>{user.citycode}</span></div>
//                     </div>
//                     <div class="col-md-8">
//                         <div class="p-3 py-5">
//                             <div class="d-flex justify-content-between align-items-center mb-3">
//                                 <h6 class="text-right">Edit Profile</h6>
//                             </div>
//                             <div class="row mt-2">
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" onChange={e => { setFirstname(e.target.value) }} /></div>
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="Doe" onChange={e => { setLastname(e.target.value) }} /></div>
//                             </div>
//                             <div class="row mt-3">
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" onChange={e => { setEmail(e.target.value) }} /></div>
//                                 <div class="col-md-6"><input id="inputPassword" type="password" placeholder="Password" class="form-control" onChange={e => { setPassword(e.target.value) }} /></div>
//                             </div>
//                             <div class="row mt-3">
//                                 <Autocomplete
//                                     className="priority"
//                                     id="Food"
//                                     options={options}
//                                     getOptionLabel={(option) => option.text}
//                                     style={{ width: 300 }}
//                                     renderInput={(params) => <TextField {...params} label=" עיר  בחר" variant="outlined" />}
//                                     onChange={(e, value) => { setCitycode(value.text) }}
//                                 />
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="Street" onChange={e => { setStreet(e.target.value) }} /></div>
//                                 {/* <div class="col-md-6"><input type="text" class="form-control" placeholder="Country"/></div> */}
//                             </div>
//                             <div class="row mt-3">
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="Mobile phone" onChange={e => { setMobilephone(e.target.value) }} /></div>
//                                 <div class="col-md-6"><input type="text" class="form-control" placeholder="Phone number" onChange={e => { setPhone(e.target.value) }} /></div>
//                             </div>
//                             <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button" onClick={e => { saveUser() }}>Save Profile</button></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="row mt-1">
//                 {userads.map(item =>
//                     <div class="col-md-4">
//                         <div class="p-card bg-white p-2 rounded px-3">
//                             <div class="d-flex align-items-center credits"><img src="https://i.imgur.com/hlz6G90.png" width="16px" /><span class="text-black-50 ml-2">1 credits</span></div>
//                             <h5 class="mt-2">Delivery from {item.origincity} to {item.destinationcity}</h5><span class="badge badge-danger py-1 mb-2">Marketing &amp; Sales</span><span class="d-block mb-5">cost:{item.cost}$</span><span class="d-block mb-5">delivery size:{item.size}</span>
//                             <div class="d-flex justify-content-between stats">
//                                 <div><i class="fa fa-calendar-o"></i><span class="ml-2">until: {convertDay(item.finaldate)}</span></div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>

//     );
// }





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Edit.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import store from './Store';
import { loginuser,sighnupuser } from './actions';
export default function Edit() {
    // const [user, setUser] = useState({
    //     _id: "6158c552d2d426b1e7672b93",
    //     firstname: "ayla",
    //     lastname: "ryneman",
    //     password: "000111333",
    //     email: "ar@gmail.com",
    //     phone: "026524187",
    //     mobilephone: "0533105981",
    //     citycode: "6154653b288ae9f3359e7a60",
    //     street: "bear yitzhak"
    // })
      // const [user, setUser] = useState({
    //     _id: "6158c552d2d426b1e7672b93",
    //     firstname: "ayla",
    //     lastname: "ryneman",
    //     password: "000111333",
    //     email: "ar@gmail.com",
    //     phone: "026524187",
    //     mobilephone: "0533105981",
    //     citycode: "6154653b288ae9f3359e7a60",
    //     street: "bear yitzhak"
    // })
     const [user, setUser] = useState( store.getState().user )
    const [cities, setCities] = useState([]);
    const [firstname, setFirstname] = useState({ firstname: "" })
    const [lastname, setLastname] = useState({ lastname: "" })
    const [password, setPassword] = useState({ password: "" })
    const [email, setEmail] = useState({ email: "" })
    const [phone, setPhone] = useState({ phone: "" })
    const [mobilephone, setMobilephone] = useState({ mobilephone: "" })
    const [citycode, setCitycode] = useState({ citycode: "" })
    const [street, setStreet] = useState({ street: "" })
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
    async function saveUser() {
        const res = await axios.put('http://localhost:4000/users/put/' + user._id, {
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
    async function getByUsercode() {
        let arr = []
        await axios.post('http://localhost:4000/ads/find', {
            usercode: user._id
        })
            .then(res => res != null ? res.data.map(i => arr.push(i)) : '');
        return arr;
    };
    function convertDay(day) {
        var day = new Date(day);
        var dayName = day.toLocaleDateString();
        return dayName;
    };
    useEffect(async () => {
        let arr = await getByUsercode();
        arr.map(i => userads.push(i))
        let data = await getAllCities();
        data.map(i => cities.push(i))
        cities.map((i, item) => options.push({ key: item, text: i }))
    }, []);
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
                                <h6 class="text-right">Edit Profile</h6>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" defaultValue={user.firstname} onChange={e => { setFirstname(e.target.value) }} /></div>
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Doe"  defaultValue={user.lastname} onChange={e => { setLastname(e.target.value) }} /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Email"  defaultValue={user.email} onChange={e => { setEmail(e.target.value) }} /></div>
                                <div class="col-md-6"><input id="inputPassword" type="password" placeholder="Password"  defaultValue={user.password} class="form-control" onChange={e => { setPassword(e.target.value) }} /></div>
                            </div>
                            <div class="row mt-3">
                                <Autocomplete
                                    className="priority"
                                    id="Food"
                                    options={options}
                                    getOptionLabel={(option) => option.text}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label=" עיר  בחר" variant="outlined" />}
                                    onChange={(e, value) => { setCitycode(value.text) }}
                                />
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Street"  defaultValue={user.street} onChange={e => { setStreet(e.target.value) }} /></div>
                                {/* <div class="col-md-6"><input type="text" class="form-control" placeholder="Country"/></div> */}
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Mobile phone"  defaultValue={user.mobilephone} onChange={e => { setMobilephone(e.target.value) }} /></div>
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Phone number"  defaultValue={user.phone} onChange={e => { setPhone(e.target.value) }} /></div>
                            </div>
                            <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button" onClick={e => { saveUser() }}>Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-1">
                {userads.map(item =>
                    <div class="col-md-4">
                        <div class="p-card bg-white p-2 rounded px-3">
                            <div class="d-flex align-items-center credits"><img src="https://i.imgur.com/hlz6G90.png" width="16px" /><span class="text-black-50 ml-2">1 credits</span></div>
                            <h5 class="mt-2">Delivery from {item.origincity} to {item.destinationcity}</h5><span class="badge badge-danger py-1 mb-2">Marketing &amp; Sales</span><span class="d-block mb-5">cost:{item.cost}$</span><span class="d-block mb-5">delivery size:{item.size}</span>
                            <div class="d-flex justify-content-between stats">
                                <div><i class="fa fa-calendar-o"></i><span class="ml-2">until: {convertDay(item.finaldate)}</span></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}