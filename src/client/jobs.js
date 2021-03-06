import {Job} from './job'
import PropTypes from 'prop-types'
import React from 'react'

export class Jobs extends React.PureComponent {
  render() {
    const {jobs} = this.props

    return <ol className="jobs">
      {jobs.map((job, index) => {
        return <Job job={job} key={index}/>
      })}
    </ol>
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array
}
