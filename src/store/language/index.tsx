import { createSlice } from "@reduxjs/toolkit";
import BR_FLAG from "../../assets/imgs/BR_FLAG.webp";
import EUA_FLAG from "../../assets/imgs/EUA_FLAG.webp";

declare type Language = {
  name: String;
  flag: any;
  key: "EN" | "PTBR";
};

declare type Languages = {
  data: {
    language: "EN" | "PTBR";
    languages: Language[];
  };
};

const initialState: Languages = {
  data: {
    language: "PTBR",
    languages: [
      {
        name: "Portugues",
        flag: BR_FLAG,
        key: "PTBR",
      },
      {
        name: "English",
        flag: EUA_FLAG,
        key: "EN",
      },
    ],
  },
};

const LanguageReducer = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.data.language = action.payload;
    },
  },
});

export const { changeLanguage } = LanguageReducer.actions;
export default LanguageReducer.reducer;
