import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector:      'ptb-app',
    templateUrl:   './plugin-terra-basic.component.html',
    styleUrls:     ['./plugin-terra-basic.component.scss'],
})
export class PluginTerraBasicComponent implements OnInit
{
    public readonly nuts:Array<string> = ['Hazel', 'Almond'];
    public readonly fruits:Array<string> = ['Banana', 'Orange','Cherry'];
    public readonly strings:Array<string> = this.fruits.concat(this.nuts);

    private readonly banana:Object = {
        color: 'Yellow',
        name: 'Banana',
        howToEat: 'No one knows'
    };

    public ngOnInit():void
    {
        this.objectKeys(this.banana);
        this.objectValues(this.banana);
        this.objectEntries(this.banana);
    }

    private readonly numbers:Array<number> = [22, 8, 19, 44, 35, 2];

    public allFruits(array:Array<string>):Array<string>
    {
        return null;
    }

    public fruitWith(array:Array<string>, letter:string):Array<string>
    {
        return null;
    }

    public allIndices(array:Array<string>):Array<string>
    {
        return null;
    }

    public sortArray(array:Array<number>):Array<number>
    {
        return null;
    }

    public mapArray(array:Array<number>):Array<number>
    {
        return null;
    }

    public mapAndFilterArray(array:Array<number>):Array<number>
    {
        return null;
    }

    private objectKeys(object:Object):void
    {

    }

    private objectValues(object:Object):void
    {

    }

    private objectEntries(object:Object):void
    {

    }
}
