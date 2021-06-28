import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-messagesprof',
  templateUrl: './messagesprof.component.html',
  styleUrls: ['./messagesprof.component.css']
})
export class MessagesprofComponent implements OnInit, OnDestroy {

  imagenUrl: String = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuario( this.usuarioService.uid )
    .subscribe( res => {
      this.imagenUrl = this.usuarioService.imagenURL;
    });

    document.getElementById('nav-part3').style.fontWeight = '800';
    document.getElementById('nav-part3').style.textDecoration = 'underline';
  }

  ngOnDestroy(): void {
    document.getElementById('nav-part3').style.fontWeight = '';
    document.getElementById('nav-part3').style.textDecoration = '';
  }

  newChat(obj){
    console.log(obj);
    if (document.getElementById('chat-selected').childNodes.length>0) {

    }else{
      let content = document.getElementById('chat-selected');
      content.appendChild(obj);
    }
  }

}
