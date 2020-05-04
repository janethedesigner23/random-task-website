const iconImageClasses = [
  "bg-no_speak",
  "bg-flower",
  "bg-focus",
  "bg-fries",
  "bg-ghost",
  "bg-love",
  "bg-magic",
  "bg-no_hear",
  "bg-no_see",
  "bg-palm",
  "bg-pasta",
  "bg-pizza",
  "bg-plane",
  "bg-prawn",
  "bg-robot",
  "bg-shy",
  "bg-spok",
  "bg-star_eyes",
  "bg-unicorn",
  "bg-avo",
  "bg-ball",
  "bg-balloon",
  "bg-broccoli",
  "bg-bunny",
  "bg-car",
  "bg-chinese_devil",
  "bg-cookie",
  "bg-devil",
  "bg-doggo",
  "bg-eyes"
];

const randomNumber = maxNumber => Math.round(Math.random() * maxNumber);
const defaultTimeout = 350;

const iconAnimation = (icons, iconIndex, additionalTimeout) => {
  const icon = icons[iconIndex];

  if (icon) {
    setInterval(() => {
      const randomIcon = iconImageClasses[randomNumber(iconImageClasses.length - 1)];

      icon.className = "bg-emoji " + randomIcon;
    }, defaultTimeout + additionalTimeout);
  }
}

const iconAnimationWithTimeShift = () => {
  const icons = document.querySelectorAll(".emoji-row i");

  for (let index = 0; index < 3; index++) {
    iconAnimation(icons, index, index * 100);
  }
}

iconAnimationWithTimeShift();