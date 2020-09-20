import React ,{useState} from 'react';

const Contact =() => {

   const [data,setdata] = useState({
         Name     :"",
         Contact  :"",
         Email    :"",
         Textarea :""
   })
    const InputEvent =(event) => {
        const {name,value} =event.target;
        setdata((preval)=> {
            return{
                ...preval,
                [name]:value,
            };
        })
    }

    const formSubmit=(e) => {
        e.preventDefault();
        alert("thnakyou for submitting the form");

    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            
            <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            name="Name"
            value={data.Name}
            onChange={InputEvent}/>
               
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Contact</label>
            <input type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            name="Contact"
            value={data.Contact}
            onChange={InputEvent}/>
               
            </div>
            
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            name="Email"
            value={data.Email}
            onChange={InputEvent}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            name="Textarea"
            value={data.Textarea}
            onChange={InputEvent}
            ></textarea>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </>
    )
};
export default Contact;