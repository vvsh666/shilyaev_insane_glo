import { accordion } from "./modules/accordion";
import { formula } from "./modules/formula";
import { formulaMobile } from "./modules/formulaMobile";
import { menu } from "./modules/menu";
import { sendForm } from "./modules/sendForm";
import { showHidePopups } from "./modules/showHidePopups";
import { showRepairTypesPopup } from "./modules/showRepairTypesPopup";
import { sliderPortfolio } from "./modules/sliderPortfolio";
import { sliderPortfolioMobile } from "./modules/sliderPortfolioMobile";
import { sliderPortfolioPopup } from "./modules/sliderPortfolioPopup";
import { tabsRepairTypes } from "./modules/tabsRepairTypes";
import { sliderReviews } from "./modules/sliderReviews";
import { sliderTransparency } from "./modules/sliderTransparency";
import { telMask } from "./modules/telMask";

menu()
showRepairTypesPopup()
showHidePopups()
sliderTransparency()
sliderReviews()
accordion()
telMask()
formula()
formulaMobile()
sliderPortfolio()
sliderPortfolioMobile()
sliderPortfolioPopup()
tabsRepairTypes()
for (let form of document.forms) {
    sendForm(form.id)
}


