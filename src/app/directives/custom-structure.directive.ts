import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[customFor][customForOf]'
})

export class CustomStructureDirective {
    @Input() set customForOf(collection) {
        collection.forEach((item, index) => {
            this.view.createEmbeddedView(this.template, {$implicit: item, index});
        });
    }

    constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {}
}
