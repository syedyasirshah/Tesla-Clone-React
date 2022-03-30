import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cars: [
		"model X",
		"model Y",
		"model S",
		"model 3",
		"Solar Panels",
		"Solar roofs",
	],
};

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
