import {useGate, useStore} from "effector-react";
import React, {useState} from "react";
import {$products, GateProducts} from "../../entities/products/model/state";
import Button from "../../shared/lib/ui/Button/Button";

function Catalog() {
    useGate(GateProducts)

    const [loading, setLoading] = useState(false)
    const products = useStore($products)

    return <div className="index">
        <Button loading={loading} ariaLabel="test" clickHandler={() => setLoading(!loading)}>Page</Button>
        {products.map(elem => {
            return <div key={elem.id}>
                <h1>{elem.title}</h1>
                <p>{elem.category}</p>
            </div>
        })}
    </div>
}

export default Catalog