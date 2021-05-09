import React, { FC } from "react";

type Props = {
    data: string
}

const Home:FC<Props> = (props) => {
    let foo: string = "React";
    const bar: string = "TypeScript";
    const {data} = props;

    return (
        <h1>
            Hello {foo} + {bar} + {data}
        </h1>
    );
};

export default Home;