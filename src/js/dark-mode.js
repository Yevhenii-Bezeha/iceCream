var dark = document.getElementById('dark');

const darkTheme = document.querySelector('[dark-theme]');
const darkThemeBgCircle = document.querySelector('[darkThemeBgCircle]');
const darkHeroTitle = document.querySelector('[darkHeroTitle]');
// const darkButtonHero = document.querySelector('[darkButtonHero]');
const darkButtonHeroLight = document.querySelector('[darkButtonHeroLight]');

const darkProductTitleFirst = document.querySelector('[darkProductTitleFirst]');
const darkProductTitleSecond = document.querySelector('[darkProductTitleSecond]');
const darkProductTitleThird = document.querySelector('[darkProductTitleThird]');

const darkProductCircleFirstFirst = document.querySelector('[darkProductCircleFirstFirst]');
const darkProductCircleFirstSecond = document.querySelector('[darkProductCircleFirstSecond]');
const darkProductCircleFirstThird = document.querySelector('[darkProductCircleFirstThird]');

const darkProductCircleSecondFirst = document.querySelector('[darkProductCircleSecondFirst]');
const darkProductCircleSecondSecond = document.querySelector('[darkProductCircleSecondSecond]');
const darkProductCircleSecondThird = document.querySelector('[darkProductCircleSecondThird]');

const darkProductCircleThirdFirst = document.querySelector('[darkProductCircleThirdFirst]');
const darkProductCircleThirdtSecond = document.querySelector('[darkProductCircleThirdtSecond]');
const darkProductCircleThirdThird = document.querySelector('[darkProductCircleThirdThird]');

const darkProductTextFirst = document.querySelector('[darkProductTextFirst]');
const darkProductTextSecond = document.querySelector('[darkProductTextSecond]');
const darkProductTextThird = document.querySelector('[darkProductTextThird]');

const darkProductTextActiveFirst = document.querySelector('[darkProductTextActiveFirst]');
const darkProductTextActiveSecond = document.querySelector('[darkProductTextActiveSecond]');
const darkProductTextActiveThird = document.querySelector('[darkProductTextActiveThird]');
const darkProductTextActiveFourth = document.querySelector('[darkProductTextActiveFourth]');

const darkProductButtonFirst = document.querySelector('[darkProductButtonFirst]');
const darkProductButtonSecond = document.querySelector('[darkProductButtonSecond]');
const darkProductButtonThird = document.querySelector('[darkProductButtonThird]');

// const darkHeroNavFirst = document.querySelector('[darkHeroNavFirst]');
// const darkHeroNavSecond = document.querySelector('[darkHeroNavSecond]');
// const darkHeroNavThird = document.querySelector('[darkHeroNavThird]');
// const darkHeroNavFourth = document.querySelector('[darkHeroNavFourth]');

const darkHeroButtonBuy = document.querySelector('[darkHeroButtonBuy]');

const darkProductSvgFirst = document.querySelector('[darkProductSvgFirst]');
const darkProductSvgSecond = document.querySelector('[darkProductSvgSecond]');
const darkProductSvgThird = document.querySelector('[darkProductSvgThird]');

const darkHeroSvg = document.querySelector('[darkHeroSvg]');

const darkHeroSvgLight = document.querySelector('[darkHeroSvgLight]');

const darkAboutBg = document.querySelector('[darkAboutBg]');

const darkAboutText = document.querySelector('[darkAboutText]');

const darkAboutBtn = document.querySelector('[darkAboutBtn]');

const darkAdvBg = document.querySelector('[darkAdvBg]');

const darkAdvTextFirst = document.querySelector('[darkAdvTextFirst]');
const darkAdvTextSecond = document.querySelector('[darkAdvTextSecond]');
const darkAdvTextThird = document.querySelector('[darkAdvTextThird]');

const darkGalleryBg = document.querySelector('[darkGalleryBg]');

// const darkCustBgFirst = document.querySelector('[darkCustBgFirst]');
// const darkCustBgSecond = document.querySelector('[darkCustBgSecond]');
// const darkCustBgThird = document.querySelector('[darkCustBgThird]');

const darkContactsBg = document.querySelector('[darkContactsBg]');

