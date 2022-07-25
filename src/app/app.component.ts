import {AfterViewInit, Component, Input, ViewChild} from '@angular/core'
import { FlowchartComponent } from "@jsplumb-components/flowchart-angular"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(FlowchartComponent) flowchart!:FlowchartComponent;

  title = 'flowchart-angular'

  ngAfterViewInit(): void {

    this.flowchart.loadUrl("assets/copyright.json")
  }



}
