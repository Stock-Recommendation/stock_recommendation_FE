import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCms = createAsyncThunk("getCms", async () => {
  const res = await axios.get(
    `https://cms.heroarena.app/api/hero-arena?populate=popups,popups.image,popup,popup.image,seo,seo.thumbnail,partners,partners.logo,investors,investors.logo,mediaPress,mediaPress.logo,exchangeInformation,exchangeInformation.logo,frame,frame.image`
  );
  console.log(res.data);
  return res.data;
});

export const getWPPost = createAsyncThunk("getWPPost", async () => {
  const res = await axios.get(
    `https://blog.heroarena.app/wp-json/wp/v2/posts?page=1`
  );
  console.log(res.data);
  return res.data;
});

const initialState = {
  cmsLoading: true,
  cmsData: null,
  wpLoading: true,
  wpData: null,
};

const cmsSlice = createSlice({
  name: "cmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCms.pending, (state) => {
      state.cmsLoading = true;
    });
    builder.addCase(getCms.fulfilled, (state, { payload }) => {
      state.cmsLoading = false;
      state.cmsData = payload;
    });
    builder.addCase(getCms.rejected, (state) => {
      state.cmsLoading = false;
    });
    builder.addCase(getWPPost.pending, (state) => {
      state.wpLoading = true;
    });
    builder.addCase(getWPPost.fulfilled, (state, { payload }) => {
      state.wpLoading = false;
      state.wpData = payload;
    });
    builder.addCase(getWPPost.rejected, (state) => {
      state.wpLoading = false;
    });
  },
});

export const {} = cmsSlice.actions;
export default cmsSlice.reducer;
