// Reusable layout wrapper — provides consistent max-width and horizontal padding.
// Wrap any section's inner content with this to stay aligned across the page.
const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container
