import React, { memo } from "react";
import withLoading from "../../hoc/withLoading";

export const Counter = (props) => {

    console.log('Child Rendering Counter with count:', props.count);
    return (<>
        <p>Count: {props.count}</p>
        <button onClick={props.increment}>Increment</button></>)

}

//const MemoizedCounter = React.memo(Counter);
const withLoadingComponent = withLoading(Counter);
// eslint-disable-next-line react-refresh/only-export-components
export default memo(withLoadingComponent);

