webpackJsonp([0], {'1qxm': function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {email: {type: String, required: !0}}, data: function() { return {emailUpdate: '', showEditView: !1, enableSave: !1} }, computed: {emailUp: function() { return this.emailUpdate }, emailProp: function() { return this.email }}, watch: {emailUp: function() { this.emailUpdate !== this.email ? this.enableSave = !0 : this.enableSave = !1 }, emailProp: function() { this.emailUpdate = JSON.parse(i()(this.email)) }}, methods: {cancelEdit: function() { console.log('Name: cancelling...'), this.emailUpdate = JSON.parse(i()(this.email)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }}} }, '1yrh': function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-067e4d6c]{position:relative;padding:0;margin:0}.topright[data-v-067e4d6c]{position:absolute;top:0;right:0}', '']) }, '50V7': function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-6d622d12]{position:relative;padding:0;margin:0}.topright[data-v-6d622d12]{position:absolute;top:0;right:0}.topright-2[data-v-6d622d12]{position:absolute;top:0;right:32px}', '']) }, '6ZMA': function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {phone: {type: Object, required: !0}}, data: function() { return {phoneUpdate: {mobile: '', business: '', home: ''}, showEditView: !1, enableSave: !1} }, computed: {phoneNumberUp: function() { return this.phoneUpdate.mobile + this.phoneUpdate.business + this.phoneUpdate.home }, phoneNumberProp: function() { return this.phone.mobile + ' ' + this.phone.business + ' ' + this.phone.home }}, watch: {phoneNumberUp: function() { this.phoneUpdate.mobile !== this.phone.mobile || this.phoneUpdate.business !== this.phone.business || this.phoneUpdate.home !== this.phone.home ? this.enableSave = !0 : this.enableSave = !1 }, phoneNumberProp: function() { this.phoneUpdate = JSON.parse(i()(this.phone)) }}, methods: {cancelEdit: function() { this.phoneUpdate = JSON.parse(i()(this.phone)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }, updateAttribute: function() { this.$emit('updatePhoneNumber', this.phoneUpdate), this.enableSave = !1 }}} }, '7Y4W': function(t, e, s) { 'use strict'; var a = s('9yxg'), i = s('cuAY'), o = !1; var n = function(t) { o || s('YGLL') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-595f1623', null); r.options.__file = 'components/profile/address.vue', e.a = r.exports }, '8dtO': function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('div', [s('v-card-text', {staticClass: 'pl-4 pr-4'}, [s('div', {staticClass: 'tool a-0 ma-0'}, [s('div', {staticClass: 'caption mb-1'}, [t._v('Name')]), s('v-spacer'), s('v-btn', {staticClass: 'pa-0 ma-0 topright', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.showEditView = !t.showEditView }}}, [t.fullNameUp !== '  ' ? s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('edit')]) : s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('mdi-plus-circle-outline')])], 1)], 1), s('div', {staticClass: 'body-2'}, [t._v(t._s(t.fullNameUp === '  ' ? '...' : t.fullNameUp))])]), t.showEditView ? s('div', {staticClass: 'pt-2 pl-2 pr-2 pb-2 indigo lighten-5'}, [s('v-card-text', {staticClass: 'indigo lighten-5'}, [s('v-text-field', {attrs: {label: 'First Name'}, model: {value: t.nameUpdate.first, callback: function(e) { t.$set(t.nameUpdate, 'first', e) }, expression: 'nameUpdate.first'}}), s('v-text-field', {attrs: {label: 'Middle Name'}, model: {value: t.nameUpdate.middle, callback: function(e) { t.$set(t.nameUpdate, 'middle', e) }, expression: 'nameUpdate.middle'}}), s('v-text-field', {attrs: {label: 'Last Name'}, model: {value: t.nameUpdate.last, callback: function(e) { t.$set(t.nameUpdate, 'last', e) }, expression: 'nameUpdate.last'}})], 1), s('v-card-actions', [s('v-btn', {staticClass: 'ml-4', attrs: {disabled: !t.enableSave, small: ''}, on: {click: function(e) { t.cancelEdit() }}}, [t._v('CANCEL')]), s('v-spacer'), s('v-btn', {attrs: {small: ''}, on: {click: function(e) { t.closeEdit() }}}, [t._v('CLOSE')]), s('v-btn', {staticClass: 'mr-4', attrs: {disabled: !t.enableSave, small: '', color: 'success'}, on: {click: function(e) { t.updateAttribute() }}}, [t._v('SAVE')])], 1)], 1) : t._e()], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, '9EfJ': function(t, e, s) { 'use strict'; var a = s('1qxm'), i = s('tXgA'), o = !1; var n = function(t) { o || s('9tWU') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-00c32b8b', null); r.options.__file = 'components/profile/email.vue', e.a = r.exports }, '9tWU': function(t, e, s) { var a = s('qDJV'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('351d49b8', a, !1, {sourceMap: !1}) }, '9yxg': function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {caption: {type: String, required: !0}, address: {type: Object, required: !0}}, data: function() { return {menu: !1, modal: !1, addressUpdate: {line: '', city: '', state: '', zipcode: '', country: ''}, showEditView: !1, enableSave: !1} }, computed: {addressUp: function() { return this.addressUpdate.line + this.addressUpdate.city + this.addressUpdate.state + this.addressUpdate.zipcode + this.addressUpdate.country }, addressProp: function() { return this.address.line + this.address.city + this.address.state + this.address.zipcode + this.address.country }}, watch: {addressUp: function() { this.addressUpdate.line !== this.address.line || this.addressUpdate.city !== this.address.city || this.addressUpdate.state !== this.address.state || this.addressUpdate.zipcode !== this.address.zipcode || this.addressUpdate.country !== this.address.country ? this.enableSave = !0 : this.enableSave = !1 }, addressProp: function() { console.log(JSON.parse(i()(this.address))), JSON.parse(i()(this.address)) === 'none' ? (this.address.line = 'NA', this.address.city = 'NA', this.address.state = 'NA', this.address.zipcode = 'NA', this.address.country = 'NA', this.addressUpdate = JSON.parse(i()(this.address))) : this.addressUpdate = JSON.parse(i()(this.address)) }}, methods: {cancelEdit: function() { this.addressUpdate = JSON.parse(i()(this.address)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }, updateAttribute: function() { this.$emit('updateAddress', this.addressUpdate), this.enableSave = !1 }}} }, Artd: function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {caption: {type: String, required: !0}, birthdate: {type: String, required: !0}}, data: function() { return {birthDateUpdate: '', showEditView: !1, enableSave: !1} }, computed: {birthDateUp: function() { return this.birthDateUpdate }, birthDateProp: function() { return this.birthdate }}, watch: {birthDateUp: function() { this.birthDateUpdate !== this.birthdate ? this.enableSave = !0 : this.enableSave = !1 }, birthDateProp: function() { this.birthDateUpdate = JSON.parse(i()(this.birthdate)) }}, methods: {cancelEdit: function() { this.birthDateUpdate = JSON.parse(i()(this.birthdate)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }, updateAttribute: function() { this.$emit('updateBirthDate', this.birthDateUpdate), this.enableSave = !1 }}} }, Clsq: function(t, e, s) { var a = s('rgHF'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('59b57db9', a, !1, {sourceMap: !1}) }, EBec: function(t, e, s) { var a = s('mfjv'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('52ff647e', a, !1, {sourceMap: !1}) }, JcDc: function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('v-container', {staticClass: 'mt-3', attrs: {'grid-list-md': ''}}, [s('v-layout', {attrs: {row: '', wrap: ''}}, [s('v-flex', {attrs: {xl12: '', lg12: '', md12: '', sm12: '', xs12: ''}}, [s('v-card', {staticClass: 'elevation-0 transparent pa-4 ml-4 mr-4'}, [s('div', {staticClass: 'headline mb-2'}, [t._v('User Profile')]), s('v-layout', {attrs: {row: '', 'justify-center': ''}}, [s('v-flex', {staticClass: 'hidden-xs-only', attrs: {xl4: '', lg4: '', md4: '', sm4: ''}}, [s('v-card', {staticClass: 'elevation-0 mr-2 transparent'}, [s('div', {staticClass: 'body-1'}), s('v-card', [s('v-card-media', {attrs: {src: t.userModel.avatar_url, height: '200px'}}), s('v-card-title', {attrs: {'primary-title': ''}}, [s('div', [s('h3', {staticClass: 'headline mb-0'}, [t._v(t._s(t.userModel.name.first) + ', ' + t._s(t.userModel.name.last))])])])], 1)], 1)], 1), s('v-flex', {attrs: {xl8: '', lg8: '', md8: '', sm8: ''}}, [s('v-card', {staticClass: 'mb-2'}, [s('v-toolbar', {staticClass: 'elevation-1', attrs: {dense: ''}}, [s('v-toolbar-title', [t._v('Personal Details')])], 1), s('app-user-name', {attrs: {name: t.userModel.name}, on: {updateName: function(e) { t.updateName(e) }}}), s('v-divider'), s('app-user-email', {attrs: {email: t.userModel.emailAddress}}), s('v-divider'), s('v-divider'), s('app-phone-number', {attrs: {phone: t.userModel.phoneNumber}, on: {updatePhoneNumber: function(e) { t.updatePhone(e) }}}), s('v-divider'), s('app-address', {attrs: {address: t.userModel.address, caption: 'Home Address'}, on: {updateAddress: function(e) { t.updateAddress(e, 'home') }}}), s('v-divider')], 1), s('v-dialog', {attrs: {'max-width': '500px'}, model: {value: t.addCustomForm, callback: function(e) { t.addCustomForm = e }, expression: 'addCustomForm'}}, [s('v-card', [s('v-toolbar', {staticClass: 'elevation-0', attrs: {dense: ''}}, [s('v-toolbar-title', [t._v('Add Custom Attribute')])], 1), s('app-custom', {attrs: {obj: {prop1: '', prop2: '', prop3: '', prop4: '', prop5: ''}, 'new-entry': !0, caption: 'Custom Attribute'}, on: {add: function(e) { t.addCustom(e) }, close: function(e) { t.addCustomForm = !t.addCustomForm }}})], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, KjL8: function(t, e, s) { 'use strict'; var a = function() { var t = this.$createElement, e = this._self._c || t; return e('div', [e('Profile')], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, 'L+uE': function(t, e, s) { 'use strict'; var a = s('vY/p'), i = s('RgNV'), o = !1; var n = function(t) { o || s('epLJ') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-6d622d12', null); r.options.__file = 'components/profile/custom.vue', e.a = r.exports }, NaKC: function(t, e, s) { 'use strict'; var a = s('jrCn'), i = s('8dtO'), o = !1; var n = function(t) { o || s('gYG1') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-067e4d6c', null); r.options.__file = 'components/profile/name.vue', e.a = r.exports }, Oyoe: function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a), o = s('NaKC'), n = s('9EfJ'), r = s('RLhm'), d = s('WK6X'), l = s('7Y4W'), c = s('L+uE'), p = s('2DBr'); e.a = {components: {'app-user-name': o.a, 'app-user-email': n.a, 'app-birth-date': r.a, 'app-phone-number': d.a, 'app-address': l.a, 'app-custom': c.a}, data: function() { return {userModel: {name: {first: '', middle: '', last: ''}, emailAddress: '', project: 'default', birthDate: '', phoneNumber: {mobile: '', business: '', home: ''}, address: {line: '', city: '', state: '', zipcode: '', country: ''}, custom: []}, addCustomForm: !1} }, beforeMount: function() { this.getAttributes() }, methods: {getAttributes: function() { this.mapAttributes(this.$store.state.modules.AuthStore.humanity_attributes) }, mapAttributes: function(t) { this.userModel.emailAddress = 'info@andrewsgroup.com', this.userModel.avatar_url = t.avatar_url, this.userModel.address = {line: t.line || 'NA', city: t.city || 'NA', state: t.state || 'NA', zipcode: t.zipcode || 'NA', country: t.country || 'NA'}, console.log(this.userModel.address), this.userModel.name = {first: t.firstname, middle: t.middle_name, last: t.lastname}, this.userModel.phoneNumber = {mobile: t.cell_phone, home: t.cell_phone, business: t.cell_phone} }, updateName: function(t) { var e = this; console.log('updating name...'); var s = [], a = {Name: 'given_name', Value: t.first}, i = {Name: 'middle_name', Value: t.middle}, o = {Name: 'family_name', Value: t.last}, n = new p.CognitoUserAttribute(a), r = new p.CognitoUserAttribute(i), d = new p.CognitoUserAttribute(o); s.push(n), s.push(r), s.push(d), this.$store.state.cognitoUser.updateAttributes(s, function(s, a) { s ? console.log('error: ' + s) : (console.log('call result: ' + a), e.userModel.name.first = t.first, e.userModel.name.middle = t.middle, e.userModel.name.last = t.last) }) }, updateBirthDate: function(t) { var e = this; console.log('updating birthday date...'); var s = [], a = {Name: 'birthdate', Value: t}, i = new p.CognitoUserAttribute(a); console.log(i), s.push(i), this.$store.state.cognitoUser.updateAttributes(s, function(s, a) { s ? console.log('error: ' + s) : e.userModel.birthDate = t }) }, updatePhone: function(t) { var e = this; console.log('updating phone number...'); var s = [], a = {Name: 'custom:phone_numbers', Value: i()(t)}, o = new p.CognitoUserAttribute(a); s.push(o), this.$store.state.cognitoUser.updateAttributes(s, function(s, a) { s ? console.log('error: ' + i()(s)) : (console.log('call result: ' + a), e.userModel.phoneNumber = JSON.parse(i()(t))) }) }, updateAddress: function(t, e) { var s = this; console.log('updating address...'); var a = [], o = ''; if (e === 'home')o = i()(t); else { if (e !== 'business') return; o = i()(t) } var n = {Name: 'custom:' + e + '_address', Value: o}, r = new p.CognitoUserAttribute(n); a.push(r), this.$store.state.cognitoUser.updateAttributes(a, function(a, o) { a ? console.log('error: ' + i()(a)) : (console.log('call result: ' + o), e === 'home' ? (console.log('home address updated'), s.userModel.homeAddress = JSON.parse(i()(t))) : e === 'business' && (console.log('business address updated'), s.userModel.businessAddress = JSON.parse(i()(t)))) }) }, addCustom: function(t) { console.log('adding custom attribute ...'); var e = this.userModel.custom.slice(); e.push(t), this.updateCustomAtrribute(e) }, updateCustom: function(t, e) { console.log('updating custom attribute ...'); var s = this.userModel.custom.slice(); s.splice(e, 1, t), this.updateCustomAtrribute(s) }, deleteCustom: function(t) { console.log('deleting custom attribute at index ' + t); var e = this.userModel.custom.slice(); t > -1 && e.splice(t, 1), this.updateCustomAtrribute(e) }, updateCustomAtrribute: function(t) { var e = this; console.log('xxxx'); var s = [], a = {Name: 'custom:custom_attribute', Value: i()(t)}, o = new p.CognitoUserAttribute(a); s.push(o), console.log(this.$store.state.cognitoUser), this.$store.state.cognitoUser.updateAttributes(s, function(s, a) { s ? console.log('error: ' + i()(s)) : (console.log('call result: ' + a), console.log('custom attribute updated'), e.addCustomForm = !1, e.userModel.custom = t.slice()) }) }}} }, QAk0: function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('div', [s('v-card-text', {staticClass: 'pl-4 pr-4'}, [s('div', {staticClass: 'tool a-0 ma-0'}, [s('div', {staticClass: 'caption mb-1'}, [s('v-icon', {staticClass: 'mr-1', attrs: {small: ''}}, [t._v('phone')]), t._v('\n        Phone Number\n      ')], 1), s('v-spacer'), s('v-btn', {staticClass: 'pa-0 ma-0 topright', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.showEditView = !t.showEditView }}}, [t.phoneUpdate.mobile === '' && t.phoneUpdate.business === '' && t.phoneUpdate.home === '' ? s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('\n          mdi-plus-circle-outline\n        ')]) : s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('edit')])], 1)], 1), s('v-chip', [s('v-avatar', [s('v-icon', {attrs: {color: 'amber'}}, [t._v('mdi-cellphone')])], 1), t._v('\n      ' + t._s(t.phoneUpdate.mobile === '' ? '...' : t.phoneUpdate.mobile) + '\n    ')], 1), s('v-chip', [s('v-avatar', [s('v-icon', {attrs: {color: 'amber'}}, [t._v('mdi-deskphone')])], 1), t._v('\n      ' + t._s(t.phoneUpdate.business === '' ? '...' : t.phoneUpdate.business) + '\n    ')], 1), s('v-chip', [s('v-avatar', [s('v-icon', {attrs: {color: 'amber'}}, [t._v('mdi-home-variant')])], 1), t._v('\n      ' + t._s(t.phoneUpdate.home === '' ? '...' : t.phoneUpdate.home) + '\n    ')], 1)], 1), t.showEditView ? s('div', {staticClass: 'pt-2 pl-2 pr-2 pb-2 indigo lighten-5'}, [s('v-card-text', {staticClass: 'indigo lighten-5'}, [s('v-text-field', {attrs: {label: 'Mobile Number'}, model: {value: t.phoneUpdate.mobile, callback: function(e) { t.$set(t.phoneUpdate, 'mobile', e) }, expression: 'phoneUpdate.mobile'}}), s('v-text-field', {attrs: {label: 'Business Number'}, model: {value: t.phoneUpdate.business, callback: function(e) { t.$set(t.phoneUpdate, 'business', e) }, expression: 'phoneUpdate.business'}}), s('v-text-field', {attrs: {label: 'Home Number'}, model: {value: t.phoneUpdate.home, callback: function(e) { t.$set(t.phoneUpdate, 'home', e) }, expression: 'phoneUpdate.home'}})], 1), s('v-card-actions', [s('v-btn', {staticClass: 'ml-4', attrs: {disabled: !t.enableSave, small: ''}, on: {click: function(e) { t.cancelEdit() }}}, [t._v('CANCEL')]), s('v-spacer'), s('v-btn', {attrs: {small: ''}, on: {click: function(e) { t.closeEdit() }}}, [t._v('CLOSE')]), s('v-btn', {staticClass: 'mr-4', attrs: {disabled: !t.enableSave, small: '', color: 'success'}, on: {click: function(e) { t.updateAttribute() }}}, [t._v('SAVE')])], 1)], 1) : t._e()], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, RLhm: function(t, e, s) { 'use strict'; var a = s('Artd'), i = s('fCJz'), o = !1; var n = function(t) { o || s('Clsq') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-04d138dc', null); r.options.__file = 'components/profile/birthdate.vue', e.a = r.exports }, RgNV: function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('div', [s('v-card-text', {staticClass: 'pl-4 pr-4'}, [s('div', {staticClass: 'tool a-0 ma-0'}, [s('div', {staticClass: 'caption mb-1'}, [t._v(t._s(t.caption))]), s('v-spacer'), t.newEntry ? t._e() : s('v-btn', {staticClass: 'pa-0 ma-0 topright-2', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.deleteAttribute() }}}, [s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('delete')])], 1), t.newEntry ? t._e() : s('v-btn', {staticClass: 'pa-0 ma-0 topright', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.showEditView = !t.showEditView }}}, [s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('edit')])], 1)], 1), s('div', {staticClass: 'body-2'}, [t._v(t._s(t.objUp === '    ' ? '...' : t.objUp))])]), t.showEditView ? s('div', {staticClass: 'pt-2 pl-2 pr-2 pb-2 indigo lighten-5'}, [s('v-card-text', {staticClass: 'indigo lighten-5'}, [s('v-text-field', {attrs: {label: 'Humanity Id'}, model: {value: t.objUpdate.humanity_id, callback: function(e) { t.$set(t.objUpdate, 'humanity_id', e) }, expression: 'objUpdate.humanity_id'}}), s('v-text-field', {attrs: {label: 'Property 2'}, model: {value: t.objUpdate.prop2, callback: function(e) { t.$set(t.objUpdate, 'prop2', e) }, expression: 'objUpdate.prop2'}}), s('v-text-field', {attrs: {label: 'Property 3'}, model: {value: t.objUpdate.prop3, callback: function(e) { t.$set(t.objUpdate, 'prop3', e) }, expression: 'objUpdate.prop3'}}), s('v-text-field', {attrs: {label: 'Property 4'}, model: {value: t.objUpdate.prop4, callback: function(e) { t.$set(t.objUpdate, 'prop4', e) }, expression: 'objUpdate.prop4'}}), s('v-text-field', {attrs: {label: 'Property 5'}, model: {value: t.objUpdate.prop5, callback: function(e) { t.$set(t.objUpdate, 'prop5', e) }, expression: 'objUpdate.prop5'}})], 1), s('v-card-actions', [s('v-btn', {staticClass: 'ml-4', attrs: {disabled: !t.enableSave && !t.newEntry, small: ''}, on: {click: function(e) { t.cancelEdit() }}}, [t._v('CANCEL')]), s('v-spacer'), t.newEntry ? t._e() : s('v-btn', {attrs: {small: ''}, on: {click: function(e) { t.closeEdit() }}}, [t._v('CLOSE')]), s('v-btn', {staticClass: 'mr-4', attrs: {disabled: !t.enableSave, small: '', color: 'success'}, on: {click: function(e) { t.updateAttribute() }}}, [t._v('SAVE')])], 1)], 1) : t._e()], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, S03h: function(t, e, s) { var a = s('VLK7'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('b90c3e78', a, !1, {sourceMap: !1}) }, T7x3: function(t, e, s) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}); var a = s('dl7p'), i = s('KjL8'), o = s('VU/8')(a.a, i.a, !1, null, null, null); o.options.__file = 'pages/people/Profile.vue', e.default = o.exports }, VLK7: function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-523e7dc1]{position:relative;padding:0;margin:0}.topright[data-v-523e7dc1]{position:absolute;top:0;right:10px}', '']) }, WK6X: function(t, e, s) { 'use strict'; var a = s('6ZMA'), i = s('QAk0'), o = !1; var n = function(t) { o || s('EBec') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-450ae45d', null); r.options.__file = 'components/profile/phone.vue', e.a = r.exports }, YGLL: function(t, e, s) { var a = s('zxGk'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('31756ab3', a, !1, {sourceMap: !1}) }, cuAY: function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('div', [s('v-card-text', {staticClass: 'pl-4 pr-4'}, [s('div', {staticClass: 'tool a-0 ma-0'}, [s('div', {staticClass: 'caption mb-1'}, [s('v-icon', {staticClass: 'mr-1', attrs: {small: ''}}, [t._v('location_on')]), t._v('\n        ' + t._s(t.caption) + '\n      ')], 1), s('v-spacer'), s('v-btn', {staticClass: 'pa-0 ma-0 topright', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.showEditView = !t.showEditView }}}, [t.addressUp !== '' ? s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('edit')]) : s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('mdi-plus-circle-outline')])], 1)], 1), t.addressUp === '' ? s('div', {staticClass: 'body-2'}, [t._v('...')]) : s('div', {staticClass: 'body-2'}, [t.addressUpdate.line !== '' ? s('div', [t._v(t._s(t.addressUpdate.line))]) : t._e(), t.addressUpdate.city + t.addressUpdate.state + t.addressUpdate.zipcode + t.addressUpdate.country !== '' ? s('div', [t._v('\n        ' + t._s(t.addressUpdate.city + ' ' + t.addressUpdate.state + ' ' + t.addressUpdate.zipcode + ' ' + t.addressUpdate.country) + '\n      ')]) : t._e()])]), t.showEditView ? s('div', {staticClass: 'pt-2 pl-2 pr-2 pb-2 indigo lighten-5'}, [s('v-card-text', {staticClass: 'indigo lighten-5'}, [s('v-text-field', {attrs: {label: 'Address Line'}, model: {value: t.addressUpdate.line, callback: function(e) { t.$set(t.addressUpdate, 'line', e) }, expression: 'addressUpdate.line'}}), s('v-layout', {attrs: {row: '', wrap: ''}}, [s('v-flex', [s('v-text-field', {attrs: {label: 'Town/City'}, model: {value: t.addressUpdate.city, callback: function(e) { t.$set(t.addressUpdate, 'city', e) }, expression: 'addressUpdate.city'}})], 1), s('v-flex', [s('v-text-field', {attrs: {label: 'Province/State'}, model: {value: t.addressUpdate.state, callback: function(e) { t.$set(t.addressUpdate, 'state', e) }, expression: 'addressUpdate.state'}})], 1)], 1), s('v-layout', {attrs: {row: '', wrap: ''}}, [s('v-flex', [s('v-text-field', {attrs: {label: 'Zip Code'}, model: {value: t.addressUpdate.zipcode, callback: function(e) { t.$set(t.addressUpdate, 'zipcode', e) }, expression: 'addressUpdate.zipcode'}})], 1), s('v-flex')], 1)], 1), s('v-card-actions', [s('v-btn', {staticClass: 'ml-4', attrs: {disabled: !t.enableSave, small: ''}, on: {click: function(e) { t.cancelEdit() }}}, [t._v('CANCEL')]), s('v-spacer'), s('v-btn', {attrs: {small: ''}, on: {click: function(e) { t.closeEdit() }}}, [t._v('CLOSE')]), s('v-btn', {staticClass: 'mr-4', attrs: {disabled: !t.enableSave, small: '', color: 'success'}, on: {click: function(e) { t.updateAttribute() }}}, [t._v('SAVE')])], 1)], 1) : t._e()], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, dl7p: function(t, e, s) { 'use strict'; var a = s('Xxa5'), i = s.n(a), o = s('exGp'), n = s.n(o), r = s('whUH'), d = s('mtWM'), l = s.n(d); e.a = {fetch: (function() { var t = n()(i.a.mark(function t(e) { var s, a, o, n = e.store; e.pars; return i.a.wrap(function(t) { for (;;) switch (t.prev = t.next) { case 0:if (s = {username: n.state.modules.AuthStore.user.attributes.humanityUsername, password: n.state.modules.AuthStore.user.attributes.humanityPassword, userId: n.state.modules.AuthStore.user.attributes.humanityID}, console.log(s), n.state.modules.AuthStore.humanity_attributes) { t.next = 9; break } return t.next = 5, l.a.post('/api/users/gethumanitydata', s); case 5:a = t.sent, o = a.data, n.dispatch('modules/AuthStore/setHumanityData', o), n.dispatch('modules/TimeClockStore/setEmployeeTimeClockStatus', o); case 9:case 'end':return t.stop() } }, t, this) })); return function(e) { return t.apply(this, arguments) } }()), components: {Profile: r.a}} }, epLJ: function(t, e, s) { var a = s('50V7'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('cc3c3186', a, !1, {sourceMap: !1}) }, fCJz: function(t, e, s) { 'use strict'; var a = function() { var t = this, e = t.$createElement, s = t._self._c || e; return s('div', [s('v-card-text', {staticClass: 'pl-4 pr-4'}, [s('div', {staticClass: 'tool a-0 ma-0'}, [s('div', {staticClass: 'caption mb-1'}, [s('v-icon', {staticClass: 'mr-1', attrs: {small: ''}}, [t._v('date_range')]), t._v('\n        ' + t._s(t.caption) + '\n      ')], 1), s('v-spacer'), s('v-btn', {staticClass: 'pa-0 ma-0 topright', attrs: {icon: '', flat: '', small: ''}, on: {click: function(e) { t.showEditView = !t.showEditView }}}, [t.birthDateUpdate !== '' ? s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('edit')]) : s('v-icon', {attrs: {small: '', color: 'indigo lighten-1'}}, [t._v('mdi-plus-circle-outline')])], 1)], 1), s('div', {staticClass: 'body-2'}, [t._v(t._s(t.birthDateUpdate === '' ? '...' : t.birthDateUpdate))])]), t.showEditView ? s('div', {staticClass: 'pt-2 pl-2 pr-2 pb-2 indigo lighten-5'}, [s('v-card-text', {staticClass: 'indigo lighten-5'}, [s('v-date-picker', {staticClass: 'mb-3 grey lighten-4 black--text', attrs: {max: (new Date()).toISOString().substr(0, 10), 'full-width': ''}, model: {value: t.birthDateUpdate, callback: function(e) { t.birthDateUpdate = e }, expression: 'birthDateUpdate'}})], 1), s('v-card-actions', [s('v-btn', {staticClass: 'ml-4', attrs: {disabled: !t.enableSave, small: ''}, on: {click: function(e) { t.cancelEdit() }}}, [t._v('CANCEL')]), s('v-spacer'), s('v-btn', {attrs: {small: ''}, on: {click: function(e) { t.closeEdit() }}}, [t._v('CLOSE')]), s('v-btn', {staticClass: 'mr-4', attrs: {disabled: !t.enableSave, small: '', color: 'success'}, on: {click: function(e) { t.updateAttribute() }}}, [t._v('SAVE')])], 1)], 1) : t._e()], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, gYG1: function(t, e, s) { var a = s('1yrh'); typeof a === 'string' && (a = [[t.i, a, '']]), a.locals && (t.exports = a.locals); s('rjj0')('2ce74efd', a, !1, {sourceMap: !1}) }, jrCn: function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {name: {type: Object, required: !0}}, data: function() { return {nameUpdate: {first: '', middle: '', last: ''}, showEditView: !1, enableSave: !1} }, computed: {fullNameUp: function() { return this.nameUpdate.first + ' ' + this.nameUpdate.middle + ' ' + this.nameUpdate.last }, fullNameProp: function() { return console.log(this.name), this.name.first + ' ' + this.name.middle + ' ' + this.name.last }}, watch: {fullNameUp: function() { this.nameUpdate.first !== this.name.first || this.nameUpdate.middle !== this.name.middle || this.nameUpdate.last !== this.name.last ? this.enableSave = !0 : this.enableSave = !1 }, fullNameProp: function() { console.log(this.name), this.nameUpdate = JSON.parse(i()(this.name)) }}, methods: {cancelEdit: function() { this.nameUpdate = JSON.parse(i()(this.name)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }, updateAttribute: function() { this.$emit('updateName', this.nameUpdate), this.enableSave = !1 }}} }, mfjv: function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-450ae45d]{position:relative;padding:0;margin:0}.topright[data-v-450ae45d]{position:absolute;top:0;right:0}', '']) }, qDJV: function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-00c32b8b]{position:relative;padding:0;margin:0}.topright[data-v-00c32b8b]{position:absolute;top:0;right:0}', '']) }, rgHF: function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-04d138dc]{position:relative;padding:0;margin:0}.topright[data-v-04d138dc]{position:absolute;top:0;right:0}', '']) }, tXgA: function(t, e, s) { 'use strict'; var a = function() { var t = this.$createElement, e = this._self._c || t; return e('div', [e('v-card-text', {staticClass: 'pl-4 pr-4'}, [e('div', {staticClass: 'caption mb-1'}, [e('v-icon', {staticClass: 'mr-1', attrs: {small: ''}}, [this._v('email')]), this._v('\n      Email Address\n    ')], 1), e('div', {staticClass: 'body-2'}, [this._v(this._s(this.emailUp === '  ' ? '...' : this.emailUp))])])], 1) }; a._withStripped = !0; var i = {render: a, staticRenderFns: []}; e.a = i }, 'vY/p': function(t, e, s) { 'use strict'; var a = s('mvHQ'), i = s.n(a); e.a = {props: {obj: {type: Object, required: !0}, caption: {type: String, required: !0}, delete: {default: !0, type: Boolean}, newEntry: {default: !1, type: Boolean}}, data: function() { return {objUpdate: {humanity_id: '', prop2: '', prop3: '', prop4: '', prop5: ''}, showEditView: !1, enableSave: !1} }, computed: {objUp: function() { return this.objUpdate.humanity_id + ' ' + this.objUpdate.prop2 + ' ' + this.objUpdate.prop3 + ' ' + this.objUpdate.prop4 + ' ' + this.objUpdate.prop5 }, objProp: function() { return this.obj.humanity_id + ' ' + this.obj.prop2 + ' ' + this.obj.prop3 + ' ' + this.obj.prop4 + ' ' + this.obj.prop5 }}, watch: {objUp: function() { this.objUpdate.humanity_id !== this.obj.humanity_id || this.objUpdate.prop2 !== this.obj.prop2 || this.objUpdate.prop3 !== this.obj.prop3 || this.objUpdate.prop4 !== this.obj.prop4 || this.objUpdate.prop5 !== this.obj.prop5 ? this.enableSave = !0 : this.enableSave = !1 }, objProp: function() { this.objUpdate = JSON.parse(i()(this.obj)) }}, created: function() { this.objUpdate = JSON.parse(i()(this.obj)), !0 === this.newEntry ? this.showEditView = !0 : this.showEditView = !1, console.log('noedit: ' + this.noedit), console.log('showEdit: ' + this.showEditView) }, methods: {cancelEdit: function() { !0 === this.newEntry ? (this.$emit('close'), this.objUpdate = {humanity_id: '', prop2: '', prop3: '', prop4: '', prop5: ''}) : this.objUpdate = JSON.parse(i()(this.obj)) }, closeEdit: function() { this.cancelEdit(), this.showEditView = !1 }, updateAttribute: function() { !0 === this.newEntry ? (this.$emit('add', this.objUpdate), this.objUpdate = {humanity_id: ''}) : this.$emit('update', this.objUpdate), this.enableSave = !1 }, deleteAttribute: function() { this.$emit('delete') }}} }, whUH: function(t, e, s) { 'use strict'; var a = s('Oyoe'), i = s('JcDc'), o = !1; var n = function(t) { o || s('S03h') }, r = s('VU/8')(a.a, i.a, !1, n, 'data-v-523e7dc1', null); r.options.__file = 'components/profile/index.vue', e.a = r.exports }, zxGk: function(t, e, s) { (t.exports = s('FZ+f')(!1)).push([t.i, '.tool[data-v-595f1623]{position:relative;padding:0;margin:0}.topright[data-v-595f1623]{position:absolute;top:0;right:0}', '']) }})
