import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/constants";

export const getLanguages = createAsyncThunk("getLanguages",async() => {
    // request to the api
    const res = await axios.request(options);
    const data = res.data.data.languages;

    // diziyi donup herbir objesi icin value-label objesine sahip yeni obje value`ya code, label`a name` i esitliyoruz
    const refinedData = data.map((item) => ({
        value: item.code,
        label: item.name,
    }))
    
    // olusturdugumuz asenkron aksiyonun slice`a aktaracagi verisi(payload)
    return refinedData;
});


export const translateText = createAsyncThunk('translate', async (params) => {


const encodedParams = new URLSearchParams();
encodedParams.set('source_language', params.sourceLang.value);
encodedParams.set('target_language', params.targetLang.value);
encodedParams.set('text', params.text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '86a095aa69msh75e0a5b425957f3p1d114djsnd02264d0a303',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

const res = await axios.request(options);
// veriyi slice`a gonderme(payload ekler)
return res.data.data.translatedText;

})