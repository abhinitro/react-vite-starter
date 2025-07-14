import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        //console.log("props",props)
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            errors: {}
        };
    }

    deleteMyDiv = () => {

        console.log("deleteMyDiv called",typeof this.props.deleteItem);

        if(typeof this.props.deleteItem === 'function') {
             this.props.deleteItem(this.props.index);
            return;

        }

       

    }


    render() {

        return (<div>Form {this.props.index}.  <button onClick={() => this.deleteMyDiv()}>Delete</button></div>)

    }

}


export default ProfileForm;