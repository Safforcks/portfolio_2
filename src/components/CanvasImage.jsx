import { useEffect, useRef } from 'react'

export default function CanvasImage({ 
  src, 
  alt = "imagem", 
  width = 200, 
  height = 200, 
  className = "",
  style = {},
  onLoad = null
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.crossOrigin = 'anonymous'

    img.onload = () => {
      canvas.width = width
      canvas.height = height

      const scale = Math.min(width / img.width, height / img.height)
      const x = (width - img.width * scale) / 2
      const y = (height - img.height * scale) / 2

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale)

      if (onLoad) onLoad()
    }

    img.onerror = () => {
      ctx.fillStyle = '#ddd'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = '#999'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Erro ao carregar', width / 2, height / 2 - 5)
      ctx.fillText(alt, width / 2, height / 2 + 10)
    }

    img.src = src
  }, [src, width, height, alt])

  return (
    <canvas
      ref={canvasRef}
      alt={alt}
      className={className}
      style={{
        ...style,
        display: 'block',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        return false
      }}
    />
  )
}
