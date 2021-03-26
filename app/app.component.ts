import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ExpandEvent, TreeListComponent } from '@progress/kendo-angular-treelist';
import { gridData } from './data';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public data: Array<any> = gridData;
    private parentIds:Set<number>;
    private expandAll:boolean;
    /**
     * The field that holds the keys of the expanded items.
     */
    expandedIds: Array<number>;

    constructor(http: HttpClient, private cd: ChangeDetectorRef) {
        // http.get<Array<any>>('/assets/data.json').subscribe(data => this.data = data);
    }
    ngOnInit(): void {
        this.parentIds = new Set();
        this.data.forEach(item => {
            if (item.parentId) {
                this.parentIds.add(item.parentId);
            }
        });
        this.toggleExpandAll();
    }

    /**
     * A function that determines whether a given item is expanded.
     */
    public isExpanded = (dataItem: any): boolean => {
        return this.expandedIds.indexOf(dataItem.id) > -1;
    }

    /**
     * A `collapse` event handler that will collapse the item.
     */
    public onCollapse(args: ExpandEvent): void {
        this.expandedIds = this.expandedIds.filter(id => id !== args.dataItem.id);
    }

    /**
     * A `expand` event handler that will expand the item.
     */
    public onExpand(args: ExpandEvent): void {
        this.expandedIds.push(args.dataItem.id);
    }

    toggleExpandAll(): void {
        this.expandAll = !this.expandAll;

        if (this.expandAll) {
            this.expandedIds = Array.from(this.parentIds);
        } else {
            this.expandedIds = [];
        }
    }
}
