import React, {Component} from 'react';
import '../css/Two.css';
class Two extends Component {
    constructor(props) {
        super();
        localStorage.setItem("one", true);
        // this.state = {
        //     dataInfo: props.location.oldData.from
        // }
    }

    render() {
        return <div>
            <div className="title">
                这里显示的是上一个页面传过来的值
            </div>


            <div className='nev_content'>

            </div>
        </div>
    }
}

export default Two;
