
 import * as actions from './actionTypes';

 //מקבל אוביקט 
 export const loginuser = (obj) => ({
  type: actions.LOGIN_USER,
  obj
})

export const sighnupuser = (obj) => (
  {
    type: actions.SIGHN_UP_USER,
    obj

  }
)
// export const favoritecity = (obj) => (
//   {
//     type: actions.FAVORITECIRY,
//     obj
//   }
// )