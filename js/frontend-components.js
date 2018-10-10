import '../scss/main.scss';

import { $, $$ } from './modules/bling';
import coopCheckRadio from '@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios';
import coopGlobalNav from '@coopdigital/coop-frontend-components/global/global-nav/global-nav';

if ($('.coop-c-checkbox-radio')) {
  coopCheckRadio($$('.coop-c-checkbox-radio'));
}

if ($('.coop-c-nav')) {
  coopGlobalNav($$('.coop-c-nav'));
}
