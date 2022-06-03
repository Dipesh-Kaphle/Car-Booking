import { useLayoutEffect, useState } from "react"

const useSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  const [collapsed, setCollapsed] = useState(false)
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
      if (window.innerWidth < 850) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return {
    innerWidth: size[0],
    innerHeight: size[1],
    collapsed: collapsed,
    setCollapsed: setCollapsed,
  }
}

export default useSize
