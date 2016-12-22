import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

const RadiatorApp = React.createClass({
  getInitialState() {
    return {
      builds: []
    }
  },
  componentDidMount() {
    io().on('builds', this.onBuildsUpdated)
  },
  render() {
    return <ol>{this.renderBuilds(this.state.builds)}</ol>
  },
  renderBuilds(builds) {
    return builds.map(build => {
      return <li key={build.project.id}>
        {build.project.name}
        {build.builds.map(phase => {
          return <span key={phase.id} className={phase.status}>{phase.name}</span>
        })}
        {build.commit.map((commit, index) => {
          return <div key={index}>
            <span className="commit-title">{commit.title}</span>
            <span className="commit-author">{commit.authorName}</span>
            <span className="commit-timestamp">{commit.createdAt}</span>
          </div>
        })}
      </li>
    })
  },
  onBuildsUpdated(builds) {
    console.log(builds)
    this.setState({builds: builds})
  }
})

ReactDOM.render(<RadiatorApp />, document.getElementById('app'))