import axios from 'axios';
import {livewire_hot_reload} from 'virtual:livewire-hot-reload'

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

livewire_hot_reload();
