import React from 'react';
import EmployeeForm from './Employee-Form';  

export default class EmployeeDetails extends React.Component {     
    constructor(props){
        super(props);
        this.state = {id: 0, 
                      firstName:"",   
                      lastName:"",   
                      formErrors:{}}
    }

    async componentDidMount() {
        if (this.props.match.params.id){
            let emp = await this.getEmployee(this.props.match.params.id)
            console.log(emp);
            this.setState(emp);
        }   
    }

    getEmployee = (empId) => {
        return fetch(`/employees/${ empId}`).then(resp => resp.json()) ;    
      }

    saveEmployee = (employee) => {
        //employee = {...employee}; // spread to clone object
                                  //to avoid manipulating original employee.
    
        // Simulate server-side validation
        const minEmpNameLength = 3;
        if (employee.firstName.length < minEmpNameLength) {
          throw new Error(`First Name must be at least ${minEmpNameLength} characters.`);
        }
    
        if (employee.lastName.length < minEmpNameLength) {
          throw new Error(`Last Name must be at least ${minEmpNameLength} characters.`);
        }
         
        if (employee.id) { //if id, update employee
          return fetch("/employees/" + employee.id, 
            {
              method: "PUT", 
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(employee) // body data type must match "Content-Type" header
            }
          ); 
        } else { //if no id, create employee
          return fetch("/employees" , 
            {
              method: "POST", 
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(employee) // body data type must match "Content-Type" header
            }
          ).then(resp => resp.json()) ; 
        }
          
      }

      employeeFormIsValid = () => {
        let formErrors={};

        if (this.state.firstName.length <3 ) {
            formErrors.firstName=`First name needs three letters or more (${this.state.firstName})`; 
        }

        if (this.state.firstName.length >10 ) {
            formErrors.firstName=`First name needs less than 10 letters(${this.state.firstName})`; 
        }

        if (this.state.lastName.length <3 ) {
            formErrors.lastName="Last name needs three letters or more"; 
        }

        //global
        if (this.state.firstName.length + this.state.lastName.length  > 20 ) {
            formErrors.global=`First name and last name needs less than 20 letters(${this.state.firstName})`; 
        }
        this.setState({formErrors})  // shortway of writing formErrors = formErrors as they have same name
        return Object.keys(formErrors).length===0;
    }

    change = (e) => {
        //find the textbox with a particular name and set it as this value
        this.setState ({[e.target.name]: e.target.value}, 
                 this.employeeFormIsValid );      
    }

    delete =(e) => {
      this.deleteEmployee(this.state.id);
      this.props.history.push("/employees"); //we are now navigating to this page
     }
   
    deleteEmployee = (empId) =>{
        return fetch("/employees/" + this.state.id , 
        { method: "DELETE" } );  
    } 

      submit = async () => { 
        if (! this.employeeFormIsValid()) {  
            return;
        }

        await this.saveEmployee({
            id:this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
        this.props.history.push("/employees"); //navigate to new page of employees
    }
  

       //...state spread operator is  same as id=state.id name=state.name lastname=state.lastname
       render = () => 
       <>
            <h1>
                 {(this.props.match.params.id) ? 
                 `Employee ${this.state.firstName} ${this.state.lastName} ` : 
                 "Create Employee" 
                 }
            </h1>
            
            <EmployeeForm 
                {...this.state}
                onChange={this.change}
                onSubmit={this.submit}
                onDelete={this.delete}  
                />
       </>  
}  