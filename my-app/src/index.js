import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Grid } from 'semantic-ui-react';
/* eslint-disable max-len */
class PieCharts extends React.Component {
  render() {
    return (
        <Menu borderless className="PieCharts">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class LineCharts extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-logo.png' size='medium' centered />
    )
  }
}

class BarGraphs extends React.Component {
  render() {
    return (
        <Grid centered container>
          <Dropdown item text="MALE"></Dropdown>
          <Dropdown item text="WOMEN"></Dropdown>
          <Dropdown item text="KIDS"></Dropdown>
          <Dropdown item text="BRAND"></Dropdown>
          <Dropdown item text="SALE" icon=""></Dropdown>
        </Grid>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <PieCharts/>
          <LineCharts/>
          <BarGraphs/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));