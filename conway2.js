// user input: 
    //done: colours, rule list, instructions, autoplay, step, rules, conway,
    //rules should just be buttons to press on or off for number of cells: birth, survival, death
    //do: 
        //add instructions to top of menu unstead
        //size of grid and cell, boundary options
        //cell fading and colour based on iteration.
        //premade shapes
        //reverse step
        //menu:
            //have buttons on single row
            //initialise to conway
            //translucent background

    //cell shapes, dimensions (1D,2D,3D,4D),
    //colours based on rule that led to change or generation
    //rule suggestions, symmetry
    //fly ship and shoot lasers that kill cells or blocks that stick to them
    //reverse time, have rules that involve several generations (i.e. was on one round ago)
    //ability to lock cells once they've changed (dendritic)
    //import images, save configuration and send to friends (including play backwards so image is revealed)
    //add: https://conwaylife.com/ref/lexicon/lex_home.htm
    //add: https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.386.7806&rep=rep1&type=pdf
    //see features: http://golly.sourceforge.net/
    //https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/gameOfLife2.html
    //http://www.mirekw.com/ca/ca_rules.html
    //https://www.reddit.com/r/cellular_automata/
    //https://www.reddit.com/r/cellular_automata/comments/pz7433/some_recentexperiments_with_embedded_automata/
        //https://www.reddit.com/r/cellular_automata/comments/ptloxa/2d_cellular_automata_with_time_varying_rules/
        //vary rules over time (t and t+1 rule) and space (e.g. withh shapes)
        //vary colour based on = time alive, rule that lead to colour change, location

//code ideas
    //need a drawCells() function
    //stop spacebar triggering buttons: https://stackoverflow.com/questions/27878940/spacebar-triggering-click-event-on-checkbox
        //.addEventListener("keyup", handleCheckboxEvent, true);
    //switch cell changes to opacity? https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
        //add elements to dom tree and allow css to handle it?
    //https://levelup.gitconnected.com/conways-game-of-life-in-javascript-9498ae1958fe
    //https://spicyyoghurt.com/tutorials/javascript/conways-game-of-life-canvas
    //http://dotat.at/prog/life/life.html
    //https://pmav.eu/stuff/javascript-game-of-life-v3.1.1/?autoplay=0&trail=0&grid=4&colors=1&zoom=3&s=[{%22108%22:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449]}]
    //https://dev.to/lexjacobs/conways-game-of-life-with-different-rules-13l0
    //https://plato.stanford.edu/entries/cellular-automata/index.html#BasiDefi
    //https://math.hws.edu/eck/js/edge-of-chaos/CA.html
    //https://stackoverflow.com/questions/15213216/accessing-gpu-via-web-browser 
    //WebGL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API 
    //request animation frame https://stackoverflow.com/questions/15213216/accessing-gpu-via-web-browser

    //https://glslsandbox.com/e#207.3
    //https://stackoverflow.com/questions/21603350/is-there-any-reason-for-using-webgl-instead-of-2d-canvas-for-2d-games-apps

//INITIALISATION-----
document.getElementById('grid_width').value = window.innerWidth;
document.getElementById('grid_height').value = window.innerHeight;
document.body.style.backgroundColor = document.getElementById('back_colour').value;

var cells = [];
var x_co = [];
var y_co = [];
var rules = [[],[]];

var inited;
var iterator;
var step = false;
var space_rep = false;

function gridLines(x,y,dir,line_col){
    let grid = document.getElementById('grid')
    let grid_ctx = document.getElementById('grid').getContext('2d')
    grid_ctx.strokeStyle = line_col;
    grid_ctx.lineWidth = .1;
    grid_ctx.beginPath()
    grid_ctx.moveTo(x,y)
    if(dir=='hor'){
        grid_ctx.lineTo(grid.width,y)
    } else if(dir=='vert'){
        grid_ctx.lineTo(x,grid.height)
    }
    grid_ctx.stroke()
}

