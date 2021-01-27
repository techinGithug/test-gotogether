import React, { useState, useEffect } from 'react'

const Home = () => {
    const [fname, setFname] = useState('');
    const [fnameErr, setFnameErr] = useState(false);
    const [lname, setLname] = useState('');
    const [lnameErr, setLnameErr] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [verifyPass, setVerifyPass] = useState('');
    const [verifyPassErr, setVerifyPassErr] = useState(false);
    const [gender, setGender] = useState('Please select a gender');
    const [genderErr, setGenderErr] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if(!isLoaded){
            setIsLoaded(true);
        }
    });

    const sexs = [
        {"id":"1", "value":"Please select a gender"},
        {"id":"2", "value":"Male"},
        {"id":"3", "value":"Female"}
    ];

    useEffect(() => {
        if(isLoaded) {
            if(fnameErr && lnameErr && emailErr && passwordErr && verifyPassErr && genderErr) {
                setIsSuccess(false)
            } else {
                setIsSuccess(true)
            }
        }
    }, [fnameErr,lnameErr,emailErr,passwordErr,verifyPassErr,genderErr])

    const handleSubmited = (e) => {
        e.preventDefault();

        if(fname === '') {
            setFnameErr(true);
        } else {
            setFnameErr(false);
        }
        if(lname === '') {
            setLnameErr(true)
        } else {
            setLnameErr(false)
        }

        const expression = /\S+@\S+/;
        let validEmail = expression.test(String(email).toLowerCase());
        if(!validEmail) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        if(password === '') {
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
        if(verifyPass === '') {
            setVerifyPassErr(true)
        } else {
            setVerifyPassErr(false)
        }
        if(verifyPass !== password) {
            setVerifyPassErr(true)
        } 
        if(gender === sexs[0].value) {
            setGenderErr(true)
        } else {
            setGenderErr(false)
        }

        if(fnameErr && lnameErr && emailErr && passwordErr && verifyPassErr && genderErr) {
            return false
        } else {
            
        }

    };

    const renderResult = () => {
        // fnameErr && lnameErr && emailErr && passwordErr && verifyPassErr && genderErr
        if(!isSuccess) {
            return (<div></div>);
        } else {
            return (
                <div className="mt-5 w-25 mx-auto">
                    <div className="text-center fw-bold fs-5">Results</div>
                    <div className="mt-2">
                        <span className="text-capitalize me-3" style={{ fontSize: 14 }}>firstname</span>
                        <span>{fname}</span>
                    </div>
                    <div className="">
                        <span className="text-capitalize me-3" style={{ fontSize: 14 }}>lastname</span>
                        <span>{lname}</span>
                    </div>
                    <div className="">
                        <span className="text-capitalize me-3" style={{ fontSize: 14 }}>email</span>
                        <span>{email}</span>
                    </div>
                    <div className="">
                        <span className="text-capitalize me-3" style={{ fontSize: 14 }}>password</span>
                        <span>{password}</span>
                    </div>
                    <div className="">
                        <span className="text-capitalize me-3" style={{ fontSize: 14 }}>gender</span>
                        <span>{gender}</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container" style={{ marginBottom: 50}}>
            <form className="w-25 mx-auto" onSubmit={(e) => handleSubmited(e)}>
                <div className="form-group mt-3">
                    <label className="form-label">Firstname</label>
                    <input 
                        type="text" 
                        className={fnameErr ? "form-control is-invalid" : "form-control"} 
                        value={fname} onChange={(e) => setFname(e.target.value)} 
                        placeholder="Firstname" 
                    />
                </div>
                <div className={fnameErr ? "text-danger": "" } style={{ fontSize: 12 }}>{fnameErr ? `Please enter username` : ``}</div>

                <div className="form-group mt-3">
                    <label className="form-label">Lastname</label>
                    <input 
                        type="text" 
                        className={lnameErr ? "form-control is-invalid": "form-control"} 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)} 
                        placeholder="Lastname"  />
                </div>
                <div className={lnameErr ? "text-danger": "" } style={{ fontSize: 12 }}>{lnameErr ? `Please enter lastname` : ``}</div>

                <div className="form-group mt-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className={emailErr ? "form-control is-invalid" : "form-control"} 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email"      
                    />
                </div>
                <div className={emailErr ? "text-danger": "" } style={{ fontSize: 12 }}>{emailErr ? `Please enter email ` : ``}</div>
                
                <div className="form-group mt-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className={passwordErr ? "form-control is-invalid" : "form-control"} 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                    />
                </div>
                <div className={passwordErr ? "text-danger": "" } style={{ fontSize: 12 }}>{emailErr ? `Please enter password` : ``}</div>

                <div className="form-group mt-3">
                    <label className="form-label">Verify Password</label>
                    <input 
                        type="password" 
                        className={verifyPassErr ? "form-control is-invalid" : "form-control"} 
                        value={verifyPass} onChange={(e) => setVerifyPass(e.target.value)} 
                        placeholder="Verify password"
                    />
                </div>
                <div className={verifyPassErr ? "text-danger": "" } style={{ fontSize: 12 }}>{verifyPassErr ? `Verify password not match` : ``}</div>
                
                <div className="form-group mt-3">
                    <label>Gender</label>
                    <select className={genderErr ? "form-control is-invalid" : "form-select"}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                    {
                        sexs.map(item => 
                            <option key={item.id} value={item.value}>{item.value}</option>
                        )
                    }
                    </select>
                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-sm btn-success">Submit</button>
                </div>
            </form>
            <div className="mt-5">
                {renderResult()}
            </div>
            
        </div>
    )
}

export default Home;
