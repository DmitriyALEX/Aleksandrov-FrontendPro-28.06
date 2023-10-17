import React from "react";
import './main.css'

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
          show: false,
            data: [
                {
                    id: 1,
                    icon: '🔼', 
                    value: 0,          
                },
                {
                    id: 2,
                    icon: '⬅️',
                    value: 0, 
                }, 
                {
                    id: 3,
                    icon: '↩️',
                    value: 0, 
                }, 
                {
                    id: 4,
                    icon: '➡️',
                    value: 0, 
                }, 
                {
                    id: 5,
                    icon: '🔼',
                    value: 0,
                },
            ]
        }
    }

    countElements = (id) => {
        let valuesData = [...this.state.data]
        const index = valuesData.findIndex((e) => e.id === id);
        valuesData[index].value += 1;
        this.setState({data: valuesData})
    }

    showResult = () => {
        let countWin = 0;
        let iconWin = '';
        for (let i = 0; i < this.state.data.length; i++) { 
            if (this.state.data[i].value > countWin) {
                countWin = this.state.data[i].value;
                iconWin = this.state.data[i].icon;
            }
        }
        return {countRes: countWin, iconRes: iconWin}
    }

    render() {
        return (
            <div>
               <span className="main">
                {
                    this.state.data.map(e => (
                    <p key={e.id}
                    onClick={() => this.countElements(e.id)}
                    >
                        <p className="icon">{e.icon}</p> 
                        <p>{e.value}</p>
                    </p>))   
                }
               </span>
               {this.state.show && (<p>{(this.showResult().countRes)} {this.showResult().iconRes}</p>)}
               <div>
                {
                    <button onClick={() => this.setState({show:true})}>show result</button>
                }
               </div>
            </div>
        )
    }
}