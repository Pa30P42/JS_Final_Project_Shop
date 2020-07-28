import './category.scss';

const appliances = [
  {
    name: 'Крупная бытовая техника',
    value: 'large_home_appliances',
  },

  {
    name: 'Встраиваемая техника',
    value: 'built-in_appliances',
  },

  {
    name: 'Уход за домом и одеждой',
    value: 'home_and_clothing_care',
  },

  {
    name: 'Техника для кухний',
    value: 'kitchen_appliances',
  },
];

export const categories = [
  {
    name: 'Крупная бытовая техника',
    image:
      'https://s3-alpha-sig.figma.com/img/a5fb/5e98/13153a01a77c6fa3fe573bf986ce2864?Expires=1597017600&Signature=gOFPX7qqmCRI7bJmNwRJBhILvzzxFU6N6xVdgRRNTotPqX3TPj3fY45HlRZZqGVvcyGuVNvj3txVRE9eqS2Ic1zcQ6mcPKlEZXxGX-T~HTFYRyVpWHASq-nirJH4vp0RBrnmBO2A1nFnp4D0xZg~dbZqNWeHolByxF4Ao~oGdcfOTl-lR~IAsDn8xBpVS3OWnTnExaKWPP61oYeSYQgY0lY5mHN0eJCU54WVszjFJFAhrofLywk07zBox6RjHXL5~YO3sx2X58R097sLivoj6PSpz6DXqI7-7vEKLiYSVczNHK5ymrVm7J2q6b0XkeI7F6jNVshj0A3CrZblK9ODbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Встраиваемая техника',
    image:
      'https://s3-alpha-sig.figma.com/img/f110/df5d/b5028d162ea8fc9f0c96a9c8fdf88eb7?Expires=1597017600&Signature=SW2DHh2H1yqd7BZKIA6AXUKpCHTuSw4j6UgyvoY4rGg4-xk3XQR1tkwEoknOfFhVb1UGi9ahwp96~VFEXsA6aYFez5Hujo4Q~BjOoNEnQfmChdtzJLqqbf4f6rpCGUoZJ5pjLvDvc5sk-~6Q8i0nqm~J600hdqflNYaXJ3hVrh9DrAQ-CJ0afqn2TrWDaFK1mStfM6RKQPZn3GxjMDeTqhrdzYz1qUWXddy3IwMB5GntdErqlHCOOsoU4wfasrvGLJGQVxYH2FGN~lMURS7Li9bGBxupTEL1qyxOGeKgZJVOE-xExIMpQ7r~R5ckY9CzwIrfQuCedNbZKteHDDwuSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Уход за домом и одеждой',
    image:
      'https://s3-alpha-sig.figma.com/img/c0a8/dd3c/5840508c838b62a06907ebd7a1210567?Expires=1597017600&Signature=VRLjrXa-ZTyVaXSbW350NjWGsMyJJorlJrJMEaSowsLszfWjzv-NS5KVaHSNy266e8VhN-jL83L36jGnoOUzdtTMHo4V7VzeU1j86d5x53U1uTaMyciBpZ8a8oHZkhv3uqHn4-OuSbzPjOGV0rDbqrmMf44bGYWY4MncWtl6oOWejemFXo4kUJnYwnuqMF9oABuxdqKYnWEBtA-iKnJZyJmMcNDmOx8gqPO7xVJdHgy7Xv3cqA4O-oXwP29jQR88NHqd6WFhcjY9mLFXQwO8hVVBN5bi2LAQRpJslX1Cu7ZlfGYXghSgu7jQi53TytS53E1y2c7R4Qk5fo0srhoycg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Техника для кухни',
    image:
      'https://s3-alpha-sig.figma.com/img/a744/f960/7906439bf8683af940f0331e6d1f8f2c?Expires=1597017600&Signature=N2TTD3GJbd3vTHAv2AC4wWvdkNvdnSMddplO4xgxzpDg4PN29l1PBGSzp~8FDL6Y1jYn-LHhc2qSThg7gv-iDHQafv7xQfYIQPuP7J-89P9nBzMTo19jw55I23mWcBtJI165pa27TKcV6Ec6tKlzoycINxnD~ztI3MG~V7vSRFFiAdzsdlFDDE4VLQfbKhm2UPztle8m5uUx6axzOPrjp7ETlx9gTMFUCkhpvYeALNDsquTafRklonBqe7FKkrRNjml7R3wFFpIkulJDo7lJnUQMJtbo6jbAEIhI9rOxp3HNHF8HQOWXdDL7Jjt6NTwxCt7HTXprlCbiamsxcnaZTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

export function categoriesListMarkup(categories) {
  return `
            <ul class="categories__list">
            ${categoriesItemMarkup(categories)}
            </ul>
            `;
}

function categoriesItemMarkup(categories) {
  return categories.reduce((acc, category) => {
    acc += `
                <li class="categories__item">
                    <div class="category__img_wrapper">
                        <img src="${category.image}" alt="#" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${category.name}</p>
                    <button type="button" class="btn btn_gradient">Купить</button>
                </li>`;
    return acc;
  }, '');
}

// const markup = document.querySelector('#root');
// markup.insertAdjacentHTML('afterbegin', categoriesListMarkup(categories));
