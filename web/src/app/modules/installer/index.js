/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import cfg from 'app/config';
import { initWithSite, initWithApp } from './flux/installer/actions';
import Installer from './components/main.jsx';
import './flux';

const routes = [
  {
    title: 'Installer',
    childRoutes: [
      {
        path: cfg.routes.installerNewSite,
        onEnter: initWithApp,
        component: Installer
      }, {
        path: cfg.routes.installerExistingSite,
        onEnter: initWithSite,
        component: Installer
      }
    ]
  }
]

export default routes;
