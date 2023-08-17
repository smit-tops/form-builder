import React from 'react'
import iconIMage from '../../../../assets/images/iconImage.svg'
import logo from '../../../../assets/images/logoIcon.svg'

const FormHeader = () => {
  return (
    <div className="header pb-3 border-bottom mb-5">
      <div className="d-flex align-items-center justify-content-center">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <img className="me-2" height={41} width={42} src={`${iconIMage}`} alt="logo" />
          <img src={`${logo}`} alt="logo" className={`d-none d-md-inline-block`} height={29} width={108} />
        </a>
      </div>
    </div>
  )
}

export default FormHeader
