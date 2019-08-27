import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import DesktopView from '../DesktopView.js'
import MobileView from '../MobileView.js'

const Content = ({ items }) => {
  return (
    <ResponsiveLayout
      breakPoint={767}
      renderDesktop={() => (
        <DesktopView/>
      )}
      renderMobile={() => (
        <MobileView />
      )}
    />
  )
}

export default Content
