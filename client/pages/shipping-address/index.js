import React, {useState} from 'react'
import Select from 'react-select'

function ShippingAddress() {

    const [addressFormData, setAddressFormData] = useState({
        phone: "",
        country: "United Arab Emirates",
        state: "",
        city: "",
        address: "",
    })

    const { phone, country, state, city, address } = addressFormData;

    const customStyles = {
        // Style the input field
        input: (provided, state) => ({
            ...provided,
            height: '2.8rem',
            borderRadius: "1rem"
        }),

    };

    const options = [
        { value: 'Sharjah', label: 'Sharjah' },
        { value: 'Dubai', label: 'Dubai' },
        { value: 'Abu Dhabi', label: 'Abu   Dhabi' },
        { value: 'Ajman', label: 'Ajman' },
        { value: 'Umm Al Quwain', label: 'Umm Al Quwain' },
        { value: 'Fujairah', label: 'Fujairah' },
        { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah' },
    ]

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setAddressFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const onSubmitHandler = () => {
        console.log(" on submit handler called")

    }


    return (
        <div className="container-fluid d-flex ">
            <div className="card address-card">
                <h5 className="card-header py-4">Add Shipping Address</h5>
                <div className="card-body mx-4 my-5">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <input type="text" onChange={onChangeHandler} name="phone" value={phone} className="form-control input-field" id="exampleInputPhone" aria-describedby="emailHelp" placeholder="Enter your active phone number" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control input-field" onChange={onChangeHandler} name="country" value={country} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your country" />
                        </div>
                        <div className="form-group" >
                            {/* <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your state" /> */}
                            <Select
                                styles={customStyles}
                                name="state"
                                value={state}
                                onChange={(e) => setAddressFormData((prev) => ({
                                    ...prev,
                                    state: e
                                }))}
                                placeholder="Enter your state"
                                options={options}
                            />

                        </div>
                        <div className="form-group">
                            <input type="text" onChange={onChangeHandler} name="city" value={city} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your city" />
                        </div>
                        <div className="form-group">
                            {/* <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your postal code" /> */}
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={onChangeHandler} name="address" value={address} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your complete address" />
                        </div>

                        {/* <div className="form-group">
                            <input type="button" className="form-control input-field  btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" value="Add Shipping Address" />
                        </div> */}
                    </form>
                </div>
            </div>

            <div className="card login-card ml-5">
                <h5 className="card-header py-4">Payment Details</h5>
                <div className="card-body mx-4 my-5">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                            Online Payment
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" for="exampleRadios2">
                            Cash On Delivery
                        </label>
                    </div>

                    <div className="my-5">
                        <h3>Online Transiction</h3>
                        <h5>Please transfer the total amount to the following bank account.</h5>
                        <p>
                            ACCOUNT NAME : Zibar Khan <br />
                            ACCOUNT NUMBER : 00112233445566 <br />
                            IBAN : AE94998877665544 <br />
                        </p>
                        <p className="font-weight-bold">Your order will not ship until we receive payment.</p>
                    </div>

                    <div className="form-group">
                        <input type="button" className="form-control input-field  btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" value="Confirm Order" onClick={onSubmitHandler} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ShippingAddress
