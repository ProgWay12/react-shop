import {Product} from "../model/types";
import {makeRequest} from "../../../shared/lib/request";

const getList = () =>
    makeRequest<ProductsApi.GET.Response>(
        {
            url: "https://fakestoreapi.com/products"
        }
    )

const api = {
    getList
}

export default api

export namespace ProductsApi {
    export namespace GET {
        export type Params = {}
        export type Response = Product[]
    }
}