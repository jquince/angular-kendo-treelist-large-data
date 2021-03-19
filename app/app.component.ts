import { Component } from '@angular/core';
import { ExpandEvent } from '@progress/kendo-angular-treelist';
import { Employee, employees } from './employees';
import { gridData } from './data';

@Component({
    selector: 'my-app',
    template: `
        <kendo-treelist [kendoTreeListFlatBinding]="data" [height]="410"
                idField="id" parentIdField="parentId"
                [isExpanded]="isExpanded"
                (expand)="onExpand($event)"
                (collapse)="onCollapse($event)"
                >
            <kendo-treelist-column [expandable]="true" field="assetName" title="Name" [width]="250">
            </kendo-treelist-column>
            <kendo-treelist-column field="ticker" title="Title" [width]="180"></kendo-treelist-column>
            <kendo-treelist-column field="value.after" title="Phone" [width]="180"></kendo-treelist-column>
        </kendo-treelist>
    `
})
export class AppComponent {
    public data: [] = gridData;

    /**
     * The field that holds the keys of the expanded items.
     */
    private expandedIds: string[] = [ 1, 2, 3 ];

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
}
