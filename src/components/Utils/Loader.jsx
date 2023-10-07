import React from 'react'


import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />

function Loader() {
  return (
    <>
    <MyLoader/>
    <MyFacebookLoader/>
    </>
  )
}

export default Loader