function gridCoords(){
    cells = [];
    x_co = [];
    y_co = [];
    let cell_els = document.getElementsByClassName("cell");
    while(cell_els.length > 0){
        cell_els[0].parentNode.removeChild(cell_els[0]);
    }
    let grid = document.getElementById('grid')
    grid.getContext('2d').clearRect(0, 0, grid.width, grid.height)
    let line_col = document.getElementById('line_colour').value

    let grid_width = Number(document.getElementById('grid_width').value)
    let grid_height = Number(document.getElementById('grid_height').value)
    let cell_size = Number(document.getElementById('cell_size').value)
    grid.width = Math.floor(grid_width/cell_size)*cell_size
    grid.height = Math.floor(grid_height/cell_size)*cell_size
    
    let i = 0
    for (let y = 0; y <= grid.height-cell_size; y+=cell_size) {
        for (let x = 0; x <= grid.width-cell_size; x+=cell_size) {
            i++; 
            //create a canvas for each cell
            let cell_el = document.createElement('canvas');
            
            cell_el.id = i; //OR: col+','+ row;
            cell_el.className = 'cell';
            cell_el.style.position = 'absolute';
            cell_el.style.left = x+'px';
            cell_el.style.top = y+'px';
            cell_el.width = cell_size;
            cell_el.height = cell_size;
            cell_el.style.backgroundColor = document.getElementById('cell_colour').value;
            cell_el.style.opacity = 0;
            document.getElementById('container').appendChild(cell_el);

            cells.push(0)
            if(i <= (grid.width/cell_size)+1){
                gridLines(x,0,'vert',line_col)
                x_co.push(x)
            }
        }
        gridLines(0,y,'hor',line_col)
        y_co.push(y)
    }
}

function changeColour(e){
    let index = e.target.id-1
    if(e.target.className == 'cell'){
        if(cells[index] === 1){
            cells[index] = 0
            document.getElementById(e.target.id).style.opacity = 0;
        } else {
            cells[index] = 1
            document.getElementById(e.target.id).style.opacity = 1;
        }
    }
}

//ITERATE
function iterateStep(){
    let cells_next = [...cells];
    for(let i=0; i<cells.length; i++){
        if(rules[0][0] === undefined && rules[1][0] === undefined) {break}
        //grid locations
        let cell_size = Number(document.getElementById('cell_size').value);
        let row_size = grid.width/cell_size;
        let col_size = grid.height/cell_size;
        let grid_size = row_size*(col_size-1);
        //neighbour locations
        if(i<row_size){var above = grid_size
            } else {var above = row_size*-1}
        if(i>(cells.length-row_size)){below = grid_size*-1
            } else {var below = row_size}
        if(i%row_size===0){right = (row_size-1)*-1
            } else {var right = 1}
        if((i- 1)%row_size===0){left = row_size-1
            } else {var left = -1}
        //count neighbours
        let neighbours = cells[i+above+left] + cells[i+above] + cells[i+above+right] +
                         cells[i+left] + cells[i+right] +
                         cells[i+below+left] + cells[i+below] + cells[i+below+right]
        //apply rules
        for(let j=0; j<8; j++){
            if(cells[i] === 0 && neighbours === rules[0][j] || cells[i] === 1 && neighbours === rules[1][j]){
                cells_next[i] = 1;
                document.getElementById(i+1).style.opacity = 1;
                break
            } else {
                cells_next[i] = 0;
                document.getElementById(i+1).style.opacity = 0;
            }
        }          
    }
    //copy values to present state
    if(rules[0][0] !== undefined && rules[1][0] !== undefined) {cells = [...cells_next]}
    if(step===false){
        iterator = requestAnimationFrame(iterateStep)
    }
}

function mousedownHandler(e){
    changeColour(e)
    //console.log(JSON.parse(JSON.stringify(e.target.id)))
    document.addEventListener('mouseover', changeColour, false);
    document.addEventListener('mouseup', function(){
        document.removeEventListener('mouseover', changeColour, false);
    })
}

function keydownHandler(e){
    if(e.key === " "){
        if(e.repeat){
            if(space_rep === false){
                step = false
                space_rep = true
                iterator = requestAnimationFrame(iterateStep)
            } else {return}
        } else {
            step = true
            iterator = requestAnimationFrame(iterateStep)
        }

    } else if(e.key === "m"){
        let user_form = document.getElementById("user_form");
        if (user_form.style.display === "none") {
            user_form.style.display = "grid";
          } else {
            user_form.style.display = "none";
          }
    }
}

function keyupHandler(e){
    if(e.key === " "){
        cancelAnimationFrame(iterator)
        space_rep = false
    } 
}

//SETUP-----
window.onload = function() {
    gridCoords()
  };

document.addEventListener('mousedown', mousedownHandler, false)
window.addEventListener('keydown', keydownHandler, false)
window.addEventListener('keyup', keyupHandler, false)

