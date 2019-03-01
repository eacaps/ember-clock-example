import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { action, computed } from '@ember-decorators/object';

/**
  * This class displays a clock.
  * @prop {Function} toggleDisplay action to toggle 12/24 hour display
  * @prop {Date} theTime the time the clock shows
  * @prop {boolean} militaryFormat whether to display in 12/24 hour format
*/
export default class SimpleClock extends Component {
    @action
    _clickToggle(evt) {
        this.get('toggleDisplay')();
    }

    get elementId() {
        return 'the-clock';
    }

    /*
     * Private method to call the closure action
     */
    @computed('theTime', 'militaryFormat')
    get timeDisplay() {
        const format24 = this.get('militaryFormat');
        const the_time = this.get('theTime');
        if (format24) {
            return the_time.toString();
        } else {
            return the_time.toLocaleString();
        }
        return 'time';
    }

    get layout() {
        return hbs`
      <div id='the-time'>
        {{timeDisplay}}
      </div>
      <a onClick={{action '_clickToggle'}}>Change Format</a>
    `;
    }
}
