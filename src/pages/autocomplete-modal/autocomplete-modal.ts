import {Component, ViewChild} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';

declare var google: any;

@Component({
  selector   : 'page-autocomplete-modal',
  templateUrl: 'autocomplete-modal.html',
})
export class AutocompleteModalPage {

  @ViewChild('searchbar') searchBar;

  constructor(public viewCtrl: ViewController,
              private keyboard: Keyboard) {
  }

  autocompleteItems: any;
  autocomplete: any;
  acService: any;

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.searchBar.setFocus();
      this.keyboard.show();
    }, 600);
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    let config = {
      types: ['address'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query
    };
    this.acService.getPlacePredictions(config, function (predictions, status) {
      self.autocompleteItems = [];
      if (predictions) {
        predictions.forEach(function (prediction) {
          self.autocompleteItems.push(prediction);
        });
      }
      else {
        console.log('no predictions');
      }
    });
  }
}
