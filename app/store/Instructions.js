/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

Ext.define('Med-Table.store.Instructions', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Med-Table.model.Instruction',
        data: [{
            instruction: 'wash hands',
            image: 'resources/images/no-smoking.jpg'
        }, {
            instruction: 'no spice',
            image: 'resources/images/nospice_with cross-01.png'
        }, {
            instruction: 'no ice cream',
            image: 'resources/images/no icecream_with cross-01.png'
        }, {
            instruction: 'eat fruits',
            image: 'resources/images/eatfruits_with tick-01.png'
        }]
    }
});