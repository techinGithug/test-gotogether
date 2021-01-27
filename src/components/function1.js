import React, { useState, useEffect } from 'react';
import Datas from '../datas/exam-data.json';
import ProductModel from '../models/product';

const Function1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log(Datas)
        let list = [];
        for(let i in Datas) {
            if(Datas[i].is_editable_price) {
                // console.log(Datas[i].name)
                let sum = 0;
                for(let j in Datas[i].products) {
                    // console.log(Datas[i].products[j].weight)
                    sum += Datas[i].products[j].weight;
                }
                list.push({"name":`${Datas[i].name}`, "totalSubWeight":sum});
                setData([...list]);
            }
        }
        
    }, []);

    // console.log(data)

    return (
        <div className="container">
            <div className="mx-auto w-50 bg-light rounded p-3 mb-5">
                {
                    data.map((item) => (
                        <div className="">
                            <span className="fw-bold me-1">Name</span>
                            <span className="">{item.name}</span>
                            <span className=" fw-bold mx-2">TotalSubWeight</span>
                            <span>{item.totalSubWeight}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Function1;
