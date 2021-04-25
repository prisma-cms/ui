/* eslint-disable no-console */
import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import App from '../../../src/form/TextField'

const MainPage: React.FC = (props) => {
  const ref = useCallback((el: HTMLInputElement) => {
    console.log('ref el', el)
  }, [])

  const [value, valueSetter] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    valueSetter(event.target.value)
  }, [])

  return (
    <>
      <Head>
        <title>Component boilerplate</title>
        <meta
          name="description"
          content="Component boilerplate for prisma-cms"
        />
      </Head>
      <App
        className={undefined}
        {...props}
        ref={ref}
        title="TextField"
        helperText="Demonstrate input TextField"
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default MainPage
