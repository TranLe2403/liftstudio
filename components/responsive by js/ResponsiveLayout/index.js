import { useWindowDimensions } from '../WindowDimensionsProvider'

export default function ResponsiveLayout ( {breakPoint, renderDesktop, renderMobile} ) {
    const { width } = useWindowDimensions()
    return width > breakPoint ? renderDesktop() : renderMobile()
  }
