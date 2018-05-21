/*
 * Modifications copyright (C) 2018 morimolymoly
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import { Auth, Storage } from "aws-amplify"
// import AWSExports from "../awsmobilejs/#current-backend-info/aws-exports"
import awsmobile from "./aws-exports"
import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify, {
	theme: {
		primary: '#3f51b5',
		secondary: '#b0bec5',
		accent: '#8c9eff',
		error: '#b71c1c'
	}
})

export default async () => {

	Auth.configure(awsmobile)
	Storage.configure(awsmobile)

}
