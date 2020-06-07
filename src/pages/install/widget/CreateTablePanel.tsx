import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import './CreateTablePanel.less';
import {Tabs} from 'antd';
import Install from "../../../common/model/install/Install";
import TankComponent from "../../../common/component/TankComponent";

const {TabPane} = Tabs;

interface IProps {

  install: Install
}

interface IState {

}

export default class CreateTablePanel extends TankComponent<IProps, IState> {


  constructor(props: IProps) {
    super(props);

    this.state = {};
  }


  componentDidMount() {
    let that = this;

    that.updateUI();
  }


  render() {

    let that = this;

    return (
      <div className="widget-create-panel">
        创建表
      </div>
    );
  }
}


