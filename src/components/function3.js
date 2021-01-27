import React, { useState, useEffect } from 'react'

const Function3 = () => {
    const [arr1, setArr1] = useState([1,2,3,14,4,5,5,5]);
    const [arr2] = useState([3,45,200,105]);
    const [arr3] = useState([6]);
    const [arr4] = useState([]);
    const [arr5] = useState([2,2]);
    const [rs1, setRs1] = useState('');
    const [rs2, setRs2] = useState('');
    const [rs3, setRs3] = useState('');
    const [rs4, setRs4] = useState('');

    // useEffect(() => {
    //     const arr = [3,56,90,12,87,87,87,95]
    //     arr1.sort((a,b) => {
    //         return a-b
    //     });
    //     console.log(arr1);
    //     console.log(arr1[arr1.length-2])
    // }, []);

    const result1 = () => {
        arr1.sort((a,b) => {
            return a-b
        });
        return (
            <span>{arr1[arr1.length-2]}</span>
        )
    };

    const result2 = () => {
        arr2.sort((a,b) => {
            return a-b
        });
        // console.log(arr2)
        return (
            <span>{arr2[arr2.length-2]}</span>
        )
    };

    const result3 = () => {
        if(arr3.length === 1) {
            return (
                <span>{arr3[0]}</span>
            )
        } else {
            arr3.sort((a,b) => {
                return a-b
            });
            // console.log(arr2)
            return (
                <span>{arr3[arr3.length-2]}</span>
            )
        }
    };

    const result4 = () => {
        if(!arr4.length) {
            return (
                <span>null</span>
            )
        }
    };

    const result5 = () => {
        arr5.sort((a,b) => {
            return a-b
        });
        // console.log(arr2)
        return (
            <span>{arr5[arr5.length-2]}</span>
        )
    };

    return (
        <div className="container">
            <div className="my-3"></div>
            <div className="mx-auto w-50">
                <div className="">
                    <span className="me-3">Array1 : [1,2,3,14,4,5,5,5]</span>
                    <span>Second max : {result1()}</span>
                </div>
                <div className="">
                    <span className="me-3">Array2 : [3,45,200,105]</span>
                    <span>Second max : {result2()}</span>
                </div>
                <div className="">
                    <span className="me-3">Array3 : [6]</span>
                    <span>Result : {result3()}</span>
                </div>
                <div className="">
                    <span className="me-3">Array4 : []</span>
                    <span>Result : {result4()}</span>
                </div>
                <div className="">
                    <span className="me-3">Array5 : [2,2]</span>
                    <span>Result : {result5()}</span>
                </div>
            </div>
        </div>
    )
}

export default Function3;
