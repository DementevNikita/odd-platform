import Button from '../../elements/button';
import InputField from '../../elements/input-field';
import BasePage from '../base-page';

const filterWithSelectLocator = filterName => `#select-label-id:has-text('${filterName}') >> ..`;
const filterWithInputLocator = filterName => `label:text-is("${filterName}") >> ..`;
const searchBarLocator = `[placeholder="Search"]`;
const filterListLocator = `[role="listbox"]`;
const filterOptionLocator = `[role="option"]`;
const filterWithInputOptionLocator = `[role="presentation"]`;
const listItemNameLocator = name => `a:has-text('${name}')`;
const tabLocator = name => `[role="tab"]:has-text('${name}')`;
const searchButtonLocator = `[placeholder="Search"] >> ..`;
const noMatchesFoundLocator = `text=No matches found`;

export default class CatalogPage extends BasePage {
  async openFilterWithSelect(filterName: string) {
    await this.page.locator(filterWithSelectLocator(filterName)).click();
  }

  async chooseOption(option: string) {
    await this.page.click(`${filterListLocator} >> ${filterOptionLocator}:has-text('${option}')`);
  }

  async searchByTextInFilter(filter: string, text: string) {
    await this.page.locator(`${filterWithInputLocator(filter)} >> input`).fill(text);
    await this.page.locator(`${filterWithInputOptionLocator}:has-text('${text}')`).click();
  }

  async openFilterWithInput(filterName: string) {
    await this.page.locator(filterWithInputLocator(filterName)).click();
  }

  async isListItemVisible(name: string): Promise<boolean> {
    await this.page.locator(listItemNameLocator(name)).waitFor({ state: 'visible' });
    return this.page.locator(listItemNameLocator(name)).isVisible();
  }

  async clickOnListItem(name: string) {
    await this.page.locator(listItemNameLocator(name)).click();
  }

  async clickTab(name: string) {
    return this.page.locator(tabLocator(name)).click();
  }

  get searchBar() {
    return new InputField(this.page, searchBarLocator);
  }

  async fillSearchBar(text: string) {
    await this.searchBar.fill(text);
    await this.page.locator(searchBarLocator).press('Enter');
  }

  async isListEmpty(): Promise<boolean> {
    await this.page.locator(noMatchesFoundLocator).waitFor({ state: 'visible' });
    return this.page.locator(noMatchesFoundLocator).isVisible();
  }

  async isListFull(): Promise<boolean> {
    await this.page.locator(noMatchesFoundLocator).waitFor({ state: 'hidden' });
    return this.page.locator(noMatchesFoundLocator).isHidden();
  }

  get searchButton() {
    return new Button(this.page, searchButtonLocator);
  }
}
