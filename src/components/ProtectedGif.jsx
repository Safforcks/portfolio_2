import { useRef, useEffect } from 'react'

export default function ProtectedGif({ src, alt = "gif", className = "", style = {} }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    const pattern = ctx.createPattern(
      (() => {
        const patternCanvas = document.createElement('canvas')
        patternCanvas.width = 20
        patternCanvas.height = 20
        const patternCtx = patternCanvas.getContext('2d')
        
        patternCtx.fillStyle = 'rgba(255, 255, 255, 0.02)'
        patternCtx.fillRect(0, 0, 20, 20)
        
        patternCtx.strokeStyle = 'rgba(100, 100, 100, 0.03)'
        patternCtx.lineWidth = 1
        patternCtx.beginPath()
        patternCtx.moveTo(0, 0)
        patternCtx.lineTo(20, 20)
        patternCtx.stroke()
        
        return patternCanvas
      })(),
      'repeat'
    )

    const updateCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
        
        ctx.fillStyle = pattern
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      requestAnimationFrame(updateCanvas)
    }

    updateCanvas()

    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
        
        ctx.fillStyle = pattern
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none', 
        }}
        draggable="false"
        onContextMenu={(e) => {
          e.preventDefault()
          return false
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'default',
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
        onContextMenu={(e) => {
          e.preventDefault()
          return false
        }}
      />
    </div>
  )
}
