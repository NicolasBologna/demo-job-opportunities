"use strict";(self.webpackChunkJobOpportunities_SPA=self.webpackChunkJobOpportunities_SPA||[]).push([[3],{3:(k,Z,i)=>{i.r(Z),i.d(Z,{AuthenticationModule:()=>j});var C=i(6895),t=i(4006),r=i(4650),v=i(9722);let I=(()=>{class e{constructor(){this.validateConfirmPassword=n=>o=>{const m=o.value;return""===m?null:m!==n.value?{mustMatch:!0}:null}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=i(7337),f=i(4859),c=i(3546),d=i(9549),b=i(7392),U=i(4144),_=i(811);function w(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Debe ingresar un nombre"),r.qZA())}function A(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Debe ingresar un apellido"),r.qZA())}function N(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Debe ingresar un email"),r.qZA())}function q(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Debe ingresar una contrase\xf1a "),r.qZA())}function y(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Por favor confirme la contrase\xf1a "),r.qZA())}function M(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Debe ingresar una contrase\xf1a equivalente "),r.qZA())}function P(e,a){if(1&e&&(r.TgZ(0,"p",16),r._uU(1),r.qZA()),2&e){const n=r.oxw();r.xp6(1),r.Oqu(n.errorMessage)}}const S=function(){return["/auth/login"]};let F=(()=>{class e{constructor(n,o,m){this.authService=n,this.passConfValidator=o,this.router=m,this.errorMessage="",this.validateControl=u=>this.registerForm.get(u).invalid&&this.registerForm.get(u).touched,this.hasError=(u,s)=>this.registerForm.get(u).hasError(s),this.registerUser=u=>{this.showError=!1;const s={...u};this.authService.registerUser("auth/register",{firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password,confirmPassword:s.confirm,userType:s.userType}).subscribe({next:p=>this.router.navigate(["/authentication/login"]),error:p=>{this.errorMessage=p.message,this.showError=!0}})}}ngOnInit(){this.registerForm=new t.cw({firstName:new t.NI("",[t.kI.required]),lastName:new t.NI("",[t.kI.required]),email:new t.NI("",[t.kI.required,t.kI.email]),password:new t.NI("",[t.kI.required]),confirm:new t.NI(""),userType:new t.NI("Candidate",[t.kI.required])}),this.registerForm.get("confirm").setValidators([t.kI.required,this.passConfValidator.validateConfirmPassword(this.registerForm.get("password"))])}}return e.\u0275fac=function(n){return new(n||e)(r.Y36(v.$),r.Y36(I),r.Y36(l.F0))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-register-user"]],decls:46,vars:11,consts:[[1,"register-container"],[3,"formGroup","ngSubmit"],["formControlName","userType","aria-label","Tipo de ingreso",1,"user-type-selector"],["value","Candidate"],["value","CompanyAgent"],["appearance","standard"],["matInput","","placeholder","Juan","formControlName","firstName"],[4,"ngIf"],["matInput","","placeholder","Perez","formControlName","lastName"],["matInput","","placeholder","ejemplo@mail.com","formControlName","email"],["matInput","","type","password","formControlName","password"],["matInput","","type","password","formControlName","confirm"],["class","error",4,"ngIf"],[1,"button"],["mat-button","",3,"routerLink"],["type","submit","mat-button","",3,"disabled"],[1,"error"]],template:function(n,o){1&n&&(r.TgZ(0,"mat-card",0)(1,"mat-card-title"),r._uU(2,"Alta de Usuario"),r.qZA(),r.TgZ(3,"form",1),r.NdJ("ngSubmit",function(){return o.registerUser(o.registerForm.value)}),r.TgZ(4,"div")(5,"mat-label"),r._uU(6," Tipo de usuario: "),r.qZA(),r.TgZ(7,"mat-button-toggle-group",2)(8,"mat-button-toggle",3)(9,"mat-icon"),r._uU(10,"school"),r.qZA()(),r.TgZ(11,"mat-button-toggle",4)(12,"mat-icon"),r._uU(13,"work"),r.qZA()()()(),r.TgZ(14,"mat-form-field",5)(15,"mat-label"),r._uU(16,"Nombre"),r.qZA(),r._UZ(17,"input",6),r.YNc(18,w,2,0,"mat-error",7),r.qZA(),r.TgZ(19,"mat-form-field",5)(20,"mat-label"),r._uU(21,"Apellido"),r.qZA(),r._UZ(22,"input",8),r.YNc(23,A,2,0,"mat-error",7),r.qZA(),r.TgZ(24,"mat-form-field",5)(25,"mat-label"),r._uU(26,"Email"),r.qZA(),r._UZ(27,"input",9),r.YNc(28,N,2,0,"mat-error",7),r.qZA(),r.TgZ(29,"mat-form-field",5)(30,"mat-label"),r._uU(31,"Contrase\xf1a"),r.qZA(),r._UZ(32,"input",10),r.YNc(33,q,2,0,"mat-error",7),r.qZA(),r.TgZ(34,"mat-form-field",5)(35,"mat-label"),r._uU(36,"Confirm\xe1 contrase\xf1a"),r.qZA(),r._UZ(37,"input",11),r.YNc(38,y,2,0,"mat-error",7),r.YNc(39,M,2,0,"mat-error",7),r.qZA(),r.YNc(40,P,2,1,"p",12),r.TgZ(41,"div",13)(42,"a",14),r._uU(43,"Ingresar"),r.qZA(),r.TgZ(44,"button",15),r._uU(45,"Crear"),r.qZA()()()()),2&n&&(r.xp6(3),r.Q6J("formGroup",o.registerForm),r.xp6(15),r.Q6J("ngIf",o.validateControl("firstName")&&o.hasError("firstName","required")),r.xp6(5),r.Q6J("ngIf",o.validateControl("lastName")&&o.hasError("lastName","required")),r.xp6(5),r.Q6J("ngIf",o.validateControl("email")&&o.hasError("email","required")),r.xp6(5),r.Q6J("ngIf",o.validateControl("password")&&o.hasError("password","required")),r.xp6(5),r.Q6J("ngIf",o.validateControl("confirm")&&o.hasError("confirm","required")),r.xp6(1),r.Q6J("ngIf",o.validateControl("confirm")&&o.hasError("confirm","mustMatch")),r.xp6(1),r.Q6J("ngIf",o.showError),r.xp6(2),r.Q6J("routerLink",r.DdM(10,S)),r.xp6(2),r.Q6J("disabled",!o.registerForm.valid))},dependencies:[C.O5,l.yS,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,f.lW,f.zs,c.a8,c.n5,d.TO,d.KE,d.hX,b.Hw,U.Nt,_.A9,_.Yi],styles:["em[_ngcontent-%COMP%]{color:#e71515;font-weight:700}.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}mat-button-toggle-group[_ngcontent-%COMP%]{margin:auto}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.error[_ngcontent-%COMP%]{color:#e71515;font-size:small}.register-container[_ngcontent-%COMP%]{background-color:#1b1c1dba;padding:2rem;margin-top:1rem;color:#ffffffb3;border-radius:.5rem;max-width:30rem;margin:auto}"]}),e})();var J=i(7185),O=i(1572);function x(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Username is required "),r.qZA())}function E(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Password is required "),r.qZA())}function Y(e,a){if(1&e&&(r.TgZ(0,"p",9),r._uU(1),r.qZA()),2&e){const n=r.oxw();r.xp6(1),r.Oqu(n.errorMessage)}}const Q=function(){return["/auth/register"]};function L(e,a){if(1&e&&(r.TgZ(0,"div",10)(1,"a",11),r._uU(2,"Registrarse"),r.qZA(),r.TgZ(3,"button",12),r._uU(4,"Entrar"),r.qZA()()),2&e){const n=r.oxw();r.xp6(1),r.Q6J("routerLink",r.DdM(2,Q)),r.xp6(2),r.Q6J("disabled",!n.loginForm.valid)}}function R(e,a){1&e&&r._UZ(0,"mat-spinner",13),2&e&&r.Q6J("diameter",20)}let T=(()=>{class e{constructor(n,o,m,u){this.authService=n,this.router=o,this.route=m,this.toastrSerive=u,this.showSpinner=!1,this.errorMessage="",this.validateControl=s=>this.loginForm.get(s).invalid&&this.loginForm.get(s).touched,this.hasError=(s,g)=>this.loginForm.get(s).hasError(g),this.loginUser=s=>{this.showSpinner=!0,this.showError=!1;const g={...s};this.authService.loginUser("auth/token",{userName:g.username,password:g.password}).subscribe({next:h=>{localStorage.setItem("token",h.accessToken),localStorage.setItem("user_type",this.authService.getUserRole()),this.authService.sendAuthStateChangeNotification(h.isAuthSuccessful),this.toastrSerive.success("Ingres\xf3 correctamente","Bienvenido!"),this.router.navigate([this.returnUrl])},error:h=>{this.errorMessage=h.message,this.toastrSerive.error("Hubo un error","Intente nuevamente"),this.showError=!0,this.showSpinner=!1}})}}ngOnInit(){this.loginForm=new t.cw({username:new t.NI("",[t.kI.required]),password:new t.NI("",[t.kI.required]),userType:new t.NI("candidate")}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}}return e.\u0275fac=function(n){return new(n||e)(r.Y36(v.$),r.Y36(l.F0),r.Y36(l.gz),r.Y36(J._W))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-login"]],decls:15,vars:6,consts:[[1,"register-container"],[3,"formGroup","ngSubmit"],["color","accent"],["type","text","matInput","","placeholder","Username","formControlName","username"],[4,"ngIf"],["type","password","matInput","","placeholder","Password","formControlName","password"],["class","error",4,"ngIf"],["class","button",4,"ngIf","ngIfElse"],["spinner",""],[1,"error"],[1,"button"],["mat-button","",3,"routerLink"],["type","submit","mat-button","",3,"disabled"],["color","accent",3,"diameter"]],template:function(n,o){if(1&n&&(r.TgZ(0,"mat-card",0)(1,"mat-card-title"),r._uU(2,"Ingresar"),r.qZA(),r.TgZ(3,"mat-card-content")(4,"form",1),r.NdJ("ngSubmit",function(){return o.loginUser(o.loginForm.value)}),r.TgZ(5,"mat-form-field",2),r._UZ(6,"input",3),r.YNc(7,x,2,0,"mat-error",4),r.qZA(),r.TgZ(8,"mat-form-field",2),r._UZ(9,"input",5),r.YNc(10,E,2,0,"mat-error",4),r.qZA(),r.YNc(11,Y,2,1,"p",6),r.YNc(12,L,5,3,"div",7),r.YNc(13,R,1,1,"ng-template",null,8,r.W1O),r.qZA()()()),2&n){const m=r.MAs(14);r.xp6(4),r.Q6J("formGroup",o.loginForm),r.xp6(3),r.Q6J("ngIf",o.validateControl("username")&&o.hasError("username","required")),r.xp6(3),r.Q6J("ngIf",o.validateControl("password")&&o.hasError("password","required")),r.xp6(1),r.Q6J("ngIf",o.showError),r.xp6(1),r.Q6J("ngIf",!o.showSpinner)("ngIfElse",m)}},dependencies:[C.O5,l.yS,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,f.lW,f.zs,c.a8,c.dn,c.n5,d.TO,d.KE,U.Nt,O.Ou],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}form[_ngcontent-%COMP%]{max-width:20rem}.mat-form-field[_ngcontent-%COMP%]{min-width:20rem;margin:1rem 0}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.error[_ngcontent-%COMP%]{color:red}.register-container[_ngcontent-%COMP%]{background-color:#1b1c1dba;padding:2rem;margin-top:1rem;color:#ffffffb3;border-radius:.5rem}.mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),e})();var z=i(9471);let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[C.ez,l.Bz.forChild([{path:"register",component:F}]),l.Bz.forChild([{path:"login",component:T}]),l.Bz.forChild([{path:"",component:T}]),t.UX,z.q]}),e})()}}]);