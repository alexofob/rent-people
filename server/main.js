import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_adds.js';
import configureServices from './modules/configure_services'

publications();
methods();
addInitialData();
configureServices();
