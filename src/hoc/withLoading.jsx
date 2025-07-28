import React from "react";

// eslint-disable-next-line no-unused-vars
const withLoading = (WrappedComponent) => {
   return function WithLoadingComponent(props) {
        const isLoading = props.isLoading; // Replace with actual loading logic
    
        if (isLoading) {
        return <div>Loading...</div>;
        }
    
        return <WrappedComponent {...props} />;
    };
};

export default withLoading;