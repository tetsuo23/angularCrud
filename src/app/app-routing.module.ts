import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { HomeComponent } from './component/page/home/home.component';

import { PostCreateComponent } from './component/page/post-create/post-create.component';

import { PostEditComponent } from './component/page/post-edit/post-edit.component';

import { PostShowComponent } from './component/page/post-show/post-show.component';

const routes: Routes = [
  {
    path: 'member/create',
    component: MemberAddComponent
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent
  },
  {
    path: 'members',
    component: MemberGetComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'post/create',
    component: PostCreateComponent
  },
  {
    path: 'post/:id',
    component: PostEditComponent
  },

  {
    path: 'post',
    component: PostShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
