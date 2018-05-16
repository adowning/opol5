webpackJsonp([7], {'2scn': function(e, t, n) { 'use strict'; var i = n('Fmkg'); t.a = {layout: 'nouser', middleware: 'guest', components: {SignUp: i.a}} }, '9Y39': function(e, t, n) { 'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var i = n('2scn'), o = n('YpWS'), r = n('VU/8')(i.a, o.a, !1, null, null, null); r.options.__file = 'pages/Auth/SignUp.vue', t.default = r.exports }, Fmkg: function(e, t, n) { 'use strict'; var i = n('XKMT'), o = n('Oy3F'), r = n('VU/8')(i.a, o.a, !1, null, null, null); r.options.__file = 'components/amplify/SignUp.vue', t.a = r.exports }, Oy3F: function(e, t, n) { 'use strict'; var i = function() { var e = this, t = e.$createElement, n = e._self._c || t; return n('div', {style: e.theme.form}, [n('h1', {style: e.theme.header}, [e._v('Sign Up')]), n('div', {style: e.theme.inputRow}, [n('input', {directives: [{name: 'model', rawName: 'v-model', value: e.username, expression: 'username'}], style: e.theme.input, attrs: {placeholder: 'Username', autofocus: ''}, domProps: {value: e.username}, on: {input: function(t) { t.target.composing || (e.username = t.target.value) }}})]), n('div', {style: e.theme.inputRow}, [n('input', {directives: [{name: 'model', rawName: 'v-model', value: e.password, expression: 'password'}], style: e.theme.input, attrs: {type: 'password', placeholder: 'Password'}, domProps: {value: e.password}, on: {input: function(t) { t.target.composing || (e.password = t.target.value) }}})]), n('div', {style: e.theme.inputRow}, [n('input', {directives: [{name: 'model', rawName: 'v-model', value: e.email, expression: 'email'}], style: e.theme.input, attrs: {placeholder: 'Email'}, domProps: {value: e.email}, on: {input: function(t) { t.target.composing || (e.email = t.target.value) }}})]), n('div', {style: e.theme.actionRow}, [n('button', {style: e.theme.action, attrs: {disabled: !e.username || !e.password}, on: {click: e.signUp}}, [e._v('Sign Up')])]), n('div', {style: e.theme.footer}, [n('div', {style: e.theme.footerLeft}, [n('a', {style: e.theme.link, on: {click: e.signIn}}, [e._v('Back to Sign In')])]), n('div', {style: e.theme.footerRight}, [n('a', {style: e.theme.link, on: {click: e.confirm}}, [e._v('Confirm a Code')])])])]) }; i._withStripped = !0; var o = {render: i, staticRenderFns: []}; t.a = o }, XKMT: function(e, t, n) { 'use strict'; var i = n('Xxa5'), o = n.n(i), r = n('exGp'), a = n.n(r), s = n('cPd9'), l = (n.n(s), n('oG3W')), u = new s.Logger('SignUpComp'); t.a = {name: 'SignUp', data: function() { return {username: '', password: '', email: '', theme: l.a, error: ''} }, methods: {signUp: (function() { var e = a()(o.a.mark(function e(t) { var n; return o.a.wrap(function(e) { for (;;) switch (e.prev = e.next) { case 0:return e.prev = 0, e.next = 3, s.Auth.signUp(this.username, this.password, this.email); case 3:n = e.sent, u.debug('sign up success', n), this.$router.push('/Auth/ConfirmSignUp'), e.next = 12; break; case 8:e.prev = 8, e.t0 = e.catch(0), this.setError(e.t0), this.fireAuthNotify(this.error); case 12:case 'end':return e.stop() } }, e, this, [[0, 8]]) })); return function(t) { return e.apply(this, arguments) } }()), signIn: function() { this.$router.push('/Auth/SignIn') }, confirm: function() { this.$router.push('/Auth/ConfirmSignUp') }, setError: function(e) { this.error = e.message || e }}} }, YpWS: function(e, t, n) { 'use strict'; var i = function() { var e = this.$createElement, t = this._self._c || e; return t('div', [t('SignUp')], 1) }; i._withStripped = !0; var o = {render: i, staticRenderFns: []}; t.a = o }, oG3W: function(e, t, n) { 'use strict'; t.a = {h1: {fontWeight: '400'}, h2: {fontWeight: '400', textAlign: 'left'}, h3: {fontWeight: '400', textAlign: 'left'}, h4: {fontWeight: '400', textAlign: 'left'}, h5: {fontWeight: '400', textAlign: 'left'}, pre: {background: '#f8f8f8'}, container: {textAlign: 'center'}, section: {textAlign: 'left', padding: '0 1em'}, lineBreak: {height: '0', borderBottom: '1px solid #ededed', margin: '1em 10%'}, form: {display: 'inline-block', width: '320px'}, inputRow: {display: 'block', marginTop: '0.5em'}, input: {width: '100%', fontSize: '1em', padding: '0.5em', boxSizing: 'border-box', outline: 'none', border: 'none', borderBottom: '2px solid #2196F3'}, inputLabel: {display: 'block', textAlign: 'left'}, actionRow: {display: 'flex', marginTop: '0.5em', textAlign: 'right'}, action: {fontSize: '1em', border: 'none', outline: 'none', padding: '12px 50px', backgroundColor: '#ededed', cursor: 'pointer'}, footer: {marginTop: '1em'}, footerLeft: {float: 'left'}, footerRight: {float: 'right'}, link: {textDecoration: 'underline', cursor: 'pointer'}, error: {background: 'orange', padding: '0.5em'}, nav: {marginBottom: '1em', display: 'flex', justifyContent: 'space-between', backgroundColor: '#2196F3', color: '#fff', padding: '1em', item: {fontWeight: '500', padding: '0 0.5em', cursor: 'pointer'}, greeting: {fontWeight: '500', color: '#000', padding: '0 0.5em'}, main: {flexGrow: '1', textAlign: 'left'}, right: {fontSize: '0.8em'}}} }})
