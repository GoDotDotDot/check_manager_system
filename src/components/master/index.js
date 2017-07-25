import React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
const { Header } = Layout
class Master extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {children} = this.props
    return (
      <div >
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
          <link rel='stylesheet' href='/static/styles/common/index.css' />
        </Head>
        <header className='header'>
          <div className='logo' />
          <span className='title'>山水庄园皇家⑦号店账单系统</span>
        </header>
        {children}
      </div>
    )
  }
}
export default Master
