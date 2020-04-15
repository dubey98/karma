// param1 = str->the name of variable inn localStorage

import {
    pMap,
    tMap
} from ".";
import {
    projectFactory
} from "./projectobject";

// parma2 = map->the map to be processed
export const saveData = function () {
    localStorage.clear();
    let arr1 = [];
    for (let [k, v] of pMap.entries()) {
        arr1.push([k, JSON.stringify(v)]);
    }
    localStorage.setItem("pMap", JSON.stringify(arr1));
    let arr2 = [];
    for (let [k, v] of tMap.entries()) {
        arr2.push([k, JSON.stringify(v)]);
    }
    localStorage.setItem("pMap", JSON.stringify(arr2));

    pMap.clear();
    let array1 = JSON.parse(localStorage.getItem("pMap"));
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            let ID = array1[i][0];
            let p = Object.assign(projectFactory(), JSON.parse(array1[i][1]));
            pMap.set(ID, p);
        }
    }
    tMap.clear();
    let array2 = JSON.parse(localStorage.getItem("tMap"));
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array2[i].length; j++) {
            let ID = array2[i][0];
            let p = Object.assign(projectFactory(), JSON.parse(array2[i][1]));
            tMap.set(ID, p);
        }
    }
};