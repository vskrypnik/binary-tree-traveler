import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.graphContainerRef = React.createRef();

    this.state = {
      graphContainerWidth: null,
      graphContainerHeight: null,
    };
  }

  componentDidMount () {
    const { current: graphContainer } = this.graphContainerRef;

    this.setState({
      graphContainerWidth: graphContainer.clientWidth,
      graphContainerHeight: graphContainer.clientHeight,
    })
  }

  render() {
    return (
      <div className="row mx-2 h-100">
        <div ref={this.graphContainerRef} className="h-100 col-8">
          {this.state.graphContainerWidth && this.state.graphContainerHeight &&
            <Tree
              data={this.props.tree.d3}
              width={this.state.graphContainerWidth}
              height={this.state.graphContainerHeight}
              textProps={{ transform: 'translate(-10, 15)' }}
            />
          }
        </div>

        <div className="col-4">
          <div>
            <h4>Центрированный порядок (in-order): </h4>
            {this.props.tree.inOrder}
          </div>

          <div>
            <h4>Прямой порядок (pre-order): </h4>
            {this.props.tree.preOrder}
          </div>

          <div>
            <h4>Обратный порядок (post-order): </h4>
            {this.props.tree.postOrder}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tree }) => ({ tree });

export default connect(mapStateToProps)(App);
