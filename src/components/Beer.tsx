import * as React from 'react'

interface Props {
  name: string
}

export default class Beer extends React.Component<Props> {

  render () {
    return <li>{this.props.name}</li>
  }
}