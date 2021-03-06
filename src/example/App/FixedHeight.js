import React from 'react';
import createReactClass from 'create-react-class';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import {Collapse} from '../..';


export const FixedHeight = createReactClass({
  getInitialState() {
    return {isOpened: false, height: 100, fixedHeight: 200};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened, height, fixedHeight} = this.state;

    return (
      <div {...this.props}>
        <div className="config">
          <label className="label">
            Opened:
            <input className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label className="label">
            Content height:
            <input className="input"
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: parseInt(value, 10)})} />
            {height}
          </label>

          <label className="label">
            Collapse height:
            <input className="input"
              type="range"
              value={fixedHeight} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({fixedHeight: parseInt(value, 10)})} />
            {fixedHeight}
          </label>
        </div>

        <Collapse isOpened={isOpened} fixedHeight={fixedHeight}>
          <div style={{height}} className="blob" />
        </Collapse>

      </div>
    );
  }
});
