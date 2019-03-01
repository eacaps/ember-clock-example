import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { action, computed } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';
import { reads } from '@ember-decorators/object/computed';
/**
* This is a container component that contains functionality for settings
*/
export default class TimeContainer extends Component {

    constructor(props) {
        super(props);
        this.set('now', new Date());
        setInterval(() => {
            this.set('now', new Date());
        }, 1000
        );
    }

    /**
     * The method 
     * @param  {String} setting_name [description]
     * @param  {String} value        [description]
    */
    @action
    toggleDisplay() {
        this.set('militaryFormat', !this.get('militaryFormat'));
    }

    get layout() {
        return hbs`
      {{yield
        (hash
          theTime=now
          militaryFormat=militaryFormat
          toggleDisplay=(action 'toggleDisplay')
        )
      }}
    `;
    }
}