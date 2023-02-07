import {Product} from "./types";
import {createEffect} from "effector";
import api from "../api";

export const fetchListFx = createEffect(async (): Promise<Product[]> => {
    return await api.productsApi.getList()
})