import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  imagenUrl: string = '';

  constructor( private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuario( this.usuarioService.uid )
      .subscribe( res => {
        this.imagenUrl = this.usuarioService.imagenURL;
      });
  }

  logout() {
    this.usuarioService.logout();
  }

  ngOnDestroy(): void{
  }
}
