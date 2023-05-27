'use strict';

{
  const NEW_DATA = `
  <div class="data_child">
  <div class="data_x">
  <label>x</label>
  <input type="number">
  </div>
  <div class="comma">, </div>
  <div class="data_y">
  <label>y</label>
  <input type="number">
  </div>
  <button class="delete">消去する</button>
  </div>
  `

  const ADD = document.getElementById('add');
  ADD.addEventListener('click', () => {
    let data = document.getElementById('data');
    let numData = document.getElementById('data').childElementCount;

    for (let i = 0; i < numData; i++) {
      data.children[i].removeAttribute('id');
      data.children[i].id = `data_${i}`;
    }

    data.insertAdjacentHTML('beforeend', NEW_DATA);

    setNumber();
    setDeletes();
  });

  function setNumber() {
    let data = document.getElementById('data');
    let numData = data.childElementCount;

    for (let i = 0; i < numData; i++) {
      data.children[i].removeAttribute('id');
      data.children[i].id = `data_${i};`
    }

    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < numData * 2; i++) {
      inputs[i].removeAttribute('id');
      let num = Math.floor(i / 2);
      if (i % 2 === 0) {
        inputs[i].id = `data_x_${num}`;
      } else {
        inputs[i].id = `data_y_${num}`;
      }
    }
  }

  function setDeletes() {
    let deletes = document.querySelectorAll('.delete');
    deletes.forEach((d, index) => {
      let dataChildren = document.querySelectorAll('.data_child');
      d.addEventListener('click', () => {
        dataChildren[index].remove();
        setNumber();
      });
    });
  }

  setNumber();
  setDeletes();

  const DELETE_ALL = document.getElementById('delete_all');
  DELETE_ALL.addEventListener('click', () => {
    let data = document.getElementById('data');
    data.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      data.innerHTML += NEW_DATA;
    }

    setNumber();
  });
}