import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';


@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs color="primary">
      <ion-tab [root]="homePage" tabTitle="Home" tabIcon="ios-home"></ion-tab>
      <ion-tab [root]="contactPage" tabTitle="Contact" tabIcon="chatboxes"></ion-tab>
      <ion-tab tabTitle="Facebook" tabIcon="logo-facebook" target="_system"></ion-tab>
    </ion-tabs>
<script>
    function openExternal(elem) {
    window.open(elem.href, "_system");
    return false; // Prevent execution of the default onClick handler 
}
</script>
    `
})

export class TabsPage {
    homePage = HomePage;
    contactPage = ContactPage;
}