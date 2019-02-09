const width = window.innerWidth
const height = window.innerHeight
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.width = width * devicePixelRatio
canvas.height = height * devicePixelRatio
canvas.style.width = `${width}px`
canvas.style.height = `${height}px`
context.scale(devicePixelRatio, devicePixelRatio)
document.body.appendChild(canvas)
