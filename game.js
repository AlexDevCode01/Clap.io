const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")

const world = { width: 10000, height: 10000 }
canvas.width = world.width
canvas.height = world.height

const bodyTexture = new Image()
const handTexture = new Image()
bodyTexture.src = "images/skins/body01.png";
handTexture.src = "images/skins/arm01.png";

const player = {
    x: 100,
    y: 100,
    size: 70,
    handSize: 30,
    leftHandDistanceX: 5,
    rightHandDistanceX: 45,
    handDistanceY: 40
}

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
};

function drawPlayer() {
    ctx.drawImage(
        handTexture,
        player.x - player.leftHandDistanceX,
        player.y + player.handDistanceY,
        player.handSize,
        player.handSize
    )
    ctx.drawImage(
        handTexture,
        player.x + player.rightHandDistanceX,
        player.y + player.handDistanceY,
        player.handSize,
        player.handSize
    )    
    ctx.drawImage(
        bodyTexture,
        player.x,
        player.y,
        player.size,
        player.size
    )
};

function initGame() {
    drawWorld()
    drawPlayer()
}

let loadedTexturesCount = 0;
function checkTexturesLoading() {
    loadedTexturesCount++;
    if (loadedTexturesCount === 2) {
        initGame()
    }
}

bodyTexture.onload = checkTexturesLoading;
handTexture.onload = checkTexturesLoading;