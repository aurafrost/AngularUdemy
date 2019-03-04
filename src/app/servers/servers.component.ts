import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server created";
  serverName="";
  serverCreated=false
  servers=['Test1','Test2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus="Server created"
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
