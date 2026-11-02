import { Component } from "@angular/core";  

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
    name = 'Stefan De Moor';
    introduction = `I am a passionate software developer with a 
    strong interest in web development and a keen eye for detail. 
    I enjoy creating efficient and user-friendly applications that solve real-world problems.`;
}