import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import DesktopView from '../DesktopView.js.js'
import MobileView from '../MobileView.js.js'

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
