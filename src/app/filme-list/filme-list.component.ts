import {Component, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit {
  filmeList: Filme[];

  constructor(private filmeService: FilmeService) {
  }

  ngOnInit(): void {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star wars';
    filme.genero = 'Sei la'
    filme.dataLancamento = new Date();
    filme.precoBilhete = 2;
    filme.classificacao = ClassificacaoEnum.ADULTO
    this.filmeService.add(filme);
    // console.log(this.filmeService.findAll());
    this.filmeList = this.filmeService.findAll();
  }

}
