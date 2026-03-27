import { useState, useEffect } from 'react'

/**
 * Custom hook to track the user's vertical scroll position.
 * Useful for triggering animations or shrinking sticky headers.
 * 
 * @returns {number} The current vertical scroll position in pixels.
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Call handler right away so state gets updated with initial window size
    handleScroll()
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
