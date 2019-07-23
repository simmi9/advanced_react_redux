import React from 'react';  
import EmpCtx from './employee-context';
import EmployeeTable from './Employee-Table'; 

export default class Employees extends React.Component {
    state = { employees:[], 
              loading:false };
  
    getData = async () => {
        this.setState({loading:true});
        //using async-await!
       try{
        const res = await fetch("/employees");
        let data = await res.json();   
        this.setState({employees: data, loading: false});
        }
        catch(err ){ 
            console.log(err)  
        };  
       /*promises syntax
      return  fetch("/employees")
        .then(resp => resp.json())
        .then(data => this.setState({employees: data, loading: false}))  
        .catch(err=> console.log(err));    
     //   */
    } 
    
    componentDidMount(){
        this.getData(); 
    }

    deleteEmployee= async (id) =>{
        await fetch("/employees/" + id , 
                    { method: "DELETE" }
                    ); 
          this.getData(); 
       }

    render(){
        return(
                <>
                <EmpCtx.Provider value={{
                                          employees: this.state.employees,
                                          onDelete: this.deleteEmployee
                                         }} >
                    <h1> List of Employees</h1>
                    {this.state.loading ?  <p> Loading.. </p> :
                    <EmployeeTable />
                }
                </EmpCtx.Provider>
                </>
        );
    }
}