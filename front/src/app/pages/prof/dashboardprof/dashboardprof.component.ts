import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-dashboardprof',
  templateUrl: './dashboardprof.component.html',
  styleUrls: ['./dashboardprof.component.css']
})
export class DashboardprofComponent implements OnInit, OnDestroy {

  imagenUrl: String = '';
  name: String = '';
  private sform = false;

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuario( this.usuarioService.uid )
      .subscribe( res => {
        this.imagenUrl = this.usuarioService.imagenURL;
        this.name = this.usuarioService.nombre + ' ' + this.usuarioService.apellidos;
      });

    document.getElementById('nav-part1').style.fontWeight = '800';
    document.getElementById('nav-part1').style.textDecoration = 'underline';
  }

  ngOnDestroy(): void {
    document.getElementById('nav-part1').style.fontWeight = '';
    document.getElementById('nav-part1').style.textDecoration = '';
  }

  showForm(){
    if (!this.sform) {
      document.getElementById('post-form').style.display = 'block';
      document.getElementById('fondo').style.display = 'block';
      document.getElementById('post-form').classList.remove('animate__backOutRight');
      document.getElementById('post-form').classList.add('animate__backInRight');
      document.body.style.overflow = 'hidden';
      this.sform = true;
    }else{
      document.getElementById('fondo').style.display = 'none';
      document.getElementById('post-form').classList.remove('animate__backInRight');
      document.getElementById('post-form').classList.add('animate__backOutRight');
      document.body.style.overflow = 'auto';
      this.sform = false;
    }
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
      let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      let max = document.documentElement.scrollHeight;
      if(pos == max)   {
        document.getElementById('up-muro').style.display = 'none';
        document.getElementById('new-post').style.top = '6rem';
        document.getElementById('post-form').style.top = '6.5rem';
      }else{
        document.getElementById('up-muro').style.display = 'block';
        document.getElementById('new-post').style.top = '1rem';
        document.getElementById('post-form').style.top = '1.5rem';
      }
    }

}
