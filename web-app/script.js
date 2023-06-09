console.log(1);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    function add(a, b) {
      return a + b;
    }
    document.getElementById('paragraph').style.color = 'red';

    add(1, 2);
    add(10, 20);
    add(100, 200);
  },
  false
);
