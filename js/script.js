const iconImageClasses = [
  "bg-emoji_broccoli",
  "bg-emoji_avocado",
  "bg-emoji_ball",
  "bg-emoji_balloon",
  "bg-emoji_beach",
  "bg-emoji_bunny",
  "bg-emoji_car",
  "bg-emoji_chinese_devil",
  "bg-emoji_cookie",
  "bg-emoji_devil",
  "bg-emoji_doggo",
  "bg-emoji_flover",
  "bg-emoji_fries",
  "bg-emoji_ghost",
  "bg-emoji_love",
  "bg-emoji_magician",
  "bg-emoji_magin",
  "bg-emoji_monkey_ears",
  "bg-emoji_monkey_eyes",
  "bg-emoji_monkey_mouth",
  "bg-emoji_pasta",
  "bg-emoji_pizza",
  "bg-emoji_plane",
  "bg-emoji_prawn",
  "bg-emoji_robot",
  "bg-emoji_shy",
  "bg-emoji_spok",
  "bg-emoji_stars",
  "bg-emoji_unicorn"
];

const randomNumber = maxNumber => Math.round(Math.random() * maxNumber);

const iconAnimation = (icons, iconIndex, additionalTimeout) => {
  const icon = icons[iconIndex];

  if (icon) {
    setInterval(() => {
      const randomIcon = iconImageClasses[randomNumber(iconImageClasses.length - 1)];

      icon.className = "bg-emoji " + randomIcon;
    }, 250 + additionalTimeout);
  }
}

const iconAnimationWithTimeShift = () => {
  const icons = document.querySelectorAll(".emoji-row i");

  for (let index = 0; index < 3; index++) {
    iconAnimation(icons, index, index * 100);
  }
}

iconAnimationWithTimeShift();