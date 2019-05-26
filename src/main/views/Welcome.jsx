import React, { Component } from "react";
import { Alert, Button } from 'react-bootstrap'

const electron = window.electron;
const BrowserWindow = electron.remote.BrowserWindow;


class Welcome extends Component {
  openDocument = url => {
    let win = new BrowserWindow({ width: 400, height: 320 })
    win.on('close', () => { win = null })
    win.loadURL(url)
    win.show()
  }
  render() {
    return (
      <div>
        <h2>相关文档</h2>
        <div className="typo-line">
          <p className="text-primary">
            <h3>react-bootstrap(1.0还在beta版,所以使用旧版本) </h3> <Button bsSize="large" onClick={this.openDocument.bind(this, 'http://react.tgwoo.com/components.html#buttons')} >在线</Button>
            <Button bsSize='large'>本地</Button> <b> http://react.tgwoo.com/components.html#buttons </b>
                      </p>
          <p className="text-info">
            <h3>react  </h3> <Button bsSize="large" onClick={this.openDocument.bind(this, 'https://react.docschina.org/docs/react-api.html')} >在线</Button>
            <Button bsSize='large'>本地</Button> <b> https://react.docschina.org/docs/react-api.html </b>
                      </p>
          <p className="text-success">
            <h3>light-bootstrap-dashboard-react 主题  </h3> <Button bsSize="large" onClick={this.openDocument.bind(this, 'https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/?ref=lbdr-readme')} >在线</Button>
            <Button bsSize='large'>本地</Button> <b> https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/?ref=lbdr-readme </b>
                      </p>
          <p className="text-warning">
            <h3>electron  </h3> <Button bsSize="large" onClick={this.openDocument.bind(this, 'https://electronjs.org/docs')} >在线</Button>
            <Button bsSize='large'>本地</Button> <b> https://electronjs.org/docs </b>
                      </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
