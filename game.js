const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")

const world = { width: 10000, height: 10000 }
canvas.width = world.width
canvas.height = world.height

function drawWorld() {
    ctx.fillStyle = "#788f57"

    ctx.fillRect(0, 0, world.width, world.height)

    ctx.strokeStyle = "#718752"
    ctx.lineWidth = "5"
    
    for (let x = 0; x <= world.width; x += 90) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, world.height)
        ctx.stroke()
    }

    for (let y = 0; y <= world.height; y += 90) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(world.width, y)
        ctx.stroke()
    }
}

drawWorld()