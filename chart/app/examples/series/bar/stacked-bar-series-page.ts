import { CategoricalDataModel } from "../../data-models/categorical-data-model";

import { Frame } from "tns-core-modules/ui/frame";
import { RadCartesianChart, CategoricalSeries, ChartSeriesStackMode } from "nativescript-ui-chart";

let context: CategoricalDataModel = new CategoricalDataModel();

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = context;
}

export function onNavigatedTo(args) {
    context.updateStackMode();
}

export function onNoneStackModeSelected(args: any) {
    const chart = <RadCartesianChart>Frame.topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = ChartSeriesStackMode.None;
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStackModeSelected(args: any) {
    const chart = <RadCartesianChart>Frame.topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = ChartSeriesStackMode.Stack;
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStack100ModeSelected(args: any) {
    const chart = <RadCartesianChart>Frame.topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = ChartSeriesStackMode.Stack100;
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}