import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card";
import {Alert} from 'react-bootstrap'

const electron = window.electron;
const { BrowserWindow } = electron.remote;

class Tools extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="常用工具集成"
                ctAllIcons
                content={
                  <Row>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-network' />
                        <div className="demo-controls">
                          <button className="demo-button" onClick={()=>{
                              let win = new BrowserWindow({ width: 400, height: 320 })
                              win.on('close', () => { win = null })
                              win.loadFile('./src/templates/jsuml2/index.html')
                              win.show()
                            }}>uml工具</button>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='编辑器 yn' />
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='pe-7s-eyedropper' />
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='pe-7s-eyedropper' />
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='pe-7s-eyedropper' />
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='pe-7s-eyedropper' />
                      </div>
                    </Col>
                    <Col
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className="font-icon-list"
                    >
                      <div className="font-icon-detail">
                        <i className='pe-7s-eyedropper' />
                        <input type="text" defaultValue='pe-7s-eyedropper' />
                      </div>
                    </Col>
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Tools;
