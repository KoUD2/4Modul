let Moving_elem = document.getElementsByClassName("sdvs");

console.log(Moving_elem)

let width_pos = document.documentElement.clientWidth;
let height_pos = document.documentElement.clientHeight;
// let elem_width = Moving_elem.clientWidth;
// let elem_height = Moving_elem.clientHeight;

let pos = [1, -1];
let x_direction = pos[Math.random(Math.random() * 1)]
let y_direction = pos[Math.random(Math.random() * 1)]

let speed = .1;

// offsetLeft: -111
// offsetTop: 594

Moving_elem.style.top = '100px';
Moving_elem.style.left = '100px';

setInterval(() => {
    const top = parseInt(Moving_elem.style.top);
    const left = parseInt(Moving_elem.style.left);
    if (top == (width))
                if (Moving_elem.style.top >= document.body.clientHeight ||
                    Moving_elem.style.top <= 0)
                    y_direction *= -1;
                if (Moving_elem.style.left >= document.body.clientWidth ||
                    Moving_elem.style.left <= 0)
                    x_direction *= -1;
                Moving_elem.style.top = parseInt(Moving_elem.style.top) + speed * y_direction + 'px'
                Moving_elem.style.left = parseInt(Moving_elem.style.left) + speed * x_direction + 'px'
})

// let position_width_start = Math.random() * width_pos;
// let position_height_start = Math.random() * height_pos;
// let position_width_end = Math.random() * width_pos;
// let position_height_end = Math.random() * height_pos;


