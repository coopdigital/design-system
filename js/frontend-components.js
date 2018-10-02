import '../scss/main.scss';

import { $, $$ } from './modules/bling';
import coopCheckRadio from '@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios';

if ($('.coop-c-checkbox-radio')) {
  coopCheckRadio($$('.coop-c-checkbox-radio'));
}
