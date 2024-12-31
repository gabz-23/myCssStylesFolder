const numberOfLeafs = 16;
const flower = document.querySelector('.flower');

for (i = 0; i <= 15; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf', `leaf-${i}`);
    flower.appendChild(leaf);
}
