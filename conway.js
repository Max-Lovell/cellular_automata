var grid = document.getElementById('grid') 
grid.width = window.innerWidth
grid.height = window.innerHeight
var grid_ctx = grid.getContext("2d")

var x_size = grid.width/10
var y_size = grid.width/10
var x_co = []
var y_co = []

for (let i = 0; i <= grid.width; i+= x_size) {
    grid_ctx.beginPath()
    grid_ctx.moveTo(i,0)
    grid_ctx.lineTo(i,grid.height)
    grid_ctx.stroke()
    x_co.push(i)
}

for (let i = 0; i <= grid.height; i+= y_size) {
    grid_ctx.beginPath()
    grid_ctx.moveTo(0,i)
    grid_ctx.lineTo(grid.width,i)
    grid_ctx.stroke()
    y_co.push(i)
}


function changeColour(e){
    var pixel_colour = grid_ctx.getImageData(e.clientX, e.clientY, 1, 1).data

    if(pixel_colour[0] === 0 && pixel_colour[3] === 255){
        grid_ctx.fillStyle = 'white';
    } else {grid_ctx.fillStyle =  'black'}
    

    for(let i=0; i < x_co.length; i++){
        if(e.clientX > x_co[i] && e.clientX < x_co[i+1]){
            var x_bound = x_co[i]
            break
        }
    }
    for(let i=0; i < y_co.length; i++){
        if(e.clientY > y_co[i] && e.clientY < y_co[i+1] || (e.clientY > y_co[y_co.length-1])){
            var y_bound = y_co[i]
            break
        }
    }

    grid_ctx.clearRect(x_bound+1, y_bound+1, x_size-2, y_size-2)
    grid_ctx.beginPath();
    grid_ctx.rect(x_bound+1, y_bound+1, x_size-2, y_size-2);
    grid_ctx.fill();
}

grid.addEventListener("mousedown", changeColour, false)

setInterval(function(){
    var cells = [];
    for(let x=0; x < x_co.length; x++){
        for(let y=0; y < y_co.length; y++){
            var pixel_colour = grid_ctx.getImageData(x_co[x]+(x_size/2), y_co[y]+(y_size/2), 1, 1).data
            if(pixel_colour[0] === 0 && pixel_colour[3] === 255){
                cells.push('on')
                console.log(cells.length)
            } else {cells.push('off')}
        }
    }

    for(let i=1; i<cells.length;i++){
        var neighbours = [];

        if(i>x_co.length){ //has squares above
            if(i%x_co.length !== 0){ //has squares to the left
                var top_left = cells[(i-1)-x_co.length]
            } else {var top_left = 'off'}
            var top_middle = cells[i-x_co.length]
            if(i !== 1 && (i-1)%x_co.length !== 0){ //has squares to right
                var top_right = cells[(i+1)-x_co.length] 
            } else {var top_right = 'off'}
            neighbours.push(top_left,top_middle,top_right)
        }

        if(i<cells.length-x_co.length){ //has squares below
            if(i%x_co.length !== 0){ //has squares to the left
                var bottom_left = cells[(i-1)+x_co.length]
            } else {var bottom_left = 'off'}
            var bottom_middle = cells[i+x_co.length]
            if(i !== 1 && (i-1)%x_co.length){ //has squares to right
                var bottom_right = cells[(i+1)+x_co.length]
            } else {var bottom_right = 'off'}
            neighbours.push(bottom_left,bottom_middle,bottom_right)
        }

        if(i%x_co.length !== 0){
            var left_middle = cells[i-1] //has squares to the left
        } else {var left_middle = 'off'}
        if(i !== 1 && x_co.length%i-1){ //has squares to right
            var right_middle = cells[i+1]
        } else {var right_middle = 'off'}

        var neighbours = [top_left,top_middle,top_right,
                          left_middle,right_middle,
                          bottom_left,bottom_middle,bottom_right]
            
        var live_neighbours = 0;
        for (var n = 0; n < neighbours.length; n++) {
            if (neighbours[n] === 'on') {
                live_neighbours++;
            }
        }

        if(cells[i] === 'on'){
            if(live_neighbours < 2){ //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                cells[i] = 'off'
            }
            if(live_neighbours > 3){ //Any live cell with more than three live neighbours dies, as if by overpopulation.
                cells[i] = 'off'
            }
        }
        if(cells[i] === 'off' && live_neighbours === 3){
            cells[i] = 'on' //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        }

        if(cells[i] === 'off'){
            grid_ctx.fillStyle = 'white';
        } else {grid_ctx.fillStyle = 'black';}

        for(let x=0; x < x_co.length; x++){
            for(let y=0; y < y_co.length; y++){
                var pixel_colour = grid_ctx.getImageData(x_co[x]+(x_size/2), y_co[y]+(y_size/2), 1, 1).data
                if(pixel_colour[0] === 0 && pixel_colour[3] === 255){
                    cells.push('on')
                    
                } else {cells.push('off')}
            }
        }
    

        if(i%x_co.length === 0){
            var x_pos = x_co[x_co.length-1]
        } else {var x_pos = x_co[i%x_co.length]}
        if(i%y_co.length === 0){
            var y_pos = y_co[y_co.length-1]
        } else {var y_pos = y_co[i%y_co.length]}

        grid_ctx.clearRect(x_pos+1, y_pos+1, x_size-2, y_size-2)
        grid_ctx.beginPath();
        grid_ctx.rect(x_pos+1, y_pos+1, x_size-2, y_size-2)
        grid_ctx.fill();
    }
}, 10000);