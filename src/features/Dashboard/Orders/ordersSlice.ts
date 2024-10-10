import { createSlice } from "@reduxjs/toolkit";
import { orders } from "@/data/orders";

type OrderProps = {
  orderId: string;
  customer: string;
  deliveryDate: string;
  price: number;
  deliveryStatus: string;
  payment: string;
};

type Orders = OrderProps[];

const initialState: Orders = orders;

const ordersSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {},
});
