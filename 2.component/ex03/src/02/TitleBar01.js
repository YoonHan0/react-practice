import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(props) {
        super(props);

        console.log(props);     // 부모 컴포넌트에서 넘겨주는 props
        // this.no vs this.state.no
        this.no = 0;
        /* state라는 객체가 존재한다. state란 부모 컴포넌트에서 상속 받은? */
        this.state = {
            no: 0
        };
    }

    /** 클래스 블록 안에서는 이렇게 함수 선언이 가능 */
    onClickHandler() {      
        this.no++;
        console.log(`TitleBar01 Clicked: ${this.no}`);

        this.setState({
            no: this.state.no + 1
        });
        console.log(`TitleBar01 Clicked: ${this.state.no}`);
    }
    render() {
        return (
            <div>
                <h1
                    onClick={this.onClickHandler.bind(this)}
                    style={{
                        cursor: 'pointer'
                    }}>
                        Function Handler - Class형
                        <br/>
                        {
                            // this.no vs this.state.no
                            `${this.no} vs ${this.state.no}`
                        }
                </h1>
            </div>
        );
    }
}