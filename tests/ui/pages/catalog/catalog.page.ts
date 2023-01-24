import Button from '../../elements/button';
import InputField from '../../elements/input-field';
import List from '../../elements/list';
import TextBox from '../../elements/text-box';
import BasePage from '../base-page';

const filterWithSelect = (filterName: string) => `#select-label-id:has-text('${filterName}') >> ..`;
const filterWithInput = (filterName: string) => `label:text-is("${filterName}") >> ..`;
const searchBar = `[placeholder="Search"]`;
const cleanSearchBarButton = `[placeholder="Search"] >> .. >> [title="Clear"]`;
const filterList = `[role="listbox"]`;
const filterOption = `[role="option"]`;
const filterWithInputOption = `[role="presentation"]`;
const listItemName = (name: string) => `a:has-text('${name}')`;
const tab = (name: string) => `[role="tab"]:has-text('${name}')`;
const searchButton = `[placeholder="Search"] >> ..`;
const noMatchesFound = `text=No matches found`;
const resultList = `#results-list`;
const listItem = `a[class][href]`;
export default class CatalogPage extends BasePage {
  get searchBar() {
    return new InputField(this.page, searchBar);
  }

  get alertNoMatchesFound() {
    return new TextBox(this.page, noMatchesFound);
  }

  get resultsList() {
    return new List(this.page, resultList, listItem);
  }

  get cleanSearchBar() {
    return new Button(this.page, cleanSearchBarButton);
  }

  async openFilterWithSelect(filterName: string) {
    await this.page.locator(filterWithSelect(filterName)).click();
  }

  async chooseOption(option: string) {
    await this.page.click(`${filterList} >> ${filterOption}:has-text('${option}')`);
  }

  async searchByTextInFilter(filter: string, text: string) {
    await this.page.locator(`${filterWithInput(filter)} >> input`).fill(text);
    await this.page.locator(`${filterWithInputOption}:has-text('${text}')`).click();
  }

  async openFilterWithInput(filterName: string) {
    await this.page.locator(filterWithInput(filterName)).click();
  }

  async isListItemVisible(name: string): Promise<boolean> {
    return this.resultsList.isListItemVisible(name);
  }

  async clickOnListItem(name: string) {
    await this.page.locator(listItemName(name)).click();
  }

  async clickTab(name: string) {
    return this.page.locator(tab(name)).click();
  }

  async searchBy(text: string) {
    await this.searchBar.fill(text);
    await this.page.locator(searchBar).press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async isAlertVisible(): Promise<boolean> {
    return this.alertNoMatchesFound.isVisible();
  }

  async isAlertHidden(): Promise<boolean> {
    return this.alertNoMatchesFound.isHidden();
  }

  async countListItems(): Promise<number> {
    return this.resultsList.count();
  }
}
