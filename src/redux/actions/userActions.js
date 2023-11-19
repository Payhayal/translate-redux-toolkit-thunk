import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*

##createAsyncThunk

bizden 2 parametre ister:
a:aksiyonun type degeri
b:calisacak fonksiyon
>>>bu fonksiyon async islemler yapabilir (veritabani sorgulari)

*/
export const getUsers = createAsyncThunk("getUsers", async() => {
    // asenkron islemler burada yapilir
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    // stora aktarmak istedigimiz degerler return edilir.asagida aksiyonun payloadini tanimlamis oluyoruz.
    return res.data;
});