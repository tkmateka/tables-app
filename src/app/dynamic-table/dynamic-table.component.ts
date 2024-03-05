import { OnChanges, Component, Input, ViewChild, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges, AfterViewInit {
  @Input() tableData: any;

  displayedColumns: string[] = [];
  displayedHeaders: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHanges', changes['tableData']);

    if (changes['tableData']) {
      this.displayedColumns = this.tableData.displayedColumns;
      this.displayedHeaders = this.tableData.displayedHeaders;
      this.dataSource = this.tableData.dataSource;
    }
  }

  ngAfterViewInit(): void {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
