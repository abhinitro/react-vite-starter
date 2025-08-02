import React from "react";

// eslint-disable-next-line no-unused-vars
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent(props) {
        const isLoading = props.isLoading; // Replace with actual loading logic
        const color = sessionStorage.getItem("color");

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} color={color}/>;
    };
};

export default withLoading;