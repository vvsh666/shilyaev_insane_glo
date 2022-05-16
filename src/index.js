import { accordion } from "./modules/accordion";
import { formula } from "./modules/formula";
import { formulaMobile } from "./modules/formulaMobile";
import { menu } from "./modules/menu";
import { sendForm } from "./modules/sendForm";
import { showHidePopups } from "./modules/showHidePopups";
import { showRepairTypes } from "./modules/showRepairTypes";
import { sliderPortfolio } from "./modules/sliderPortfolio";
import { sliderPortfolioMobile } from "./modules/sliderPortfolioMobile";
import { sliderPortfolioPopup } from "./modules/sliderPortfolioPopup";
import { sliderReviews } from "./modules/sliderReviews";
import { sliderTransparency } from "./modules/sliderTransparency";
import { telMask } from "./modules/telMask";

menu()
showRepairTypes()
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
for (let form of document.forms) {
    sendForm(form.id)
}
