import * as React from 'react';

interface State {
    count: number;
}

// export class Counter extends React.Component<{}, State > {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     componentWillMount(): void {
//         console.log('render...');
//     }
//     componentDidMount(): void {
//         console.log('mount...');
//     }
//     componentDidUpdate(): void {
//         console.log('update..');
//     }
//     shouldComponentUpdate(nextProps, nextState): boolean {
//         console.log(nextProps);
//         console.log(nextState);
//         return nextState.count % 2 === 0;
//     }
//     handleClick() {
//         console.log('click');
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }
//     render() {
//         return(
//             <>
//                 <div>{this.state.count}</div>
//                 <button onClick={this.handleClick}>click me</button>
//             </>
//         )
//     }
// }

// hooks
import axios from 'axios';
const { useState, useEffect } = React;

const useFetch = (url: string) => {
    const [ data, setData ] = useState([]);

    const getData = async (): Promise<any> => {
        const data: any = await axios.get(url);
        setData(data.data);
    };
    useEffect(() => {
        getData()
    }, []);
    return data;
};

export const Counter = () => {
    const data: any = useFetch('https://randomuser.me/api/?results=6');
    console.log('>', data);
    return(
        <>
            <ul>
            {data.results && data.results.map((user, i) => (
                <li key={i}>{user.name.first}</li>
            ))}
            </ul>
        </>
    )
}