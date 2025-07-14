import React from 'react';
import ProfileForm from './ProfileForm';


class FormBuilder extends React.Component {

    constructor(props) {
        console.log("FormBuilder component is being constructed");
        super(props);
        this.state = { list: [] };
    }




    componentDidMount() {
        console.log("FormBuilder component did mount");
        this.setState({ list: [0] });
    }

    btnClick=()=>{
       let length = this.state.list.length;   
       let list = [...this.state.list, length + 1];
        this.setState({ list: list });
    }


    deleteItem = (index) => {
        console.log("deleteItem called with index:", index);
        const newList = this.state.list.filter((value,ind) => ind !== index);
        this.setState({ list: newList });                   
    }


    render() {

        console.log('FormBuilder component is rendering');
        return (
            <div>
                <button onClick={()=>{
                   return this.btnClick()   

                }}>Add More</button>

                {
                    this.state.list.map((item, index) => (
                        <div key={index}>
                           <ProfileForm index={index} deleteItem={this.deleteItem} />
                    </div>))
                }


            </div>
        );
    }
}


export default FormBuilder;


