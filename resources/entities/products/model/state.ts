import {Product} from "./types";
import {createGate} from "effector-react";
import {createStore, sample} from "effector";
import {fetchListFx} from "./effects";

export const GateProducts = createGate()

sample({
    // @ts-ignore
    clock: GateProducts.open,
    target: [fetchListFx]
})

export const $products = createStore<Product[]>([])
    .on(fetchListFx.doneData, (_, data: Product[]) => data)