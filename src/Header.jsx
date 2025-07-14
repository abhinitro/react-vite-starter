import React from "react";
const Header = (props) => {

    const { options } = props;
    return (
        <div>
            {
                options.map(item=>{
                    return <div key={item.value}>{item.label}  </div>
                                            })
            }
           
        </div>

    );
}


export default Header;