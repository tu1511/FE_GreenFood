import { memo } from "react";


const HomePage = () => {
    return (
        <>
            <h1>Header</h1>
            <h1>Body</h1>
            <h1>Footer</h1>
        </>
    );
};

export default memo(HomePage);