//INSTRUCTIONS
var instructions = document.getElementById("instructions")
instructions.onanimationend = (e) => {
    if (e.srcElement.classList.contains('fade-out')) {
        instructions.parentNode.removeChild(instructions);
    }
};

//CELL COLOUR
document.getElementById('cell_colour').addEventListener('input', function(e){
    for(i=0;i<cells.length;i++){
        document.getElementById(i+1).style.backgroundColor = e.target.value;
        if(cells[i] === 1){
            document.getElementById(i+1).style.opacity = 1;
        }
    }
}, false);

//LINE COLOUR
document.getElementById('line_colour').addEventListener('input', function(e){
    gridColour = e.target.value
    for (let i=0; i <= y_co.length; i++){
        gridLines(0,y_co[i],'hor',gridColour)
    }
    for (let i=0; i <= x_co.length; i++){
        gridLines(x_co[i],0,'vert',gridColour)
    }
}, false);

//BACK COLOUR
document.getElementById('back_colour').addEventListener('input', function(e){
    background_colour = e.target.value;
    document.body.style.backgroundColor = background_colour;
    grid.style.backgroundColor = background_colour;
}, false);

//GRID DRAW
document.getElementById('cell_size').addEventListener('change', gridCoords, false);
document.getElementById('grid_width').addEventListener('change', gridCoords, false);
document.getElementById('grid_height').addEventListener('change', gridCoords, false);

//RANDOM BUTTON
document.getElementById('random').addEventListener('click', function(e){
    for (i = 0; i < cells.length; i++) {
        cells[i] = Math.round(Math.random());
        document.getElementById(i+1).style.opacity = cells[i];
    };
    document.getElementById('random').blur()
}, false);

//RESET BUTTON
document.getElementById('reset').addEventListener('click', function(e){
    e.preventDefault();
    for(i=0;i<cells.length;i++){
        cells[i] = 0
        document.getElementById(i+1).style.opacity = 0;
    }
    document.getElementById('reset').blur()
    document.getElementById('play').innerHTML = 'Play'
    step = true
})

//STEP BUTTON
document.getElementById('step').addEventListener('click', function(e){
    e.preventDefault();
    step = true;
    iterator = requestAnimationFrame(iterateStep);
    document.getElementById('play').innerHTML = 'Play'
    document.getElementById('step').blur()
})

//PLAY BUTTON
document.getElementById('play').addEventListener('click', function(e){
    e.preventDefault();
    var play = document.getElementById('play')
    if(play.innerHTML === 'Play'){
        document.getElementById('play').innerHTML = 'Pause';
        step = false
        iterator = requestAnimationFrame(iterateStep);
    } else if(play.innerHTML === 'Pause'){
        document.getElementById('play').innerHTML = 'Play';
        cancelAnimationFrame(iterator)
    }
    document.getElementById('play').blur()
})

//CONWAY BUTTON
document.getElementById('conway').addEventListener('click', function(e){
    e.preventDefault();
    let non_con = document.getElementsByClassName('rule')
    for(let i=0; i<non_con.length; i++){
        let non_con_el = document.getElementById(non_con[i].id)
        if(non_con_el.value !== '0'){
            non_con_el.value = '0'
            non_con_el.style.backgroundColor = 'white'
            non_con_el.style.color = 'black'
        }
    }
    document.getElementById('birth_3').click()
    document.getElementById('survive_2').click()
    document.getElementById('survive_3').click()
    document.getElementById('conway').blur()
})

//RULE BUTTONS
document.getElementById('rule_list').addEventListener('click', function(e){
    if(e.target.classList[1] === 'rule'){
        var birth_el = document.getElementById(e.target.id)
        //toggle
        if (birth_el.value === '0') {
            birth_el.value = birth_el.innerHTML
            birth_el.style.backgroundColor = 'black'
            birth_el.style.color = 'white'
          } else {
            birth_el.value = '0'
            birth_el.style.backgroundColor = 'white'
            birth_el.style.color = 'black'
          }
        //loop through all elements in that rule class
        var rule_cl = document.getElementsByClassName(e.target.classList[0])
        var rule_vec = [];
        for(let i=0;i<8;i++){
            var rule_val = Number(rule_cl[i].value)
            if(rule_val > 0){
                rule_vec.push(rule_val)
            }
        }
        if(e.target.classList[0] === 'birth'){
            rules[0] = rule_vec
        } else {rules[1] = rule_vec}

        birth_el.blur()
    }
})

//
document.getElementById('user_form').addEventListener('click', function(e){
    console.log(e.target)
})