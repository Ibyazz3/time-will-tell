const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-cent');
const container = document.querySelector('.btn-title');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  thisButtons();
});

// buttons dynamically added
function thisButtons() {
  const showBtn = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ['all']
  );
  const showButton = showBtn
    .map(function (showBtn) {
      return `<button type="button" class="btn-tit" data-id=${showBtn}>${showBtn}</button>`;
    })
    .join('');
  container.innerHTML = showButton;
  const filterBtn = document.querySelectorAll('.btn-tit');
  // filter buttons

  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const arrayCategory = e.currentTarget.dataset.id;
      const newCategory = menu.filter(function (btnCat) {
        if (btnCat.category === arrayCategory) {
          return btnCat;
        }
      });
      if (arrayCategory === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(newCategory);
      }
    });
  });
}

// function for loadng items

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="single-item">
          <img src=${item.img} alt=${item.title} class="img-photo" />
          <div class="single-title">
            <header>
              <h4 class="name">${item.category}</h4>
              <span class="price">${item.price}</span>
            </header>
            <p class="single-info">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}