// const darkContactsCardFirst = document.querySelector('[darkContactsCardFirst]');
// const darkContactsCardSecond = document.querySelector('[darkContactsCardSecond]');
// const darkContactsCardThird = document.querySelector('[darkContactsCardThird]');

const darkContactsBtn = document.querySelector('[darkContactsBtn]');

const darkFooterBg = document.querySelector('[darkFooterBg]');



dark.onclick = function () {
  document.body.classList.toggle('dark-colour');
  darkTheme.classList.toggle('dark-hero');
  darkThemeBgCircle.classList.toggle('darkThemeBgCircle');
  darkHeroTitle.classList.toggle('colourBlack');
  // darkButtonHero.classList.toggle('darkButtonHero');
  darkButtonHeroLight.classList.toggle('dark-colour');

  darkProductTitleFirst.classList.toggle('colourBlack');
  darkProductTitleSecond.classList.toggle('colourBlack');
  darkProductTitleThird.classList.toggle('colourBlack');

  darkProductCircleFirstFirst.classList.toggle('darkProductCircle');
  darkProductCircleFirstSecond.classList.toggle('darkProductCircle');
  darkProductCircleFirstThird.classList.toggle('darkProductCircle');

  darkProductCircleSecondFirst.classList.toggle('darkProductCircle');
  darkProductCircleSecondSecond.classList.toggle('darkProductCircle');
  darkProductCircleSecondThird.classList.toggle('darkProductCircle');

  darkProductCircleThirdFirst.classList.toggle('darkProductCircle');
  darkProductCircleThirdtSecond.classList.toggle('darkProductCircle');
  darkProductCircleThirdThird.classList.toggle('darkProductCircle');

  darkProductTextFirst.classList.toggle('colourBlack');
  darkProductTextSecond.classList.toggle('colourBlack');
  darkProductTextThird.classList.toggle('colourBlack');

  darkProductTextActiveFirst.classList.toggle('colourBlack');
  darkProductTextActiveSecond.classList.toggle('colourBlack');
  darkProductTextActiveThird.classList.toggle('colourBlack');
  darkProductTextActiveFourth.classList.toggle('colourBlack');

  darkProductButtonFirst.classList.toggle('dark-colour');
  darkProductButtonSecond.classList.toggle('dark-colour');
  darkProductButtonThird.classList.toggle('dark-colour');

  // darkHeroNavFirst.classList.toggle('colourBlack');
  // darkHeroNavSecond.classList.toggle('colourBlack');
  // darkHeroNavThird.classList.toggle('colourBlack');
  // darkHeroNavFourth.classList.toggle('colourBlack');

  darkHeroButtonBuy.classList.toggle('dark-colour');

  darkProductSvgFirst.classList.toggle('darkProductSvg');
  darkProductSvgSecond.classList.toggle('darkProductSvg');
  darkProductSvgThird.classList.toggle('darkProductSvg');

  darkHeroSvg.classList.toggle('dark-colour');

  darkHeroSvgLight.classList.toggle('darkProductSvg');

  darkAboutBg.classList.toggle('darkAboutBg');

  darkAboutText.classList.toggle('darkAboutText');

  darkAboutBtn.classList.toggle('dark-colour');

  darkAdvBg.classList.toggle('darkAboutBg');

  darkAdvTextFirst.classList.toggle('darkAboutText');
  darkAdvTextSecond.classList.toggle('darkAboutText');
  darkAdvTextThird.classList.toggle('darkAboutText');

  darkGalleryBg.classList.toggle('darkGalleryBg');

  // darkCustBgFirst.classList.toggle('darkGalleryBg');
  // darkCustBgSecond.classList.toggle('darkGalleryBg');
  // darkCustBgThird.classList.toggle('darkCustBgThird');

  darkContactsBg.classList.toggle('darkAboutBg');

  // darkContactsCardFirst.classList.toggle('darkContactsCard');
  // darkContactsCardSecond.classList.toggle('darkContactsCard');
  // darkContactsCardThird.classList.toggle('darkContactsCard');

  darkContactsBtn.classList.toggle('dark-colour');
  
    darkFooterBg.classList.toggle('darkAboutBg');
}