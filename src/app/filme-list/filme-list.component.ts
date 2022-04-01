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
    this.filmeList = this.filmeService.findAll();
    if(this.filmeList.length === 0) {
      const filme = new Filme();
      filme.id = 1;
      filme.titulo = 'Star wars';
      filme.genero = 'Sei la'
      filme.dataLancamento = new Date();
      filme.precoBilhete = 2;
      filme.classificacao = ClassificacaoEnum.ADULTO

      const filme2 = new Filme();
      filme2.id = 2;
      filme2.titulo = 'NHA';
      filme2.genero = 'Sei la'
      filme2.dataLancamento = new Date();
      filme2.precoBilhete = 6;
      filme2.classificacao = ClassificacaoEnum.ADOLECENTE
      this.filmeService.add(filme);
      this.filmeService.add(filme2);
    
      this.filmeList = this.filmeService.findAll();  
  }
    
  }

}
